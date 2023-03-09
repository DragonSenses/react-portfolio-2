import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal() {
  return ReactDOM.createPortal(
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-[80%] h-[80%] shadow text-white bg-slate-900 z-50 flex flex-col'>
      Modal
    </div>,
    document.getElementById('portal')
  )
}
