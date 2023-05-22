import React from 'react'

const Hero = (): JSX.Element => (
  <section className='flex  w-[90vw] md:w-auto mx-auto my-10 overflow-hidden'>
    <div className='flex flex-col mx-auto md:w-full gap-4'>
      <h2 className='main-title'>
        Welcome To <br />
        My Personal Portfolio
      </h2>
      <p className='text-2xl pb-6 md:text-3xl md:max-w-4xl text-[#ffffff80] font-light lg:text-4xl lg:max-w-3xl'>
        My name is Ofer Gavriel and i&apos;m a Full-Stack developer and my purpose is to elevate Websites to the Next Level !
      </p>
      <button className='btn-grad' onClick={() => window.open('https://github.com/oferGavrilov', '_blank')}>Learn More</button>
    </div>
  </section>
)

export default Hero
