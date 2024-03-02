import React from 'react'
import Link from 'next/link'
import SocialLinks from './SocialLinks'

function Header(): JSX.Element {
  return (
    <header className='backdrop-blur-sm fade sticky top-0 z-10 pr-8 md:p-0'>
      <div className='flex justify-between items-center h-28  mx-auto md:px-12 lg:px-32' >
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => { window.scrollTo({ top: 0 }) }}>
          <img src="/logo.gif" loading='eager' alt='logo' className='fade w-20 h-20 md:w-24 md:h-24' />
          <span className='animate-pulse-slow tracking-wider logo font-bold uppercase text-3xl md:text-4xl'>Ofer Gavriel</span>
        </div>
        <div className='hidden md:flex gap-4 items-center'>
          <div>
            <Link href="#projects">
              <span className='navigate-link'>Projects</span>
            </Link>
          </div>
          <div>
            <Link href="#tech">
              <span className='navigate-link'>Technologies</span>
            </Link>
          </div>
        </div>
        <SocialLinks />
      </div>
    </header>
  )
}

export default Header
