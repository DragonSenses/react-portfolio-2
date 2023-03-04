import React from 'react'

export default function Skills() {
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
          href="https://google.com">myGitHub</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Blog</h3>
          <a className='text-cyan-500' 
          href="https://google.com">My Blog</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Some Other Site</h3>
          <a className='text-cyan-500' 
          href="https://google.com">Some Other UserName</a>
        </div>
      </div>
      <div>
        <h1 className='text-4xl'>Skills</h1>
      </div>
      <div>
        <h1 className='text-4xl'>Interests</h1>
      </div>
    </div>
  )
}
