import Link from "next/link";
import { useRouter } from "next/router";

const PaginnationButtons = () => {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between text-blue-700 mb-10 max-w-lg" >
      {startIndex >= 10 && (
        <Link href={`/resume/google_resume/search?term=${router.query.term}&start=${startIndex - 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <p>Previous</p>
        </div>
        </Link>
      )}
      <h2 className="text-2xl" >M<span className="text-red-500">ooooooo</span><span className="text-yellow-700">n</span><span>t</span><span className="text-green-700">e</span><span className="text-red-500">k</span></h2>
      
      <Link href={`/resume/google_resume/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
          <p>Next</p>
        </div>
        </Link>
    </div>
  )
}

export default PaginnationButtons;