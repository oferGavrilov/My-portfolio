import React from 'react'

import { IconButton } from '@mui/material'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'

function SocialLinks (): JSX.Element {
  return (
      <div className='flex'>
      <IconButton color='inherit' href='https://github.com/oferGavrilov'>
        <AiFillGithub className='social-link' size={'3.5rem'} />
      </IconButton>
      <IconButton color='primary' href='https://www.linkedin.com/in/ofergavrilov/'>
        <AiFillLinkedin className='social-link' size={'3.5rem'} />
      </IconButton>
      <IconButton href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' target={'_blank'}>
        <CgMail className='social-link text-red-500' size={'3.5rem'} />
      </IconButton>
    </div>
  )
}

export default SocialLinks
