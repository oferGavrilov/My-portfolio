/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript, type DocumentContext, type DocumentInitialProps } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang='en-GB' className='scroll-smooth'>
        <Head>
          <meta name='theme-color' content='#242424' />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"/>

          <Script src="https://www.googletagmanager.com/gtag/js?id=G-CB1BSL3NER" strategy="beforeInteractive" />
          <Script id='google-analytics' strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CB1BSL3NER', {
                page_path: window.location.pathname
              });
            `
          }} />
          <title>Ofer Gavriel</title>
        </Head>
        <body className='scroll-smooth'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
