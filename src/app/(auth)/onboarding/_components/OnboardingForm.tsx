"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema, OnboardingType } from "@/lib/schema";
import Image from "next/image";
import { completeOnboarding } from "../../../../../actions/onboarding";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, User, Code, GraduationCap, Users, ArrowRight, Camera } from "lucide-react";

export default function OnboardingForm() {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState("/profileuploadpic.jpg");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<OnboardingType>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "",
      branch: "",
      year: "",
      section: "",
      skills: "",
      bio: "",
    },
  });

  const onSubmit = async (data: OnboardingType) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "image" && value instanceof FileList && value[0]) {
        formData.append("image", value[0]);
      } else {
        formData.append(key, String(value ?? ""));
      }
    });
    console.log([...formData.entries()]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    await completeOnboarding();
    await signIn("github", { redirect: false });
    router.push("/dashboard");
    setPreviewImage("/profileuploadpic.jpg");
    reset();
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const subscription = watch((value) => {
      const file = value.image?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setPreviewImage(reader.result as string);
        reader.readAsDataURL(file);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="min-w-full overflow-hidden relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-10"></div>
      
      <div className="relative w-full z-10 min-h-screen flex">
        <div className="hidden md:flex w-full flex-col justify-center items-center p-16 space-y-8">
          <div className="text-center space-y-6">
            <div className="relative mx-auto w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full blur-2xl opacity-30"></div>
              <Image
                src="/android-chrome-512x512.png"
                alt="ProjectStack Logo"
                width={128}
                height={128}
                className="relative rounded-full object-contain"
              />
            </div>
            
            <div className="space-y-4">
              <Badge className="bg-blue-900/50 text-blue-300 hover:bg-blue-900/50 border border-blue-700">
                🚀 Almost There!
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  ProjectStack
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-md">
                Complete your profile to start collaborating on amazing projects with fellow developers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-md w-full">
            <Card className="p-4 border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Join Teams</div>
                  <div className="text-xs text-slate-400">Collaborate with peers</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Build Projects</div>
                  <div className="text-xs text-slate-400">Create amazing things</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Learn & Grow</div>
                  <div className="text-xs text-slate-400">Enhance your skills</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center p-6">
          <Card className="border border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 lg:p-10">
              <div className="space-y-6">
                <div className="md:hidden flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full blur-xl opacity-30 w-10 h-10" />
                    <Image
                      src="/logo-copy.png"
                      alt="Logo"
                      width={40}
                      height={80}
                      className="relative rounded-full object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Project<span className="text-blue-400"> Stack</span>
                  </h2>
                </div>
                <hr className="md:hidden border-[1px] border-slate-700 w-full" />

                <div className="space-y-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Tell us about{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      yourself
                    </span>
                  </h3>
                  <p className="text-slate-400">
                    Help us personalize your ProjectStack experience
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex flex-col items-center space-y-3">
                    <label htmlFor="propic" className="relative cursor-pointer group">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-blue-400 transition-colors">
                      </div>
                      <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                      <input
                        type="file"
                        id="propic"
                        accept="image/*"
                        className="hidden"
                        {...register("image")}
                        ref={(e) => {
                          register("image").ref(e);
                          fileInputRef.current = e;
                        }}
                      />
                    </label>
                    <label htmlFor="propic" className="cursor-pointer text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      Upload Profile Picture
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        className="w-full px-3 p-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 bg-slate-700/50 text-white placeholder-slate-400 outline-none transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <GraduationCap className="w-4 h-4 inline mr-2" />
                        Branch
                      </label>
                      <select
                        {...register("branch")}
                        className="w-full px-3 p-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 bg-slate-700/50 text-white outline-none transition-all duration-200"
                      >
                        <option className="bg-slate-800 text-white" value="">Select Branch</option>
                        <option className="bg-slate-800 text-white" value="CSE">Computer Science</option>
                        <option className="bg-slate-800 text-white" value="ISE">Information Science</option>
                        <option className="bg-slate-800 text-white" value="ICB">Information & Communication</option>
                        <option className="bg-slate-800 text-white" value="AI/ML">AI & Machine Learning</option>
                      </select>
                      {errors.branch && (
                        <p className="text-red-400 text-sm mt-1">{errors.branch.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Academic Year
                      </label>
                      <select
                        {...register("year")}
                        className="w-full px-3 p-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 bg-slate-700/50 text-white outline-none transition-all duration-200"
                      >
                        <option className="bg-slate-800 text-white" value="">Select Year</option>
                        <option className="bg-slate-800 text-white" value="First">First Year</option>
                        <option className="bg-slate-800 text-white" value="Second">Second Year</option>
                        <option className="bg-slate-800 text-white" value="Third">Third Year</option>
                        <option className="bg-slate-800 text-white" value="Fourth">Fourth Year</option>
                      </select>
                      {errors.year && (
                        <p className="text-red-400 text-sm mt-1">{errors.year.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Section
                      </label>
                      <input
                        {...register("section")}
                        className="w-full p-3 rounded-lg border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 bg-slate-700/50 text-white placeholder-slate-400 outline-none transition-all duration-200"
                        placeholder="e.g., A, B, C"
                      />
                      {errors.section && (
                        <p className="text-red-400 text-sm mt-1">{errors.section.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Code className="w-4 h-4 inline mr-2" />
                        Skills
                      </label>
                      <input
                        {...register("skills")}
                        className="w-full px-3 p-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 bg-slate-700/50 text-white placeholder-slate-400 outline-none transition-all duration-200"
                        placeholder="React, Node.js, Python, etc."
                      />
                      {errors.skills && (
                        <p className="text-red-400 text-sm mt-1">{errors.skills.message}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        {...register("bio")}
                        rows={4}
                        className="w-full px-3 p-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 bg-slate-700/50 text-white placeholder-slate-400 outline-none transition-all duration-200 resize-none"
                        placeholder="Tell us about yourself, your interests, and what you're passionate about building..."
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white p-3 rounded-4xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Complete Setup
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}