import React from 'react'
import projects from '../constants/projects.json'
import Link from 'next/link'
import Button from './custom/Button'
import SecondTitle from './custom/SecondTitle'

const Projects = (): JSX.Element => {
  return (
    <section className='flex flex-col pt-8 px-14 lg:px-28 mx-auto select-none' id='projects'>
      <SecondTitle title='Projects' />
      <div className='grid-container'>
        {projects.map((project) => (
          <div key={project.id} data-aos="fade-up" className=' rounded-xl shadow-slate-700 shadow-2xl text-center'>
            <Link href={`/details/${project.id}`} as={`/details/${project.id}`}>
              <div className='back-image'>
                <img src={project.mainImg} className='-z-10 aspect-video object-cover object-top opacity-90 animate-opacity-100 transition-opacity duration-200 ease-in-out hover:opacity-100' alt={project.name} />
              </div>
            </Link>
            <h3 className='my-8 font-bold font-sans py-2 text-5xl' style={{ color: project.color }}>{project.title}</h3>
            <div className=''>
              <p className='text-start leading-[2.8rem] px-14 tracking-widest md:h-[300px] animate-fade-in'>
                {project.description}
              </p>
            </div>
            <a href={project.visit} target="_blank" rel="noreferrer">
              <Button text="View Demo" className='project-btn !w-[90%] !mx-auto !my-8 btn-grad' />
            </a>
            <div>
              <div className='py-12'>Stack</div>
              <ul className='flex flex-wrap gap-x-4 md:gap-x-8 h-32 overflow-hidden px-8 animate-fade-in'>
                {project.tags.map((tag, idx) => (
                  <li className='text-emerald-300 text-2xl md:text-3xl leading-tight' key={idx}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className='h-[50px] flex gap-4 justify-evenly my-10 animate-fade-in'>
              <Link href={`/details/${project.id}`} as={`/details/${project.id}`}
                className='project-btn'>
                Details
              </Link>
              <a className='project-btn' href={project.source} target="_blank" rel="noreferrer">Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
