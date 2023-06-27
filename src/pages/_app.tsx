import '../styles/globals.css'
import { type AppProps } from 'next/app'
import '../styles/Loader.css'
import '../styles/buttons.css'
import '../styles/hero-container.css'
import '../styles/animation.css'
import { useState } from 'react'
import Loader from '../components/Loader'
import { useRouter } from 'next/router'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  const { pathname } = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(pathname === '/')

  return (
    <>
      {!isLoading
        ? (
          <Component {...pageProps} />)
        : (<Loader isLoading={isLoading} setIsLoading={setIsLoading} />)
      }
    </>
  )
}
