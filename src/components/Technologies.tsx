import React, { useEffect } from 'react'
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents'
import Aos from 'aos'

import technologies from '../data/technologies.json'

import TechnologiesList from './TechnologiesList'

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
      <TechnologiesList technologies={technologies} />
    </Section>
  )
}
