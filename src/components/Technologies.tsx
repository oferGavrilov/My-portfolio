import React, { useEffect } from 'react'
import Image from 'next/image'
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents'
import Aos from 'aos'

export default function Technologies (): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 })
    Aos.refresh()
  }, [])

  return (
    <Section id='tech' data-aos="fade-right">
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I&apos;ve worked with a range a technologies in the web development world.
        From Back-end to Front-end
      </SectionText>
      <ul className='flex flex-col my-8 gap-6 md:grid md:grid-cols-3 md:gap-10 md:my-12'>
        <li data-aos="fade-right" className='list-item'>
          <div className='icon-container'>
            <Image loading='eager' alt="react" src="/images/react.png" width="30" height="30" />
            <Image loading='eager' alt="next" src="/images/next.png" width="30" height="30" />
            <Image loading='eager' alt="angular" src="/images/angular.png" width="30" height="30" />
          </div>
          <div className='list-container'>
            <h4 className='list-title'>Front-End</h4>
            <div className='list-paragraph'>
              <span>Experience with</span>
              <span>React.js</span>
              <span>NextJS</span>
              <span>Angular</span>
            </div>
          </div>
        </li>

        <li data-aos="fade-up" className='list-item'>
          <div className='icon-container'>
            <Image loading='eager' alt="" src="/images/nodejs.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/express.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/nestjs.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/springboot.png" width="30" height="30" />
          </div>
          <div className='list-container'>
            <h4 className='list-title'>Back-End</h4>
            <div className='list-paragraph'>
              <span>Experience with</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>NestJS</span>
              <span>Spring Boot</span>
            </div>
          </div>
        </li>

        <li data-aos="fade-left" className='list-item'>
          <div className='icon-container'>
            <Image loading='eager' alt="" src="/images/css.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/scss.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/tailwind.png" width="30" height="30" />
          </div>
          <div className='list-container'>
            <h4 className='list-title'>Styles</h4>
            <div className='list-paragraph'>
              <span>Experience with</span>
              <span>CSS</span>
              <span>SASS/SCSS</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </li>

        <li data-aos="fade-right" className='list-item'>
          <div className='icon-container'>
            <Image loading='eager' alt="" src="/images/mongodb.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/mysql.png" width="30" height="30" />
          </div>
          <div className='list-container'>
            <h4 className='list-title'>Storage & Queue</h4>
            <div className='list-paragraph'>
              <span>Experience with</span>
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </li>

        <li data-aos="fade-up" className='list-item'>
          <div className='icon-container'>
            <Image loading='eager' alt="" src="/images/javascript.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/typescript.png" width="30" height="30" />
            <Image loading='eager' alt="" src="/images/java.png" width="30" height="30" />
          </div>
          <div className='list-container'>
            <h4 className='list-title'>Programming Language</h4>
            <div className='list-paragraph'>
              <span>Experience with</span>
              <span>Javascript</span>
              <span>Typescript</span>
              <span>Java</span>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  )
}
