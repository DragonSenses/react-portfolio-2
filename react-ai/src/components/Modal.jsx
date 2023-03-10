import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
  const { onClose } = props;

  const projects = [
    {},
    {},
    {},
  ]

  return ReactDOM.createPortal(
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-full h-full md:w-[80%] md:h-[80%] shadow text-white bg-slate-900 z-50 
    flex flex-col p-4 gap-2'>
      <div className="flex text-xl justify-between items-center">
        <h2>Projects</h2>
        <i onClick={onClose} className="fa-solid fa-xmark cursor-pointer
        text-white hover:scale-125"></i>
      </div>
      <div>

      </div>
    </div>,
    document.getElementById('portal')
  )
}
