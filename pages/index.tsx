import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../Experience/Experience';
import Head from 'next/head';
import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import ReactLoading from 'react-loading';
import metadata from '../metadata.json';
import gsap from 'gsap';


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
    const tl = gsap.timeline({ delay: 1 });
    tl.to('.animate-up', { y: '-=50', opacity: 0, ease: 'Circ.easeInOut', duration: 1 })
    .to('.loader', { height: 0, ease: 'Circ.easeInOut', duration: 1 }, )
    .to('.green', { height: '100%', top: 0, ease: 'Circ.easeInOut', duration: 1, delay: -.8 })
    .to('.green', { height: '0%',  ease: 'Circ.easeInOut', duration: 1, delay:-.3 });

  }, []);
  const [isLoading, setIsLoading] = useState(true);
const [controlsEnabled, setControlsEnabled] = useState(false);
  // Simulate loading time
  setTimeout(() => setIsLoading(false), 3000);
  const [showText, setShowText] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setShowText(true);
  }, 2000);
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
        <link href="https://fonts.googleapis.com/css2?family=Mazius&display=swap" rel="stylesheet"></link>
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
          <h1 className='animate-left animate-up absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-[4vw]  font-medium'>Monte<span  className='font-slack '>k</span> is a</h1>
        </div>
        <div className='green overflow-hidden w-full h-[0vh] bg-[#14CF93] absolute top-full'></div>
        <div className='w-full h-[200vh] bg-[#f0f0f0] '>
          <div className='w-full h-[100px] flex items-center justify-between px-[5vw] py-0'>
            <a href="#" className='uppercase font-light text-xs text-black relative under'>Montek 
              <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a>
            <a href="#" className='uppercase font-light text-xs text-black relative under'>link
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a>
            <a href="#" className='uppercase font-light text-xs text-black relative under'>link
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a>
            <a href="#" className='uppercase font-light text-xs text-black relative under'>link
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a>
          </div>
          <div className='w-full flex justify-between text-[#333] py-0 px-[6vw] pr-[12vw]'>
          <h1 className='text-[13vw] font-semibold '>Creative</h1>
          <div className='mt-[5vw]  '>
            <h5 className='opacity-60 font-medium text-xs'>Currently available for </h5>
            <h5 className='opacity-60 font-medium text-xs'>freelance</h5>
          </div>
          <div className='mt-[5vw]'>
            <h5 className='opacity-60 font-medium text-xs'>My local time is</h5>
            <h5 className='opacity-60 font-medium text-xs'>freelance</h5>
          </div>
        </div>
        <div className='w-full flex justify-between text-[#333] py-0 px-[6vw] pr-[12vw]  '>
          {/* downarrow  */}  
          <h1 className='text-[13vw] font-semibold font-slack tracking-tighter'>Visual </h1>
          <h1 className='text-[13vw] font-semibold '> Dev</h1>
        </div>
        </div>

      </div>
      </motion.div>
  );
};

export default Home;
