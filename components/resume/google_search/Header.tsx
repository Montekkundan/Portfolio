import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import GoogleAvatar from "../google/Avatar";
interface Props {
  placeholder:string
}
const SearchHeader = ({placeholder} :Props) => {
    const router = useRouter();
    const searchInputRef = useRef<any>(null);
    const search = (e: any) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
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
    <header className="sticky top-0 bg-white ">
        <div className='flex w-full p-6 items-center'>
        <Image src="/images/google_logo.png"  alt="google logo" height={40} width={120} onClick={() => router.push("/resume/google_resume")} />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
        <input ref={searchInputRef} placeholder={placeholder} type="text" className="flex-grow w-full focus:outline-none" />
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => (searchInputRef.current.value = "")} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-500 transition duration-500 tranform hover:scale-125">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 ml-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 text-blue-500 hidden sm:inline-flex">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <button hidden type="submit" onClick={search}>Search</button>
        </form>
        <GoogleAvatar className="ml-auto" image="/images/me.JPG"/>
        </div>
        
    </header>

    </>
  )
}

export default SearchHeader