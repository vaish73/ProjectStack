import NextAuth from "next-auth";
import { authOptions } from "./options";

const handler = async (req: Request, res: Response) => {
  const options = await authOptions();
  return NextAuth(options)(req, res);  
};

export { handler as GET, handler as POST };
