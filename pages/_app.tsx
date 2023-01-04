import type { AppProps } from 'next/app'
import { ThemeContextProvider, ThemeFont } from "@zionix/ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeFont />
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}
