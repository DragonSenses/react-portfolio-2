import React from 'react'

export default function Experience() {
  const experiences = [
    {
      company: 'Company 1',
      position: 'Senior Level Surveyor of Opportunities',
      description: "I'm in the process of surveying and completing multiple applications per day. In short, I'm seeking a job."
    },
    {
      company: 'Company 2',
      position: 'Full Stack Pancake Architect',
      description: 'I did a whole lot of things but I can\'t really remember them specifically so you\'ll have to take my word on it',
    },
    {
      company: 'Company 3',
      position: 'Hydro-Ceramics Engineer',
      description: 'It is a firm habit of mine to immediately cleanse ceramic plates after usage.'
    }
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      {experiences.map((experience, index) => {
        return (
          <li key={index} className="className list-none">
            <div className='flex flex-col gap-1'>
              <h1 className='text-lg font-bold uppercase'>{experience.company}</h1>
              <h2 className='text-sm pb-2'>{experience.position}</h2>
              <p className='text-slate-500'>{experience.description}</p>
            </div>
          </li>
        )
      })}
    </div>
  )
}
