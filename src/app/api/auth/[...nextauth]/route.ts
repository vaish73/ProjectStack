import NextAuth from "next-auth";
import { authOptions } from "./options";

export const GET = async (req: Request) => {
  const options = await authOptions();
  return NextAuth(options)(req);
};

export const POST = async (req: Request) => {
  const options = await authOptions();
  return NextAuth(options)(req); 
};
