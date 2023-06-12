import Navbar from '../components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes"
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    {/* <Navbar /> */}
    <AnimatePresence mode='wait'>
      <ThemeProvider attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
    <Analytics />
  </>
}

export default MyApp