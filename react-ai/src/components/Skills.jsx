import React from 'react'

export default function Skills() {
  return (
    <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl'>Info</h1>
        <div className="flex items-center gap-1 text-base
        relative after:absolute after:bottom-0 after:w-full
        after:h-[2px] after:right-full after:bg-purple-500
        hover:after:translate-x-full after:duration-300
        overflow-hidden">
          <h3 className='font-semibold'>Email</h3>
          <a className='text-cyan-500' 
          href="mailto:demoemail@gmail.com">demoemail@gmail.com</a>
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
