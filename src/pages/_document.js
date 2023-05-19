import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Script from 'next/script'
export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CB1BSL3NER"></Script>
          <Script id='google-analytics' dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CB1BSL3NER');
          page_path: window.location.pathname,
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
