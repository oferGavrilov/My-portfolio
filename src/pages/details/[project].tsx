/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import projects from '../../data/projects.json'
import { type Project } from '../../model/project.model'
import { HeroImg, HeroContainer, HeroContext, HeroSection, HeroTitle, HeroDescription, MockupContainer, MockupImg, MockupSection } from '../details/detailsStyles'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
function ProjectDetails (): JSX.Element {
  const [project, setProject] = useState<Project | null>(null)
  const { id } = useRouter().query
  useEffect(() => {
    const data = projects.find(project => project.id === id)
    if (data == null) return
    setProject(data)
  }, [id])

  return (
            <>
                  <Link href="/" className='text-4xl slide-bottom'>
                        <AiFillHome />
                  </Link>
                  <HeroSection>
                        <HeroContainer className="hero-container">

                              <HeroImg className="hero-img-large" src={project?.image + 'large.png'} />
                              <HeroImg className="hero-img-desktop" src={project?.image + 'desktop.png'} />
                              <HeroImg className="hero-img-tablet" src={project?.image + 'tablet.jpg'} />
                              <HeroImg className="hero-img-mobile" src={project?.image + 'mobile.jpg'} />
                        </HeroContainer>
                        <HeroContext>
                              <HeroTitle className="text-red-500">{project?.title}</HeroTitle>
                              <HeroDescription>{project?.description}</HeroDescription>
                        </HeroContext>
                  </HeroSection>
                  <MockupSection>
                        <MockupContainer>
                              <MockupImg src={project?.image + 'mockup-desktop.png'} />
                              <MockupImg src={project?.image + 'mockup-mobile.png'} style={{ width: '180px' }} />
                        </MockupContainer>
                  </MockupSection>
            </>
  )
}

export default ProjectDetails
