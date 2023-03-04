import React from 'react'

export default function Skills() {
  const abilities = {
    JavaScript: ['React', 'NodeJs', 'React Native', 'SvelteKit'],
    Java: [],
    Web: ['TailwindCSS', 'SASS', 'Firebase'],
    Design: [],

  }

  return (
    <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl'>Info</h1>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Email</h3>
          <a className='text-cyan-500' 
          href="mailto:demoemail@gmail.com">demoemail@gmail.com</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>GitHub</h3>
          <a className='text-cyan-500' 
          href="https://google.com"
          target="_blank" rel="noreferrer">myGitHub</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Blog</h3>
          <a className='text-cyan-500' 
          href="https://google.com"
          target="_blank" rel="noreferrer">My Blog</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Some Other Site</h3>
          <a className='text-cyan-500' 
          href="https://google.com"
          target="_blank" rel="noreferrer">Some Other UserName</a>
        </div>
      </div>
      <div>
        <h1 className='text-4xl'>Skills</h1>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Map out each ability here */}
        </div>
      </div>
      <div>
        <h1 className='text-4xl'>Interests</h1>
      </div>
    </div>
  )
}
