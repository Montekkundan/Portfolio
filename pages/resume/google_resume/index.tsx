import type { NextPage } from 'next'
import Head from 'next/head'
import GoogleBody from '../../../components/resume/google/Body';
import GoogleFooter from '../../../components/resume/google/Footer';
import GoogleHeader from '../../../components/resume/google/Header';
const GoogleResume: NextPage = () => {
  return (
    <>
    <Head>
      <title>
        Google Resume | Montek
      </title>
    </Head>
    <div className="flex flex-col justify-center h-screen">
    <GoogleHeader/>
    <GoogleBody/>
    <GoogleFooter/>
    </div>
    </>
  )
}

export default GoogleResume