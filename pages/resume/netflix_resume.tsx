import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
const NetflixResume: NextPage = () => {
  return (
    <>
    <Head>
      <title>
        Netflix Resume | Montek
      </title>
    </Head>
    Netflix resume
    <button><Link href="/resume">Resume</Link></button>
    </>
  )
}

export default NetflixResume