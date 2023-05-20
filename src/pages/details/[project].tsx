/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/indent */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import projects from '../../data/projects.json'
import { type Project } from '../../model/project.model'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
function ProjectDetails (): JSX.Element {
  const [project, setProject] = useState<Project | null | undefined>(null)
  const { id } = useRouter().query

  useEffect(() => {
    const data = projects.find(project => project.id === id)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!data) return
    setProject(data)
  }, [id])

  return (
    <>
      <div className='slide-bottom'>
        <Link href="/" className='slide-bottom-child text-4xl'>
          <AiFillHome />
        </Link>
      </div>
      <div className='slide-left'>
        <Link href={'' + project?.visit} target='_blank' className='slide-bottom-child text-2xl tracking-wider uppercase font-bold ' style={{ color: project?.color, textShadow: `0px 3px 11px ${project?.color}` }} >
          Visit Here
        </Link>
        <Link href={'' + project?.source} target='_blank' className='slide-bottom-child text-2xl tracking-wider uppercase font-bold ' style={{ color: project?.color, textShadow: `0px 3px 11px ${project?.color}` }} >
          Source Code
        </Link>
      </div>
      <section className='overflow-x-hidden'>
        <div className="hero-container">
          <img className="project-image hero-img-large" src={project?.image + 'large.png'} alt={project?.title} />
          <img className="project-image hero-img-desktop" src={project?.image + 'desktop.png'} alt={project?.title} />
          <img className="project-image hero-img-tablet" src={project?.image + 'tablet.jpg'} alt={project?.title} />
          <img className="project-image hero-img-mobile" src={project?.image + 'mobile.jpg'} alt={project?.title} />
        </div>
        <div className='flex flex-col text-[#dce3e4] absolute -bottom-24 md:bottom-0 left-10 md:left-28'>
          <h2 style={{ color: project?.color }} className="text-[4.25rem] py-6 font-bold custom-shadow">{project?.title}</h2>
          <p className='custom-paragraph'>{project?.description}</p>
        </div>
      </section>
      <section className='bg-[#141414] pt-[20vh] px-10'>
        <div className='py-10'>
          <h2 style={{ color: project?.color, textShadow: `0px 3px 11px ${project?.color}` }} className='text-5xl font-bold py-8'>Architecture</h2>
          <p className='custom-paragraph'>{project?.architecture}</p>
        </div>
        <div className='py-10'>
          <h2 style={{ color: project?.color, textShadow: `0px 3px 11px ${project?.color}` }} className='text-5xl font-bold py-8'>Responsive Design</h2>
          <p className='pb-14 custom-paragraph'>The {project?.title} application using Responsive design for any device sizes.</p>
          <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-24'>
            <img className='mockup-img' src={project?.image + 'mockup-desktop.png'} alt={project?.title} />
            <img className='mockup-img' src={project?.image + 'mockup-mobile.png'} style={{ width: '180px' }} alt={project?.title} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetails
