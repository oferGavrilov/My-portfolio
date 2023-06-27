import React from 'react'
import technologies from '../constants/technologies.json'
import TechnologiesList from './TechnologiesList'

export default function Technologies (): JSX.Element {
  return (
      <section className='flex flex-col pt-8 px-8 md:px-12 mx-auto' id='tech' data-aos="fade-right">
        <h2 className='font-extrabold text-6xl md:text-8xl text-gradient mb-7  md:ml-12' data-aos="fade-left">Technologies</h2>
        <p className='text-3xl md:text-4xl my-6 md:mx-14 max-w-[90%] leading-[2.8rem] tracking-wide text-gray-300 opacity-80 font-nunit [word-spacing:4px]'>
          I&apos;ve worked with a range a technologies in the web development world.
          End to End Development technologies includes Front-end, Back-end, Database, Testing, Cloud, DevOps, and Cyber security.
        </p>
        <TechnologiesList technologies={technologies} />
      </section>
  )
}
