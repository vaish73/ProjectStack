"use client";

import React from "react";
import { signIn } from "next-auth/react";
import * as icons from "lucide-react";
import Image from 'next/image';

const { Github } = icons;

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-slate-900 via-slate-800 md:via-indigo-900 to-indigo-900 md:to-slate-900 text-white flex">
      <div className="w-full hidden md:flex  flex-col justify-center p-16 space-y-10">
        <h1 className="text-xl font-bold leading-snug">
          Sign in via GitHub to share projects, collaborate with peers, and
          contribute to the open dev world.
        </h1>

        <div className="text-lg text-gray-300 leading-relaxed space-y-4">
          <p>
            <span className="font-semibold">Why GitHub?</span> It&apos;s the #1 platform
            for developers to host code, manage projects, and work together.
          </p>
          <p>
            We&apos;ll use your GitHub identity to personalize your experience, fetch
            your public profile, and securely link your contributions.
          </p>
          <p>
            Everything is fast, secure, and built with devs in mind. Just how it
            should be.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center  shadow-2xl">
        <Image 
        src={"/logo.png"}
        width={250}
        height={250}
        alt="Loading Image"
        className="object-contain"
        />
        <div className="flex flex-col justify-center gap-4 items-center">
          <div className="text-4xl font-extrabold tracking-wide">Project Stack</div>
          <div className="text-lg text-gray-400 text-center max-w-md">
            Showcase, explore, and collaborate <br/> on full stack projects.
          </div>

          <button
            onClick={() => signIn("github", {callbackUrl: "/dashboard"})}
            className="flex cursor-pointer scale-100 items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            Sign in with GitHub
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page;
