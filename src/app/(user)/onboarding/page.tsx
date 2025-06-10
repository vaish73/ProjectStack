import React from 'react'


const page = () => {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-slate-900 to-blue-600  font-sans text-white">
      <div className="hidden md:w-full md:flex flex-col justify-center items-center  text-center space-y-1 relative ">
        <img src="/logo.png" alt="Logo" className="w-80 h-80 -mt-60 " />
       <div className='-mt-18'> <h1 className="text-3xl tracking-widest font-extrabold ">Poject<span className='text-sky-500'>Stack</span></h1>
        <h2 className="text-4xl font-semibold">Let&apos;s get you started!</h2>
        <p className="text-sm pt-3 text-gray-200">
          Complete the form to get your account up and running
        </p>
       </div>
      </div>

      <div className="w-full bg-gradient-to-br from-slate-800 to-blue-800 p-10">
        <h3 className="text-xl font-bold mb-5 -mt-6 ">About <span className='text-sky-500'>You</span></h3>

        <div className="w-16 h-16 rounded-full  bg-gray-300 mb-4 "><label htmlFor='propic'><img className='rounded-full cursor-pointer' src="/profileuploadpic.jpg" alt="" /></label><input type="file" id="propic" className='opacity-0' /></div>
        <label htmlFor="propic" className='relative -top-2 cursor-pointer ' >Upload Profile Picture</label>
        <label htmlFor="propic" className='relative -top-2'></label>

        <form className="space-y-4 mt-2">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200" required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Section</label>
            <input type="text" className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
/>
          </div>

          <div>
            <label className="block text-sm mb-1">Skills</label>
            <input type="text" className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
 />
          </div>

          <div>
            <label className="block text-sm mb-1">Experience</label>
            <input type="text" className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
  />
          </div>

          <div>
            <label className="block text-sm mb-1">Bio</label>
            <textarea
              rows={3}
              className="w-full p-2 pl-3 rounded-md border border-white/20 focus:border-white focus:ring-0 bg-white/5 text-neutral-300 outline-none transition-all duration-200"
            ></textarea>
          </div>
           <div className="flex gap-25 justify-center">
          <button type='submit' className="bg-sky-600 px-4 py-2 rounded">Submit</button>
        </div>
        </form>
      </div>
    </main>
  );
}

export default page