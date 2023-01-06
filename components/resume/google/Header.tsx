import { useRouter } from 'next/router';
import GoogleAvatar from './Avatar';
const GoogleHeader = () => {
  const router = useRouter();
  return (
    <>
    <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
    {/* left */}
    <div className='flex space-x-4 items-center'>
        <p className="link" onClick={() => router.push("/")}>Home</p>
        <p className="link" onClick={() => router.push("/terminal")}>Terminal</p>
    </div>
    {/* right */}
    <div className='flex space-x-4 items-center'>
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

        <GoogleAvatar image="/images/me.JPG"/>
    </div>
    </header>

    </>
  )
}

export default GoogleHeader