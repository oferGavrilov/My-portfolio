
const Hero = (): JSX.Element => (
  <section className='flex ml-4 md:ml-0 w-[90vw] md:w-auto mx-auto overflow-hidden'>
    <div className='w-[100%] flex flex-col mx-auto md:w-full '>
      <h2 className='main-title'>
        Welcome To <br />
        My Personal Portfolio
      </h2>
      <p className='text-2xl pb-6 md:text-3xl md:max-w-4xl text-[#ffffff80] font-light lg:text-4xl lg:max-w-3xl'>
        My name is Ofer Gavriel and i'm a Full-Stack developer and my purpose is to elevate Websites to the Next Level !
      </p>
      <button className='btn-grad' onClick={() => window.open('https://github.com/oferGavrilov', '_blank')}>Learn More</button>
    </div>
  </section>
)

export default Hero
