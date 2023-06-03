import '../styles/globals.css'
import Theme from '../styles/theme'
import { type AppProps } from 'next/app'
import '../styles/Loader.css'
import '../styles/buttons.css'
import '../styles/hero-container.css'
import '../styles/animation.css'
import { useState } from 'react'
import Loader from '../components/Loader'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <Theme>
      {!isLoading
        ? (
        <Component {...pageProps} />)
        : (<Loader isLoading={isLoading} setIsLoading={setIsLoading} />)
      }
    </Theme>
  )
}
