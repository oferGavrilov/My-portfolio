import '../styles/globals.css'
import Theme from '../styles/theme'
import { type AppProps } from 'next/app'
import '../styles/Loader.css'
import '../styles/buttons.css'
import '../styles/hero-container.css'
import '../styles/animation.css'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}
