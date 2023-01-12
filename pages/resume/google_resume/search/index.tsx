import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import SearchHeader from '../../../../components/resume/google_search/Header';
import HeaderOptions from '../../../../components/resume/google_search/HeaderOptions';
import SearchResults from '../../../../components/resume/google_search/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../../../../keys';
import Response from '../../../../Response';
const Search: NextPage = ({results} :any) => {
  const router = useRouter();
  console.log(results)
  return (
    <>
    <Head>
      <title>
        {router.query.term} - Search Results | Montek
      </title>
    </Head>
    {/* Header  */}
    <SearchHeader placeholder="psst...👋 Search montek"/>
    <HeaderOptions/>
    <SearchResults results={results} />
    
    </>
  )
}

export default Search

export async function getServerSideProps(context: any) {
  const useDummyData = false;
  const startIndex = context.query.start || "0 ";

  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());


  // After server has rendered, pass it to client.

  return {
    props: {
      results: data
    }
  }
}