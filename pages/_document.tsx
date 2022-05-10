import { FacebookScript } from '@components/common'
import GoogleAnaliticsScript from '@components/common/GoogleAnaliticsScript'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/assets/favicon.svg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <GoogleAnaliticsScript />
        <FacebookScript />
      </Html>
    )
  }
}

export default MyDocument