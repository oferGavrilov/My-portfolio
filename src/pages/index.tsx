import BgAnimation from '../components/BackgroundAnimation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Layout from '../components/Layout'

const Home = (): JSX.Element => {
  return (
    <Layout>
      <main className='custom-grid'>
        <Hero />
        <BgAnimation />
      </main>
      <Projects />
      <Technologies />
    </Layout >
  )
}

export default Home
