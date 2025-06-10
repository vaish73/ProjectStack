import z from "zod";

export const onboardingSchema = z.object({
    image: z.any().optional(),
    name: z.string().min(1, "Name is required"),
    section: z.string().min(1, "Section is Required"),
    branch: z.string().min(1, "Branch is required"),
    year: z.string().min(1,"Please select a year"),
    skills: z.string().min(1, "Mention any one skill"),
    bio: z.string().optional()
})

export type OnboardingType = z.infer<typeof onboardingSchema>