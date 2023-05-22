import BgAnimation from '../components/BackgroundAnimation'
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies'
import Layout from '../components/Layout'
import { Section } from '../styles/GlobalComponents'
import Loader from '../components/Loader'
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
      </Layout>}
      {isLoading && <Loader isLoading={isLoading} setIsLoading={setIsLoading} />}
    </>
  )
}

export default Home
