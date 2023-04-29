import React from 'react'
import Link from 'next/link'
import { DiCssdeck } from 'react-icons/di'
import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

const Header = (): JSX.Element => (
  <motion.header style={{ position: 'sticky', top: 0, zIndex: 10 }}>
    <section className='flex justify-between items-center h-28 px-8 bg-[#0F1624] shadow-xl shadow-slate-900' >
      <div className='flex items-center gap-2'>
        <DiCssdeck size={'3rem'} /> <span className='text-4xl'>Portfolio</span>
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
          <Link href="#about">
            <span className='navigate-link'>About</span>
          </Link>
        </motion.div>
      </div>
      <SocialLinks />
    </section>
  </motion.header>
)

export default dynamic(async () => await Promise.resolve(Header), { ssr: false })
