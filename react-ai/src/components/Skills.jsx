import React from 'react'

export default function Skills() {
  const abilities = {
    JavaScript: ['React', 'Node.js', 'Express.js', 'React Native', 'SvelteKit'],
    Java: ['Java 8', 'Spring', 'Apache Maven'],
    Web: ['Git','TailwindCSS', 'SASS', 'Firebase', 'MonogoDB', 'SQL', 'NoSQL', 'Netlify', 'Docker','Kubernetes'],
    Design: ['Adobe InDesign','PhotoShop', 'Pixlr', 'Figma'],
  }

  return (
    <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl'>Info</h1>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Email</h3>
          <a className='text-cyan-500' 
          href="mailto:demoemail@gmail.com">demoemail@gmail.com</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>GitHub</h3>
          <a className='text-cyan-500' 
          href="https://github.com/DragonSenses"
          target="_blank" rel="noreferrer">DragonSenses</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Blog</h3>
          <a className='text-cyan-500' 
          href="https://google.com"
          target="_blank" rel="noreferrer">My Blog</a>
        </div>
        <div className="flex items-center gap-1 text-base
        relative underline-on-hover">
          <h3 className='font-semibold'>Site</h3>
          <a className='text-cyan-500' 
          href="https://google.com"
          target="_blank" rel="noreferrer">UserName</a>
        </div>
      </div>

      <div>
        <h1 className='text-4xl pb-2'>Skills</h1>
        <div className="flex flex-col gap-3">
          {Object.keys(abilities).map((keyName, index) => {
            return(
              <div className="" key={index}>
                <h3 className="text-lg">{keyName}</h3>
                <div className="flex overflow-auto items-stretch gap-2">
                  {abilities[keyName].map( (skill, i) => {
                    return (
                      <div key={i}
                      className="rounded bg-gradient-to-r from-blue-700 to-violet-700 
                      text-white px-2 py-1 text-xs whitespace-nowrap">
                          {skill}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <h1 className='text-4xl'>Interests</h1>
      </div>

    </div>
  )
}
