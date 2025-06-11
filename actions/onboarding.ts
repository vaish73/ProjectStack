"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function completeOnboarding(){
    const session = await getServerSession(authOptions);

    if(!session?.user?.email) {
        throw new Error("Unauthorized Access");
    }

    await prisma.user.update({
        where: { email: session.user.email },
        data: { onboarded: true }
    })
}