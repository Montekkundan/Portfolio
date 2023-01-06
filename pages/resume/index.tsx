import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
const Resume: NextPage = () => {
  return (
    <>
    <Head>
      <title>
        Resume | Montek
      </title>
    </Head>
    Hello this is resume
    <Link href="/resume/google_resume">Google</Link>
    <Link href="/resume/netflix_resume">Netflix</Link>
    </>
  )
}

export default Resume