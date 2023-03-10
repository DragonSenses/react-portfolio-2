import React from 'react'
import profilePic from '../assets/profile-pic.png'

export default function AboutMe(props) {
  const { openModal } = props;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className='flex flex-col gap-3'>
        <div className="flex items-center">
          <h1 className='font-bold text-4xl sm:text-6xl'>firstName lastName</h1>
          <img className='mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg'
            alt = 'my profile picture'
            src = {profilePic} />
        </div>

        <h2 className='font-medium text-slate-800 
          text-lg sm:text-2xl'>Occupation | Occupation 2</h2>
        <p className='text-slate-500'>I have an ardent passion of creating sites 
        using the latest technology. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolores consequuntur a, ipsam modi culpa at!</p>
        <div className="my-10 flex items-center gap-4 text-sm sm:text-base">
          <button onClick={openModal} className='rounded-full bg-gradient-to-r from-blue-700 to-violet-700 
          text-white px-4 py-2 hover:opacity-70 transition transition-duration:250ms'>projects</button>
          <a href="mailto:youremail@gmail.com" className='rounded-full text-purple-800 
          border border-solid border-violet-800 px-4 py-2 
          hover:opacity-70 transition transition-duration:250ms'>contact</a>
        </div>
      </div>
      <img className='mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg'
          alt = 'my profile picture'
          src = {profilePic} />
    </div>
  )
}
