import Navbar from '../components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    {/* <Navbar /> */}
    <AnimatePresence mode='wait'>
      <Component {...pageProps} />
    </AnimatePresence>
  </>
}

export default MyApp