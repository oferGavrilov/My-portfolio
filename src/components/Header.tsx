import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'
import Image from 'next/image'

function Header (): JSX.Element {
  return (
    <motion.header style={{ position: 'sticky', top: 0, zIndex: 10 }} className='bg-[#0F1624] shadow-xl shadow-slate-900'>
      <div className='flex justify-between items-center h-28 pr-2 max-w-[1340px] mx-auto' >
        <div className='flex items-center gap-2'>
          <Image src="/logo.gif" width='65' loading='eager' height={65} alt='logo' />
          <span className='animate-pulse-slow tracking-wider logo font-bold uppercase text-4xl animate-'>Ofer Gavriel</span>
        </div>
        <div className='hidden md:flex gap-4 items-center'>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link href="#projects">
              <span className='navigate-link'>Projects</span>
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link href="#tech">
              <span className='navigate-link'>Technologies</span>
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            {/* <Link href="/about">
            <span className='navigate-link'>About</span>
          </Link> */}
          </motion.div>
        </div>
        <SocialLinks />
      </div>
    </motion.header>
  )
}

export default Header
