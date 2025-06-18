"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

type ProfileData = {
    name: string,
    skills: string[],
    section :string
    branch :string
    year   :string
    bio    : string | null
}

export async function newProfile(formData: ProfileData) {
    const session  = await getServerSession(authOptions);
    if(!session?.user?.email) throw new Error("Unauthorized Access");
    const user = await prisma.user.findUnique({
        where: { email: session.user.email}
    })
    if(!user) throw new Error("User not found");

    const profile = await prisma.profile.create({
        data: {
            ...formData,
            skills: formData.skills,
            userId: user.id
        }
    })
    console.log(profile);
    return profile;
}

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