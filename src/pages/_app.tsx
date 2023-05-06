import '../styles/globals.css'
import Theme from '../styles/theme'
import { type AppProps } from 'next/app'
import '../styles/Loader.css'
import '../styles/buttons.css'
import React from 'react'
import Script from 'next/script'
export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme>
      <Script async strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-CB1BSL3NER' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {
          `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CB1BSL3NER');
      `}
      </Script>
      <Component {...pageProps} />
    </Theme>
  )
}
