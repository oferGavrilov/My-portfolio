import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import { CgMail } from 'react-icons/cg'
import dynamic from "next/dynamic"

import { motion } from 'framer-motion'

const Header = () => (
  <motion.header style={{ position: "sticky", top: 0, zIndex: 10 }}>
    <section className='flex justify-between items-center h-28 px-8 bg-[#0F1624] shadow-xl shadow-slate-900' >
      <div className='flex items-center gap-2'>
        <DiCssdeck size={'3rem'} /> <span className='text-4xl'>Portfolio</span>
      </div>
      <div className='hidden md:flex gap-4 items-center'>
        <Link href="#projects">
          <span className='navigate-link'>Projects</span>
        </Link>
        <Link href="#tech">
          <span className='navigate-link'>Technologies</span>
        </Link>
        <Link href="#about">
          <span className='navigate-link'>About</span>
        </Link>
      </div>
      <div className='flex gap-4'>
      <a className='social-icon' href='https://github.com/oferGavrilov' target={'_blank'}>
          <AiFillGithub size={'3rem'} />
        </a>
        <a className='social-icon' href='https://www.linkedin.com/in/ofergavrilov/' target={'_blank'}>
          <AiFillLinkedin size={'3rem'} />
        </a>
        <a className='social-icon' href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' target={'_blank'}>
          <CgMail size={'3rem'} />
        </a>
      </div>
    </section>
  </motion.header>
)

export default dynamic(() => Promise.resolve(Header), { ssr: false });
