import React from 'react';
import Image from 'next/image'
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
          <Image src="/images/react.png" width="30" height="30" />
          <Image src="/images/next.png" width="30" height="30" />
          <Image src="/images/angular.png" width="30" height="30" />
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
          <Image src="/images/nodejs.png" width="30" height="30" />
          <Image src="/images/express.png" width="30" height="30" />
          <Image src="/images/nestjs.png" width="30" height="30" />
          <Image src="/images/springboot.png" width="30" height="30" />
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
          <Image src="/images/css.png" width="30" height="30" />
          <Image src="/images/scss.png" width="30" height="30" />
          <Image src="/images/tailwind.png" width="30" height="30" />
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
          <Image src="/images/mongodb.png" width="30" height="30" />
          <Image src="/images/mysql.png" width="30" height="30" />
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
          <Image src="/images/javascript.png" width="30" height="30" />
          <Image src="/images/typescript.png" width="30" height="30" />
          <Image src="/images/java.png" width="30" height="30" />
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

export default Technologies;
