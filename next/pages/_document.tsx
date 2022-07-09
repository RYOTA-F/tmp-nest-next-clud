import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Next.jsドキュメント
 * @module Pages/MyDocument
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon.ico"
          />
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
