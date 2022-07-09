import React from 'react'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

/**
 * Next.jsアプリケーション
 * @module Pages/App
 */
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
