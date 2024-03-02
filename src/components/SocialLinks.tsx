import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { AiFillGithub } from 'react-icons/ai'

function SocialLinks (): JSX.Element {
  return (
    <div className='flex items-center gap-x-5'>
      <a className='social-link' href='https://github.com/oferGavrilov' target={'_blank'} rel="noreferrer">
        <AiFillGithub className='text-5xl' />
      </a>
      <a color='primary' href='https://www.linkedin.com/in/ofergavriel' className='social-link ' target={'_blank'} rel="noreferrer">
        <LinkedInIcon className='!text-5xl text-[#40adf6]' color='inherit' />
      </a>
      <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' className='social-link text-red-500' target={'_blank'} rel="noreferrer">
        <MailOutlineIcon className='!text-5xl' />
      </a>
    </div>
  )
}

export default SocialLinks
