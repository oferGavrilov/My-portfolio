import React, { useEffect } from 'react'
import AOS from 'aos'
import projects from '../constants/projects.json'
import Link from 'next/link'
import Button from './custom/Button'

const Projects = (): JSX.Element => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  function onAlert (): void {
    alert('This project is not available yet')
  }

  return (
    <section className='flex flex-col pt-8 px-4 md:px-12 lg:px-28 mx-auto' id='projects'>
      <h2 className='font-extrabold text-6xl md:text-8xl text-gradient mb-7 ml-3 md:ml-12' data-aos="fade-left">Projects</h2>
      <div className='grid-container'>
        {projects.map((project) => (
          <div key={project.id} data-aos="fade-up" className=' rounded-xl shadow-slate-700 shadow-2xl text-center'>
            <Link href={`/details/project?id=${project.id}`}>
              <div className='back-image'>
                <img src={project.images[4]} className='-z-10 aspect-video object-cover opacity-90 transition-opacity duration-200 ease-in-out hover:opacity-100' alt={project.name} />
              </div>
            </Link>
            <h3 className='my-8 font-bold tracking-widest py-2 text-[#9cc9e3] text-4xl'>{project.title}</h3>
            <p className='text-start leading-snug px-14 tracking-widest md:h-[180px]'>
              {project.description}
            </p>
            <Link href={`/details/project?id=${project.id}`}>
              <Button text="View More" className='project-btn !w-[90%] !mx-auto !my-8 btn-grad' />
            </Link>
            <div>
              <div className='my-12 '>Stack</div>
              <ul className='flex flex-wrap gap-x-4 md:gap-x-8 h-32 overflow-hidden px-8 '>
                {project.tags.map((tag, idx) => (
                  <li className='text-red-500 text-2xl md:text-3xl leading-tight' key={idx}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className='h-[50px] flex gap-4 justify-evenly my-10'>
              {project.name !== 'netflix' ? <a className='project-btn' href={project.visit} target="_blank" rel="noreferrer"><span>App</span></a> : <a className='project-btn' onClick={onAlert}><span>App</span></a>}
              <a className='project-btn' href={project.source} target="_blank" rel="noreferrer"><span>Source</span></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
