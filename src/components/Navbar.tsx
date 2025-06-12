"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import { signOut, useSession } from "next-auth/react";
import  Image  from 'next/image';

const Navbar = () => {
    const {data: session, status} = useSession();
    console.log(session);
    
    if(status=="loading") return null;
    
    return (
        <div className="min-w-full overflow-hidden relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                        <Image
                            src={"/logo-copy.png"}
                            width={60}
                            height={60}
                            alt="Not-Found"
                            />

                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                DevCraft
                            </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                                Contact
                            </Link>
                            {session ? (
                                <>
                                    <Button onClick={() => signOut({callbackUrl: "/"})}>Sign Out</Button>
                                </>
                            ): (
                                <Link
                                    href="/sign-in">
                                <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                                          Get Started
                                </Button>
                                  
                                </Link>
                            )}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
