import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAngular, FaNodeJs } from 'react-icons/fa'
import { SiMongodb , SiFigma , SiAdobexd } from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { IconsContainer, List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end to Front-end
    </SectionText>
    <List>
      <ListItem>
        <IconsContainer>
          <DiReact size="3rem" />
          <FaAngular size="3rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <span>Experience with</span>
            <span>React.js</span>
            <span>NextJS</span>
            <span>Angular</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <IconsContainer>
          <FaNodeJs size="3rem" />
          <SiMongodb size="3rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <span>Experience with</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>NestJS</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <IconsContainer>
          <SiFigma size="3rem" />
          <SiAdobexd size="3rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Styles</ListTitle>
          <ListParagraph>
            <span>Experience with</span>
            <span>CSS</span>
            <span>SASS/SCSS</span>
            <span>Tailwind CSS</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <IconsContainer>
          <FaNodeJs size="3rem" />
          <SiMongodb size="3rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Storage & Queue</ListTitle>
          <ListParagraph>
            <span>Experience with</span>
            <span>MySQL</span>
            <span>MongoDB</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
