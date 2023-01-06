import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import SearchHeader from '../../../../components/resume/google_search/Header';
const Search: NextPage = () => {
  return (
    <>
    <Head>
      <title>
        Google Search Results | Montek
      </title>
    </Head>
    {/* Header  */}
    <SearchHeader/>
    </>
  )
}

export default Search