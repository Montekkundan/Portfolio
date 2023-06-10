import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../Experience/Experience';
import Head from 'next/head';
import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import ReactLoading from 'react-loading';
import metadata from '../metadata.json';
import gsap from 'gsap';
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import DragImage from '../components/draggerImage';

const LoadingScreen = ({ progress }:any) => {
  return (
    <div style={{ position: 'fixed', backgroundColor: 'black', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'none' }}>
      <div style={{ backgroundColor: 'black', border: '2px solid white', padding: '2rem', borderRadius: '0.5rem', fontFamily: 'monospace', color: 'white' }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Montek OS [Version 10.0.19043.1266]</p>
        <p style={{ fontSize: '1.5rem' }}>Loading... {progress} %</p>
        <ReactLoading type={"bars"} color={"#fff"} height={20} width={20} />
      </div>
    </div>
  );
};
const pageMetadata = metadata['home'];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline({ delay: 1 });
    tl.to('.animate-up', { y: '-=50', opacity: 0, ease: 'Circ.easeInOut', duration: 1 })
    .to('.loader', { height: 0, ease: 'Circ.easeInOut', duration: 1 }, )
    .to('.green', { height: '100%', top: 0, ease: 'Circ.easeInOut', duration: 1, delay: -.8 })
    .to('.green', { height: '0%',  ease: 'Circ.easeInOut', duration: 1, delay:-.3 })
    .to('.creative', { y: 0, opacity: 1, ease: 'Circ.easeInOut', duration: 1 }, '-=1') 
    .to('.navbar', { y: 0, opacity: 1, ease: 'Circ.easeInOut', duration: 1 }) 
    .to('.available', { y: 0, opacity: 1, ease: 'Circ.easeInOut', duration: 1 }, '-=1') 
    .to('.typewriter', { opacity: 1, ease: 'Circ.easeInOut', duration: 1 }) 
    .to('.visual', { opacity: 1, ease: 'Circ.easeInOut', duration: 1 }) 
    .to('.drag-image', { scale: 1, opacity: 1, ease: 'Circ.easeInOut', duration: 1 }, '-=1')
    .to('.icons', { opacity: 1, stagger: .3, ease: 'Circ.easeInOut', duration: 1 }); 
  // Disable mouse scroll for the first 1.5 seconds
  const disableScroll = (event: WheelEvent) => {
    event.preventDefault();
  };
  window.addEventListener('wheel', disableScroll, { passive: false });
  setTimeout(() => {
    window.removeEventListener('wheel', disableScroll);
  }, 4000);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
const [controlsEnabled, setControlsEnabled] = useState(false);
  // Simulate loading time
  setTimeout(() => setIsLoading(false), 3000);
  const [startTyping, setStartTyping] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 4000); // delay of 4 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);
  const { progress } = useProgress();
  // console.log(progress);
  return (
    <motion.div
    key="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <Head>
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords} />
        <meta name="author" content={pageMetadata.author} />

      </Head>
      {/* <button onClick={() => setControlsEnabled(!controlsEnabled)} className='pointer absolute z-20'> {!controlsEnabled ? 'Enable' : 'Disable'}</button>
      <div className="root_page">
        {isLoading ? (
          <LoadingScreen progress={progress} />
        ) : (
          <Canvas>
            <Experience enable={controlsEnabled} />
          </Canvas>
        )}
      </div> */}
      <div className='w-full'>
        <div className='loader  w-full h-screen bg-[#111] text-white '>
          <div className='absolute top-[5%] left-1/2 -translate-x-2/4 translate-y-0 '>
            <h5 className='uppercase text-xs font-light text-center animate-up'>Design Portfolio</h5>
            <h5 className='uppercase text-xs font-light text-center animate-up'>&copy; {new Date().getFullYear()}</h5>
          </div>
          <h1 className='animate-left animate-up absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-3xl md:text-[4vw] font-medium'>Monte<span  className='font-slack '>k</span> is a</h1>
        </div>
        <div className='green overflow-hidden w-full h-[0vh] bg-[#14CF93] absolute top-full'></div>
        <div className='w-full h-screen bg-[#f0f0f0] '>
          <div className='navbar w-full h-[100px] flex items-center justify-between px-[5vw] py-0'>
            <Link href="/" className='uppercase font-light text-xs text-black relative under'>Montek 
              <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </Link>
            <a target="_blank" href="https://blog.montek.dev/" className='uppercase font-light text-xs text-black relative under'>Devlog
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a>
            {/* <a href="#" className='uppercase font-light text-xs text-black relative under'>link
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a>
            <a href="#" className='uppercase font-light text-xs text-black relative under'>link
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a> */}
          </div>
          <div className='mt-32  flex flex-col '>
          <div className='navbar w-full flex flex-col md:flex-row justify-between text-[#333] py-0 px-[6vw] pr-[12vw]'>
          <h1 className='text-7xl md:text-[13vw] font-semibold creative text-center font-abril'>Creative</h1>
          <div className='hidden  md:flex md:space-x-20 md:ml-5'>
          <div className='mt-[5vw]  '>
            <h5 className='opacity-60 font-medium text-xs'>Currently available for </h5>
            <h5 className='opacity-60 font-medium text-xs'>freelance</h5>
          </div>
          <div className='mt-[5vw]'>
            <h5 className='opacity-60 font-medium text-xs'>My local time is</h5>
            <h5 className='opacity-60 font-medium text-xs'>--</h5>
          </div>
          </div>
        </div>
        <div className='w-full md:flex justify-between text-[#333] py-0 px-[6vw] pr-[12vw] items-center  '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons hidden md:inline w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

          <div className='flex flex-col md:flex-row  '>
          <h1 className='text-7xl md:text-[13vw] text-center font-semibold font-slack tracking-tighter visual md:pr-32'><span>~</span>Visual </h1>
          <h1 className='text-7xl md:text-[13vw] font-semibold typewriter text-center font-mono'>  
        Dev
      </h1>
      
      
      </div>
      
      <div className=' available flex justify-between  md:hidden mx-5'>
          <div className='mt-[5vw]  '>
            <h5 className='opacity-60 font-medium text-xs'>Currently available for </h5>
            <h5 className='opacity-60 font-medium text-xs'>freelance</h5>
          </div>
          <div className='mt-[5vw]'>
            <h5 className='opacity-60 font-medium text-xs'>My local time is</h5>
            <h5 className='opacity-60 font-medium text-xs'>--</h5>
          </div>
          </div>
      </div>
      <div className='drag-image'><DragImage /></div>
      
      
        </div>
        
        </div>
        <div className='w-full h-screen bg-red-100'>
        </div>

           
      </div>
      </motion.div>
  );
};

export default Home;
