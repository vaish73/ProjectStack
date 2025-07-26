import Link from "next/link";
import Image from "next/image";
import NavbarClient from "./NavbarClient";

export default function NavbarShell() {
  return (
    <div className="min-w-full relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="sticky px-5 md:px-10 lg:px-15 py-1 top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container items-center mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/logo-copy.png"}
                  width={35}
                  height={35}
                  alt="Logo"
                />
                <span className="text-2xl font-bold text-neutral-300 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text ">
                  Project<span className="text-transparent">Stack</span>
                </span>
              </div>
            </Link>
            <NavbarClient />
          </div>
        </div>
      </nav>
    </div>
  );
}
