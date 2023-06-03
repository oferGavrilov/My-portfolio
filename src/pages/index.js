import BgAnimation from '../components/BackgroundAnimation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Layout from '../components/Layout'
import { Section } from '../styles/GlobalComponents'
import Loader from '../components/Loader'
import { useState } from 'react'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  )
}

export default Home
