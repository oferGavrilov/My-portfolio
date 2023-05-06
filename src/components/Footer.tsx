import React from 'react'
import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import SocialLinks from './SocialLinks'

const Footer = (): ReactJSXElement => {
  return (
    <footer className='footer '>
      <div className='w-[90%] mx-auto'>
        <ul className='flex pt-20 border-t border-[#ffffff20]'>
          <li className='flex-1'>
            <h4 className='footer-title'>Call</h4>
            <a className='footer-link' href="tel:054-984-3454">054-984-3454</a>
          </li>
          <li className='flex-1 '>
            <h4 className='footer-title'>Email</h4>
            <a className='footer-link' href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' target={'_blank'} rel="noreferrer">ofergavri@gmail.com</a>
          </li>
        </ul>
        <div className='flex mt-14 items-center justify-between'>
          <span className='text-[#ffffff80] tracking-wide text-3xl leading-8 py-4'>Practice makes perfect.</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
