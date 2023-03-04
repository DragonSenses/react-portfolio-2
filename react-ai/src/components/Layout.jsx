import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
  const { children } = props;
  return (
    <div className='min-h-screen flex flex-col relative 
      bg-slate-100 text-slate-900 text-xs sm:text-sm'>
      <Navbar/>
      <main className='flex flex-col flex-1'>
        {children} 
      </main>
    </div>
  )
}
