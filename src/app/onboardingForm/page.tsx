import React from 'react'


const page = () => {
  return (
    <main className="flex min-h-screen font-sans text-white">
      {/* Left Panel */}
      <div className="w-1/3 bg-gradient-to-bl from-[#42216e] to-[#36518a] flex flex-col justify-center items-center  text-center space-y-1 relative ">
        <img src="/logo.png" alt="Logo" className="w-80 h-80 -mt-60 " />
       <div className='-mt-18'> <h1 className="text-3xl tracking-widest font-extrabold ">PojectStack</h1>
        <h2 className="text-4xl font-semibold">Let’s get you started!</h2>
        <p className="text-sm text-gray-200">
          Complete the form to get your account up and running
        </p>
       </div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 bg-gradient-to-br from-[#452370] to-[#6b89ac] p-10">
        <h3 className="text-xl font-bold italic mb-5 -mt-6 ">About You</h3>

        <div className="w-16 h-16 rounded-full bg-gray-300 mb-4 "><label htmlFor='propic'><img className='rounded-full cursor-pointer' src="/profileuploadpic.jpg" alt="" /></label><input type="file" id="propic" className='opacity-0' /></div>
        <label htmlFor="propic" className='relative -top-2 cursor-pointer ' >Upload Profile Picture</label>
        <label htmlFor="propic" className='relative -top-2'></label>

        <form className="space-y-4 mt-2">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded-2xl text-white  bg-white/5 inputField" required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Section</label>
            <input type="text" className="w-full p-2 rounded-2xl text-black bg-white/5 inputField" required />
          </div>

          <div>
            <label className="block text-sm mb-1">Skills</label>
            <input type="text" className="w-full p-2 rounded-2xl text-black bg-white/5 inputField"  />
          </div>

          <div>
            <label className="block text-sm mb-1">Experience</label>
            <input type="text" className="w-full p-2 rounded-2xl text-black bg-white/5 inputField"  />
          </div>

          <div>
            <label className="block text-sm mb-1">Bio</label>
            <textarea
              rows={3}
              className="w-full p-2 rounded-2xl text-black bg-white/5 inputField"
            ></textarea>
          </div>
           <div className="flex gap-25 justify-center">
          <button type='submit' className="bg-indigo-600 px-4 py-2 rounded">Submit</button>
        </div>
        </form>
      </div>
    </main>
  );
}

export default page