import type { AppProps } from 'next/app'
import { ThemeContextProvider, ThemeFont } from "@zionix/ui"
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import '../node_modules/highlight.js/styles/monokai.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>ZIONIX ui</title>
      </Head>
      <ThemeFont font='Poppins' />
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
      <Analytics />
    </>
  )
}
