"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import * as icons from "lucide-react";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

const { Github, ArrowRight, Users, Code, Zap } = icons;

const Page = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-w-full overflow-hidden relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-10"></div>
      
      <div className="relative z-10 min-h-screen flex">
        <div className="w-full hidden lg:flex flex-col justify-center p-16 space-y-8">
          <div className="space-y-6">
            <Badge className="bg-blue-900/50 text-blue-300 hover:bg-blue-900/50 border border-blue-700 w-fit">
              🚀 Join the Community
            </Badge>
            
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-white">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                ProjectStack
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Sign in via GitHub to share projects, collaborate with peers, and
              contribute to the open dev world.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Github className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Connect with your GitHub identity</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Join a community of student developers</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Showcase your projects and skills</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <p className="text-slate-300 leading-relaxed">
                <span className="font-semibold text-blue-400">Why GitHub?</span> It&apos;s the #1 platform
                for developers to host code, manage projects, and work together. We&apos;ll use your GitHub 
                identity to personalize your experience and securely link your contributions.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-slate-400">Student Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-slate-400">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-slate-400">Free Platform</div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-8">

            <div className="text-center space-y-4">
              <div className="relative mx-auto w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full blur-2xl opacity-30"></div>
                <Image 
                  src="/logo.png"
                  width={96}
                  height={96}
                  alt="ProjectStack Logo"
                  className="relative rounded-full object-contain"
                />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">ProjectStack</h2>
                <p className="text-slate-400">
                  Showcase, explore, and collaborate on full stack projects
                </p>
              </div>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center space-y-4">
              <Badge className="bg-blue-900/50 text-blue-300 hover:bg-blue-900/50 border border-blue-700 mx-auto block w-fit">
                🚀 Join the Community
              </Badge>
              
              <div className="p-4 w-[80%]  rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <p className="text-sm text-slate-300 text-center">
                  Connect with GitHub to join a community of student developers and showcase your projects
                </p>
              </div>
            </div>

            <div className="space-y-4 items-center flex flex-col">
              <button
                onClick={() => {
                  signIn("github", {callbackUrl: "/dashboard"})
                  setLoading(true)}}
                className="group w-[80%] cursor-pointer flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Github className="w-5 h-5" />
                Sign in with GitHub {
                  loading && (
                    <>
                      <div className="w-4 h-4 border-4 border-blue-500 border-dashed duration-500 rounded-full animate-spin"></div>
                    </>
                  )
                }
                {!loading && (
                  <>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-slate-500 text-center">
                By signing in, you agree to our terms of service and privacy policy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
                <Users className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <div className="text-xs text-slate-400">Collaborate</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
                <Code className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <div className="text-xs text-slate-400">Build Projects</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <div className="text-xs text-slate-400">Get Hired</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;