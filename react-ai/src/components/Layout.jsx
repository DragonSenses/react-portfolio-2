import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
  const { children } = props;
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Navbar/>
      <main className='flex flex-col flex-1'>
        {children} 
      </main>
    </div>
  )
}
