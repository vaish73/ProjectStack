"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema, OnboardingType } from "@/lib/schema";

const Page = () => {
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

  const onSubmit = (data: OnboardingType) => {
    const formData = new FormData();
    for (const key in data) {
      const value = (data as any)[key];

      if (key === "image" && value?.[0]) {
        formData.append("image", value[0]);
      } else {
        formData.append(key, String(value ?? ""));
      }
    }
    console.log([...formData.entries()]);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
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
    <main className="flex min-h-screen bg-gradient-to-br from-slate-900 to-blue-600 font-sans text-white">
      <div className="hidden md:w-full md:flex flex-col justify-center items-center text-center space-y-1 relative">
        <img src="/logo.png" alt="Logo" className="w-80 h-80 -mt-60" />
        <div className="-mt-18">
          <h1 className="text-3xl tracking-widest font-extrabold">
            Project<span className="text-sky-500">Stack</span>
          </h1>
          <h2 className="text-4xl font-semibold">Let&apos;s get you started!</h2>
          <p className="text-sm pt-3 text-gray-200">
            Complete the form to get your account up and running
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-slate-800 to-blue-800 p-10">
        <h3 className="text-xl font-bold mb-5 -mt-6">
          About <span className="text-sky-500">You</span>
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">

          <div className="flex flex-col items-center space-y-1 mb-4">
            <label htmlFor="propic" className="relative cursor-pointer group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={previewImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="file"
                id="propic"
                accept="image/*"
                className="hidden"
                {...register("image")}
                  ref={(e) => {
                    register("image").ref(e); // 👈 hook-form gets the ref
                    fileInputRef.current = e; // 👈 you also get the DOM node
                  }}
              />
            </label>
            <label htmlFor="propic" className="cursor-pointer text-sm text-white">
              Upload Profile Picture
            </label>
          </div>

          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Branch</label>
            <select
              {...register("branch")}
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
            >
              <option className="bg-slate-800 text-white" value="">Select Branch</option>
              <option className="bg-slate-800 text-white" value="CSE">CSE</option>
              <option className="bg-slate-800 text-white" value="ISE">ISE</option>
              <option className="bg-slate-800 text-white" value="ICB">ICB</option>
              <option className="bg-slate-800 text-white" value="AI/ML">AI/ML</option>
            </select>
            {errors.branch && (
              <p className="text-red-400 text-sm mt-1">{errors.branch.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Section</label>
            <input
              {...register("section")}
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
            />
            {errors.section && (
              <p className="text-red-400 text-sm mt-1">{errors.section.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Year</label>
            <select
              {...register("year")}
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
            >
              <option className="bg-slate-800 text-white" value="">Select Year</option>
              <option className="bg-slate-800 text-white" value="First">First</option>
              <option className="bg-slate-800 text-white" value="Second">Second</option>
              <option className="bg-slate-800 text-white" value="Third">Third</option>
              <option className="bg-slate-800 text-white" value="Fourth">Fourth</option>
            </select>
            {errors.year && (
              <p className="text-red-400 text-sm mt-1">{errors.year.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Skills</label>
            <input
              {...register("skills")}
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
            />
            {errors.skills && (
              <p className="text-red-400 text-sm mt-1">{errors.skills.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Bio</label>
            <textarea
              {...register("bio")}
              rows={3}
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-sky-600 hover:bg-sky-500 cursor-pointer px-6 py-2 rounded font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
