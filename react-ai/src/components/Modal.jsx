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
    <div className='absolute top-0 left-0 w-screen h-screen overflow-scroll 
    md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
    md:w-[90vh] md:h-[90vw] shadow text-white bg-slate-900 z-50 
    flex flex-col gap-2'>
      <div className="flex p-4 text-xl justify-between items-center">
        <h2>Projects</h2>
        <i onClick={onClose} className="fa-solid fa-xmark cursor-pointer
        text-white hover:scale-125"></i>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 bg-white 
      gap-1 md:gap-3 md:p-4'>
        {projects.map((project, index) => {
          return (
            <div key={index} className='w-full  md:h-[200px] bg-slate-400 aspect-video'>

            </div>
          )
        })};
      </div>
    </div>,
    document.getElementById('portal')
  )
}
