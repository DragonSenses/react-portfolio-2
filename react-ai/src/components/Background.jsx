import React from 'react'
import pic from '../assets/dragon-slate-100.jpg'

export default function Background() {
  return (
    <img className='absolute inset-9 z-0 opacity-50 w-screen'
    src={pic} alt='dragon'></img>
  )
}
