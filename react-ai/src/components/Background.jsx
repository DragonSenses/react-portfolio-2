import React from 'react'
import pic from '../assets/dragon-slate-100.jpg'

export default function Background() {
  return (
    <img className='absolute inset-9 z-0 opacity-30 w-[80vw] h-[70vh]'
    src={pic} alt='dragon'></img>
  )
}
