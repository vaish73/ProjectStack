"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { Headset, LayoutDashboard, LogOut, UserRound } from 'lucide-react';
import TopLoader from './CustomUI/TopLoader';

const Navbar = () => {
    const [loading, setLoading] = useState(false);
    const [drop, setDrop] = useState(false);
    const { data: session, status } = useSession();
    const [loaderTop, setLoaderTop] = useState(false);
    console.log(session);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".profile-dropdown")) {
                setDrop(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (status == "loading") return null;



    return (
        <div className="min-w-full relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
                <div className="container items-center mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            onClick={() => {
                                setLoaderTop(true);
                                setTimeout(() => {
                                    setLoaderTop(false);
                                }, 1000)
                            }}
                            href="/">
                            <div className="flex items-center space-x-2">

                                <Image
                                    src={"/logo-copy.png"}
                                    width={35}
                                    height={35}
                                    alt="Not-Found"
                                />

                                <span className="text-2xl font-bold text-neutral-300 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text ">
                                    Project<span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Stack</span>
                                </span>
                            </div>
                        </Link>


                        <div className="flex items-center space-x-8">

                            {session ? (
                                <>
                                    <Link href="/dashboard"
                                        onClick={() => {
                                            setLoaderTop(true);
                                            setTimeout(() => {
                                                setLoaderTop(false);
                                            }, 1000)
                                        }}
                                        className="text-slate-300 flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
                                        <div className='md:flex hidden'>
                                            Dashboard
                                        </div>
                                        <div className='block md:hidden'><LayoutDashboard /></div>

                                    </Link>
                                    <Link href="/contact"
                                        onClick={() => {
                                            setLoaderTop(true);
                                            setTimeout(() => {
                                                setLoaderTop(false);
                                            }, 1000)
                                        }}
                                        className="text-slate-300 flex text-sm hover:text-blue-400 transition-colors">
                                        <div className='md:flex hidden'>
                                            Contact
                                        </div>
                                        <div className='block md:hidden'><Headset /></div>

                                    </Link>
                                    <div className="relative z-[9999] profile-dropdown items-center pt-2">
                                        <button
                                            onClick={() => setDrop((prev) => !prev)}
                                            className="rounded-full focus:outline-none"
                                        >
                                            <Image
                                                src={session?.user?.image || "/default-profile.png"}
                                                width={32}
                                                height={32}
                                                alt="Profile"
                                                className="rounded-full cursor-pointer"
                                            />
                                        </button>

                                        {drop && (
                                            <div className="absolute flex flex-col right-0 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50">
                                                <Link
                                                    href="/profile"
                                                    className="px-4 py-2 justify-between  flex gap-4 items-center text-sm text-neutral-200 hover:bg-slate-700 transition-colors"
                                                    onClick={() => {
                                                        setDrop(false)
                                                        setLoaderTop(true);
                                                        setTimeout(() => {
                                                            setLoaderTop(false);
                                                        }, 1000)
                                                    }}
                                                >
                                                    Profile
                                                    <div>
                                                        <UserRound className='w-5' />
                                                    </div>
                                                </Link>
                                                <hr className=" border-slate-600" />
                                                <button
                                                    onClick={() => {
                                                        console.log("Signing Out...");
                                                        signOut({ callbackUrl: "/" });
                                                        setDrop(false);
                                                        setLoaderTop(true);
                                                        setTimeout(() => {
                                                            setLoaderTop(false);
                                                        }, 1000)
                                                    }}
                                                    className="w-full mr-0.5 rounded-b-lg flex gap-2 cursor-pointer justify-between items-center text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 transition-colors"
                                                >
                                                    Sign Out
                                                    <div>
                                                        <LogOut className='w-5' />
                                                    </div>
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                </>
                            ) : (
                                <Link
                                    href="/sign-in">
                                    <Button
                                        onClick={() => {
                                            setLoading(true);
                                        }}
                                        className="bg-gradient-to-r cursor-pointer from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                                        Get Started {loading && (
                                            <>
                                                <div className="w-4 h-4 border-4 border-blue-500 border-dashed duration-500 rounded-full animate-spin"></div>
                                            </>
                                        )}
                                    </Button>

                                </Link>
                            )}

                        </div>
                    </div>
                </div>
            </nav>
            <TopLoader loading={loaderTop} />
        </div>
    )
}

export default Navbar
