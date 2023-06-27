import { useState } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/buttons.css'
import '../styles/hero-container.css'
import '../styles/animation.css'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AppProps } from 'next/app'
import Loader from '../components/Loader'

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
