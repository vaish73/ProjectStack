import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1  sm:grid-cols-4 md:grid-cols-4 gap-8 text-center md:text-left">
          
          <div className="space-y-4 flex flex-col items-center  md:items-start">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
            <Image
                src={"/logo-copy.png"}
                width={35}
                height={35}
                alt="Not-Found"
                />
              <span className="text-xl font-bold">ProjectStack</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Transforming ideas into digital reality with cutting-edge development solutions.
            </p>
          </div>

          <div className='ml-6'>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div className='ml-3'>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="https://www.linkedin.com/in/shravan-raj-j-9645ab293?" className="hover:text-blue-400 transition-colors">LinkedIn</Link></li>
              <li><Link href="https://www.instagram.com/shravan.rajj?igsh=MWNwczBmODJ4OGpnMQ==" className="hover:text-blue-400 transition-colors">Instagram</Link></li>
              <li><Link href="https://github.com/Shikhar-Shetty/ProjectStack" className="hover:text-blue-400 transition-colors">GitHub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Meet the Team</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="https://www.linkedin.com/in/sunpreeth-vishva-52a01929a?" className="hover:text-blue-400 transition-colors">Sunpreeth - LinkedIn</Link></li>
              <li><Link href="https://github.com/vaish73" className="hover:text-blue-400 transition-colors">Vaishnav - GitHub</Link></li>
              <li><Link href="https://github.com/Shreyas-99" className="hover:text-blue-400 transition-colors">Shreyas BS - Github</Link></li>
              <li><Link href="https://www.linkedin.com/in/shravan-raj-j-9645ab293" className="hover:text-blue-400 transition-colors">Shravan Raj - LinkedIn</Link></li>
            </ul>
          </div>


        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ProjectStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
