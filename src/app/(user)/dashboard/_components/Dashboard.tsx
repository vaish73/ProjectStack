"use client";
import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';
import { User, Search } from 'lucide-react';


const data = [
  {
    title: "AI Resume Enhancer",
    description: "An AI-powered platform that analyzes resumes and provides improvement suggestions using GPT. An more powerfull features to be added along the way",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "OpenAI API"],
    username: "Sunpreeth",
    startDate: "May 2025",
    endDate: "July 2025",
    workingHours: "10-12 hours/week"
  },
  {
    title: "Team Collaboration Suite",
    description: "A real-time communication and file-sharing tool tailored for remote teams.",
    skills: ["React", "Node.js", "Socket.IO", "Redis"],
    username: "Shreyas BS",
    startDate: "June 2025",
    endDate: "August 2025",
    workingHours: "15-18 hours/week"
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin panel for tracking orders, inventory, and customer analytics.",
    skills: ["Vue.js", "Express", "MongoDB", "Tailwind CSS"],
    username: "Prathvish",
    startDate: "April 2025",
    endDate: "June 2025",
    workingHours: "8-10 hours/week"
  },
  {
    title: "Health & Wellness Tracker",
    description: "A progressive web app to track nutrition, workouts, and wellness goals.",
    skills: ["Svelte", "Firebase", "TypeScript", "Chart.js"],
    username: "Shravan",
    startDate: "March 2025",
    endDate: "May 2025",
    workingHours: "12-15 hours/week"
  },
  {
    title: "DevOps Bootcamp Portal",
    description: "A learning platform with CI/CD labs, live sandboxing, and Docker + Kubernetes challenges.",
    skills: ["Next.js", "Docker", "Kubernetes", "Prisma"],
    username: "Vaishnav",
    startDate: "July 2025",
    endDate: "September 2025",
    workingHours: "10-14 hours/week"
  }
];

function Dashboard() {
  const [popup, setPopup] = useState<null | typeof data[0]>(null);
  const [filtered, setFiltered] = useState("");
  const filteredArray = data.filter((item)=>{
    const normalize = (item: string): string => item.toLowerCase().replace(/[\s.,!?-]/g, '');
    const titleMatch = normalize(item.title).includes(normalize(filtered));
     const skillMatch = item.skills.some((skill:string) => normalize(skill).includes(normalize(filtered)));
     const userMatch = normalize(item.username).toLowerCase().includes(normalize(filtered));
     return titleMatch || skillMatch || userMatch;

  })
  return (
    <div className='min-w-full overflow-hidden'>
      <div className="w-full flex justify-end items-end text-white">
        <div className="flex items-center relative w-full max-w-sm">
          <input
            type="text"
            onChange={(e) => setFiltered(e.target.value)}
            placeholder="Search..."
            className=" w-[80%] pl-10 pr-4 py-2 rounded-4xl text-white placeholder-gray-400 bg-[#1f2937] border border-gray-600 focus:border-blue-600 focus:outline-none transition duration-300"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <Search/>
          </div>
        </div>
      </div>

      <div className=' md:mx-[12%] relative  min-h-screen p-6'>
        {filteredArray.map((item, index) => (
          <Card key={index} className='border mb-8 border-slate-700 bg-slate-800/50 md:h-[300px]  hover:shadow-2xl transition-all duration-300'>
            <CardContent className='p-6'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='flex flex-col flex-1 space-y-4'>

                  <div className="mb-4">
                    <h2 className='text-2xl font-bold text-white'>
                      {item.title}
                    </h2>
                    <p className='text-slate-300 leading-relaxed'>
                      {item.description.split(" ").slice(0, 10).join(" ") + "..."}
                    </p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {item.skills.map((skill, idx) => (
                        <Badge key={idx} className="bg-blue-900/50 text-blue-300 border border-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center  lg:mr-6  space-y-4 text-center md:text-right'>
                  <div className='relative w-16 h-16'>
                    <div className="absolute bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full blur-lg opacity-30"></div>
                    <div className='relative w-16 h-16 rounded-full border-2 border-slate-600 overflow-hidden'>
                      <div className='w-full h-full bg-slate-700 flex items-center justify-center text-slate-400'>
                        <User className='w-6 h-6'/>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-1'>
                    <h3 className='text-lg font-semibold text-white'>
                      {item.username}
                    </h3>
                    <button
                      onClick={() => setPopup(item)}
                      className='text-sm cursor-pointer flex items-center text-slate-400'>
                      Details <CircleArrowRight className='w-5 ml-2'/>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}


      </div>
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm ">
          <div className="bg-slate-800/80 mx-10 rounded-xl border border-slate-600 w-full max-w-3xl text-white shadow-2xl p-6 relative">
            
            <button
              onClick={() => setPopup(null)}
            className='absolute top-4 right-4'>
              <X className="hover:bg-slate-600/40 cursor-pointer w-9 h-9 p-2 rounded-full transition-all" />
            </button>

            <div className="flex flex-row md:flex-row gap-8">
              
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold">{popup.title}</h2>
                  <p className="text-slate-400 text-base mt-1">
                    {popup.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-300 font-semibold">Timeline</p>
                    <p className="text-sm">Start Date: <span className="text-slate-400">{popup.startDate}</span></p>
                    <p className="text-sm">End Date: <span className="text-slate-400">{popup.endDate}</span></p>
                  </div>
                  <div>
                    <p className="text-slate-300 font-semibold">Working Hours</p>
                    <p className="text-sm text-slate-400">{popup.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between pt-4 pr-2 min-w-[140px]">
                <div className="relative w-20 h-20 mb-2">
                  <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-br from-indigo-400 to-blue-500 opacity-20" />
                  <div className="relative w-20 h-20 bg-slate-700 border border-slate-500 rounded-full flex items-center justify-center text-slate-300">
                    <User className='w-8 h-8'/>
                  </div>
                  <h3 className="font-medium text-lg mt-4 md:mt-0 md:mb-12">{popup.username}</h3>
                </div>
                <div className="mb-15 h-20"></div>
                <button className="self-end bg-sky-800 hover:bg-sky-700 cursor-pointer text-center text-white px-5 pt-1 pb-2 rounded-lg shadow-md transition-all">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default Dashboard;