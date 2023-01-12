import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import SearchHeader from '../../../../components/resume/google_search/Header';
import MontekOptions from '../../../../components/resume/google_search/MontekOptions';
import MontekResults from '../../../../components/resume/google_search/MontekResults';
const MontekSearch: NextPage = () => {
  return (
    <>
    <Head>
      <title>
        Google Montek | Montek
      </title>
    </Head>
    <SearchHeader placeholder="hello montek here!"/>
    <MontekOptions/>
    <MontekResults/>
    </>
    
  )
}

export default MontekSearch