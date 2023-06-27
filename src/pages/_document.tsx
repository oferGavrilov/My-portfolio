import Document, { Html, Head, Main, NextScript, type DocumentContext, type DocumentInitialProps } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render (): JSX.Element {
    return (
      <Html lang='en-GB'>
        <Head>
          <meta name='theme-color' content='#242424' />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
