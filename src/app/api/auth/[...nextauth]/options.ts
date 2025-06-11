import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
    if (user) {
        token.sub = user.id;
        token.username = user.username;
        token.onboarded = user.onboarded;
    } else {
        const dbUser = await prisma.user.findUnique({
        where: { id: token.sub },
        });
        if (dbUser) {
        token.username = dbUser.username ?? undefined;
        token.onboarded = dbUser.onboarded ?? false;
        }
    }

    return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.sub,
          username: token.username,
          onboarded: token.onboarded
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
};
