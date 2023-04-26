import React from 'react';
import Image from 'next/image'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { IconsContainer, List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import dynamic from "next/dynamic";

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
          <Image alt="react" src="/images/react.png" width="30" height="30" />
          <Image alt="next" src="/images/next.png" width="30" height="30" />
          <Image alt="angular" src="/images/angular.png" width="30" height="30" />
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
          <Image alt="" src="/images/nodejs.png" width="30" height="30" />
          <Image alt="" src="/images/express.png" width="30" height="30" />
          <Image alt="" src="/images/nestjs.png" width="30" height="30" />
          <Image alt="" src="/images/springboot.png" width="30" height="30" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <span>Experience with</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>NestJS</span>
            <span>Spring Boot</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <IconsContainer>
          <Image alt="" src="/images/css.png" width="30" height="30" />
          <Image alt="" src="/images/scss.png" width="30" height="30" />
          <Image alt="" src="/images/tailwind.png" width="30" height="30" />
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
          <Image alt="" src="/images/mongodb.png" width="30" height="30" />
          <Image alt="" src="/images/mysql.png" width="30" height="30" />
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

      <ListItem>
        <IconsContainer>
          <Image alt="" src="/images/javascript.png" width="30" height="30" />
          <Image alt="" src="/images/typescript.png" width="30" height="30" />
          <Image alt="" src="/images/java.png" width="30" height="30" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Programming Language</ListTitle>
          <ListParagraph>
            <span>Experience with</span>
            <span>Javascript</span>
            <span>Typescript</span>
            <span>Java</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default dynamic(() => Promise.resolve(Technologies), { ssr: false });
