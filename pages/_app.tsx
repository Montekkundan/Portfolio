import Navbar from '../components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    {/* <Navbar /> */}
    <AnimatePresence mode='wait'>
      <Component {...pageProps} />
      
    </AnimatePresence>
    <Analytics />
  </>
}

export default MyApp