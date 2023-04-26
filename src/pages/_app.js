import Theme from '../styles/theme';
import loader from '../styles/Loader.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 