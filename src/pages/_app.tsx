import '../styles/globals.css'
import Theme from '../styles/theme'
import { AppProps } from 'next/app'
import '../styles/Loader.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}
