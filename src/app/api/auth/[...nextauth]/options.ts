import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions = async (): Promise<NextAuthOptions> => {
  const { default: prisma } = await import("@/lib/prisma");

  return {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.sub = user.id;
          token.username = user.username;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user = {
            ...session.user,
            id: token.sub,
            username: token.username,
          };
        }
        return session;
      },
    },
    session: {
      strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/sign-in",
    },
  };
};
