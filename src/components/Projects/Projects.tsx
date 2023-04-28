import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import projects from '../../data/projects.json';
import { ProjectDescription } from './ProjectDescription';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Projects = () => {
  console.log(projects)
  return (

    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project) => (
          <BlogCard key={project.id}>
            <Link href={`/details/project?id=2`}>
              <Img src={project.image + project.name + '.png'} />
            </Link>
            <TitleContent>
              <HeaderThree>{project.title}</HeaderThree>
            </TitleContent>
            <CardInfo>
              <ProjectDescription txt={project.description} length={100}></ProjectDescription>
            </CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <ul className='flex flex-wrap gap-x-8 h-32 overflow-hidden px-8 '>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </ul>
            </div>
            <UtilityList>
              <motion.button whileHover={{ scale: 1.09, transition: { duration: 1 } }} whileTap={{ scale: 0.9 }}>
                <ExternalLinks href={project.visit} target="_blank">App</ExternalLinks>
              </motion.button>
              <motion.button whileHover={{ scale: 1.09, transition: { duration: 1 } }} whileTap={{ scale: 0.9 }}>
                <ExternalLinks href={project.source} target="_blank">Source</ExternalLinks>
              </motion.button>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>

  );
}

export default Projects;