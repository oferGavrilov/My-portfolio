import type React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Header />
      <main className='fade scroll-smooth'>{children}</main>
      <Footer />
    </>
  )
}
