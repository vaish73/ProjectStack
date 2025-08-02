"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

// Enhanced type with validation
type ProfileData = {
  name: string;
  skills: string[];
  section: string;
  branch: string;
  year: string;
  bio?: string | null;
};

// Result types for better error handling
type ActionResult<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Helper function to get authenticated user
async function getAuthenticatedUser() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    throw new Error("Authentication required");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

// Validation helper
function validateProfileData(data: ProfileData): string[] {
  const errors: string[] = [];
  
  if (!data.name?.trim()) errors.push("Name is required");
  if (!data.section?.trim()) errors.push("Section is required");
  if (!data.branch?.trim()) errors.push("Branch is required");
  if (!data.year?.trim()) errors.push("Year is required");
  if (!Array.isArray(data.skills) || data.skills.length === 0) {
    errors.push("At least one skill is required");
  }
  
  // Validate year format (assuming 4-digit year)
  if (data.year && !/^\d{4}$/.test(data.year)) {
    errors.push("Year must be a 4-digit number");
  }
  
  return errors;
}

export async function createProfile(formData: ProfileData): Promise<ActionResult<any>> {
  try {
    // Validate input data
    const validationErrors = validateProfileData(formData);
    if (validationErrors.length > 0) {
      return {
        success: false,
        error: validationErrors.join(", ")
      };
    }

    const user = await getAuthenticatedUser();

    // Check if profile already exists
    const existingProfile = await prisma.profile.findUnique({
      where: { userId: user.id }
    });

    if (existingProfile) {
      return {
        success: false,
        error: "Profile already exists. Use updateProfile instead."
      };
    }

    const profile = await prisma.profile.create({
      data: {
        name: formData.name.trim(),
        skills: formData.skills.filter(skill => skill.trim()),
        section: formData.section.trim(),
        branch: formData.branch.trim(),
        year: formData.year.trim(),
        bio: formData.bio?.trim() || null,
        userId: user.id
      }
    });

    // Revalidate relevant pages
    revalidatePath("/profile");
    revalidatePath("/dashboard");

    return {
      success: true,
      data: profile
    };

  } catch (error) {
    console.error("Profile creation error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create profile"
    };
  }
}

export async function getProfile(): Promise<ActionResult<any>> {
  try {
    const user = await getAuthenticatedUser();
    
    const profile = await prisma.profile.findUnique({
      where: { userId: user.id }
    });

    return {
      success: true,
      data: profile
    };

  } catch (error) {
    console.error("Profile fetch error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch profile"
    };
  }
}

export async function updateProfile(formData: ProfileData): Promise<ActionResult<any>> {
  try {
    // Validate input data
    const validationErrors = validateProfileData(formData);
    if (validationErrors.length > 0) {
      return {
        success: false,
        error: validationErrors.join(", ")
      };
    }

    const user = await getAuthenticatedUser();

    const profile = await prisma.profile.update({
      where: { userId: user.id },
      data: {
        name: formData.name.trim(),
        skills: formData.skills.filter(skill => skill.trim()),
        section: formData.section.trim(),
        branch: formData.branch.trim(),
        year: formData.year.trim(),
        bio: formData.bio?.trim() || null,
      }
    });

    // Revalidate relevant pages
    revalidatePath("/profile");
    revalidatePath("/dashboard");

    return {
      success: true,
      data: profile
    };

  } catch (error) {
    console.error("Profile update error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update profile"
    };
  }
}

export async function completeOnboarding(): Promise<ActionResult<boolean>> {
  try {
    const user = await getAuthenticatedUser();

    await prisma.user.update({
      where: { id: user.id },
      data: { onboarded: true }
    });

    // Revalidate relevant pages
    revalidatePath("/onboarding");
    revalidatePath("/dashboard");

    return {
      success: true,
      data: true
    };

  } catch (error) {
    console.error("Onboarding completion error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to complete onboarding"
    };
  }
}

export async function deleteProfile(): Promise<ActionResult<boolean>> {
  try {
    const user = await getAuthenticatedUser();

    await prisma.profile.delete({
      where: { userId: user.id }
    });

    // Revalidate relevant pages
    revalidatePath("/profile");
    revalidatePath("/dashboard");

    return {
      success: true,
      data: true
    };

  } catch (error) {
    console.error("Profile deletion error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete profile"
    };
  }
}