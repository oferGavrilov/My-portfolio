/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import Layout from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import Loader from '../components/Loader/Loader'
import { useState } from 'react'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      {!isLoading && <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        {/* <Timeline /> */}
      </Layout>}
      {isLoading && <Loader isLoading={isLoading} setIsLoading={setIsLoading} />}
    </>
  )
}

export default Home
