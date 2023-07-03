import React from 'react'
import technologies from '../constants/technologies.json'
import TechnologiesList from './TechnologiesList'

export default function Technologies (): JSX.Element {
  return (
    <section className='flex flex-col pt-8 px-8 md:px-12 lg:px-28 mx-auto' id='tech' data-aos="fade-right">
      <h2 className='font-extrabold text-6xl md:text-8xl text-gradient mb-7  md:ml-12' data-aos="fade-left">Technologies</h2>
      <p className='text-3xl md:text-4xl my-6 md:mx-14 max-w-[90%] !leading-[3rem] tracking-wide text-gray-300 opacity-80 font-nunit [word-spacing:7px]'>
        As a full stack developer, I have extensive experience with a wide range of web development technologies.<br /> My expertise spans across front-end and back-end development, as well as database management and thorough testing. I am skilled at delivering end-to-end solutions, ensuring seamless user experiences and efficient application functionality.
      </p>
      <TechnologiesList technologies={technologies} />
    </section>
  )
}
