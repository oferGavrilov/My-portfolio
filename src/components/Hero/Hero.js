import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Ofer Gavriel and i'm a Full-Stack developer and my purpose is to elevate Websites to the Next Level !
      </SectionText>
      <Button onClick={() => window.open('https://github.com/oferGavrilov' , '_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
)

export default Hero;
