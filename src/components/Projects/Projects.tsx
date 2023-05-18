
import React, { useEffect } from 'react'
import AOS from 'aos'
import { BlogCard, GridContainer, HeaderThree, Tag, TitleContent, UtilityList, Img } from './ProjectsStyles'
import { Section, SectionTitle } from '../../styles/GlobalComponents'
import projects from '../../data/projects.json'
import Link from 'next/link'
import Button from '../custom/Button'

const Projects = (): JSX.Element => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <Section id="projects">
      <SectionTitle data-aos="fade-left">Projects</SectionTitle>
      <GridContainer>
        {projects.map((project) => (
          <BlogCard key={project.id} data-aos="fade-up">
            <Link href={`/details/project?id=${project.id}`}>
              <Img src={project.image + project.name + '.png'} />
            </Link>
            <TitleContent>
              <HeaderThree>{project.title}</HeaderThree>
            </TitleContent>
            <p className='text-start px-12 tracking-wider h-[140px] md:h-[100px]'>
              {project.description}
            </p>
            <Link href={`/details/project?id=${project.id}`}>
              <Button text="View More" className='project-btn !w-[90%] !mx-auto !my-8 btn-grad' />
            </Link>
            <div>
              <TitleContent>Stack</TitleContent>
              <ul className='flex flex-wrap gap-x-8 h-32 overflow-hidden px-8 '>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </ul>
            </div>
            <UtilityList>
              <a className='project-btn' href={project.visit} target="_blank" rel="noreferrer"><span>App</span></a>
              <a className='project-btn' href={project.source} target="_blank" rel="noreferrer"><span>Source</span></a>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>

  )
}

export default Projects
