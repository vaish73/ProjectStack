import React from 'react'
import Link from "next/link"
import {Code} from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              {/*<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>*/}
              <div>
                <img src="/logo.png" className='w-25 h-25 ' alt="" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent -ml-7">
                ProjectStack
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="#collaboration" className="text-slate-300 hover:text-blue-400 transition-colors">
                Collaboration
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
