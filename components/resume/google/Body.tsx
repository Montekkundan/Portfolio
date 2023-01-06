import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
const GoogleBody = () => {
  const router = useRouter();
  const searchInputRef = useRef<any>(null);
  const search = (e: any) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;
    console.log(term);
    if(term.toLowerCase() === 'montek')
    {
    router.push(`/resume/google_resume/search/montek_search`);
    }
    else {
    router.push(`/resume/google_resume/search?term=${term}`);
    }
    

  }
  return (
    <>
    <form className='flex flex-col items-center mt-44 flex-grow'>
    <Image src="/images/google_logo.png"  alt='google logo' height={100} width={300}/>
    <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md px-5 py-3 items-center rounded-full sm:max-w-xl lg:max-w-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input ref={searchInputRef} placeholder="psst.. Search Montek!" type="text" className="w-10 focus:outline-none flex-grow" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
    </div>
    <div className='flex flex-col  w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
      <button onClick={search} className="btn">Google search</button>
      <button onClick={search} className="btn">Im feeling lucky</button>
    </div>
    </form>
    </>
  )
}

export default GoogleBody