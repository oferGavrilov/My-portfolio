import React from 'react'
import { AiFillGithub , AiFillLinkedin } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'

import { SocialIcons } from '../Header/HeaderStyles'
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:054-984-3454'>054-984-3454</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' target={'_blank'}>ofergavri@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Practice makes perfect.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/oferGavrilov'>
            <AiFillGithub size={'3rem'} />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/ofergavrilov/'>
            <AiFillLinkedin size={'3rem'} />
          </SocialIcons>
          <SocialIcons href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' target={'_blank'}>
            <CgMail size={'3rem'} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
