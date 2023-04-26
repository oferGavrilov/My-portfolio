import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import { CgMail } from 'react-icons/cg'
import dynamic from "next/dynamic";


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href={'/'} style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
        <DiCssdeck size={'3rem'} /> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/oferGavrilov' target={'_blank'}>
        <AiFillGithub size={'3rem'} />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ofergavrilov/' target={'_blank'}>
        <AiFillLinkedin size={'3rem'} />
      </SocialIcons>
      <SocialIcons href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' target={'_blank'}>
        <CgMail size={'3rem'} />
      </SocialIcons>
    </Div3>
  </Container>
)


export default dynamic(() => Promise.resolve(Header), { ssr: false });
