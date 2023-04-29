import '../styles/globals.css'
import Theme from '../styles/theme'
import { type AppProps } from 'next/app'
import '../styles/Loader.css'
import '../styles/buttons.css'
import React from 'react'
export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}
