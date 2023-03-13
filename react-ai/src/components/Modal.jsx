import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
  const { onClose } = props;

  const projects = [
    {
      name: 'project',
      link: 'link',
      github: 'github',
      desc: 'desc',
    },
    {
      name: 'project',
      link: 'link',
      github: 'github',
      desc: 'desc',
    },
    {
      name: 'project',
      link: 'link',
      github: 'github',
      desc: 'desc',
    },
    
    
  ]

  return ReactDOM.createPortal(
    <div className='absolute top-0 left-0 w-screen h-screen  
    text-white md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
    md:w-[90vw] md:h-[90vh] overflow-scroll shadow bg-slate-900
    z-50 flex flex-col gap-2'>
      <div className="flex p-4 text-xl justify-between items-center">
        <h2>Projects</h2>
        <i onClick={onClose} className="fa-solid fa-xmark cursor-pointer
        text-white hover:scale-125"></i>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-1 bg-white md:pt-4'>
        {projects.map((project, index) => {
          return (
            <div key={index} className='w-full md:h-[200px] aspect-video 
            bg-slate-900 text-white border border-solid flex flex-col gap-2 p-2'>
              <h1>{project.name}</h1>
              <p className='text-xs flex-1'>{project.desc}</p>
              <div className='grid text-center grid-cols-2'>
                  <a className=''>
                      Live
                  </a>
                  <a>
                      GitHub
                  </a>
              </div>
            </div>
          )
        })};
      </div>
    </div>,
    document.getElementById('portal')
  )
}
