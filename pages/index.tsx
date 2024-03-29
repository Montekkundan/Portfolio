import { Suspense, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import metadata from '../metadata.json';
import Link from 'next/link';
import DragImage from '../components/draggerImage';
import {HoverPage} from '../components/hoverPages';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Overlay from "../Experience/layout/Overlay.jsx";
import useFlock from "../Experience/stores/useFlock.js";
import WindowFocusHandler from "../Experience/layout/WindowFocusHandler.jsx";
import Flock from "../Experience/Flock.jsx";
import CardStack from '../components/CardStack';
import { useTheme } from "next-themes";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Started from '../components/Started';
import { Howl } from 'howler';
import { useRoute, useLocation } from 'wouter'

const pageMetadata = metadata['home'];
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // const [, params] = useRoute('/item/:id')
  // const [, setLocation] = useLocation()
  const startupSound = useRef<Howl | null>(null);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const divRef = useRef<HTMLDivElement | null>(null);
  const [isDivInView, setIsDivInView] = useState(false);
  useEffect(() => {
    startupSound.current = new Howl({
      src: ['./sounds/startup.wav'],
    });
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Set the threshold to 30%
    };

    const callback: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      setIsDivInView(entry.isIntersecting);
      setTheme(entry.isIntersecting ? 'dark' : 'light');
    };

    const observer = new IntersectionObserver(callback, options);
    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  const flockCount = useFlock((state: { count: any; }) => state.count);
  useEffect(() => {
    
    window.scrollTo(0, 0);
    // startupSound.current?.play();


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

    const disableScroll = (event: Event) => {
      event.preventDefault();
    };
  window.addEventListener('wheel', disableScroll, { passive: false });
  window.addEventListener('touchmove', disableScroll, { passive: false }); // For mobile devices
  document.body.style.overflowY = 'hidden';
  setTimeout(() => {
    window.removeEventListener('wheel', disableScroll);
    window.removeEventListener('touchmove', disableScroll);
    
    document.body.style.overflowY = 'auto';
  }, 4000);
  }, []);
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
 
      <div className='w-full transition-all duration-500  '>

        <div className='loader  w-full h-screen bg-[#111] text-white '>
        {/* <AnimatedCursor/> */}
          <div className='absolute top-[5%] left-1/2 -translate-x-2/4 translate-y-0 '>
            <h5 className='uppercase text-xs font-light text-center animate-up'>Personal Portfolio</h5>
            <h5 className='uppercase text-xs font-light text-center animate-up'>&copy; {new Date().getFullYear()}</h5>
          </div>
          <h1 className='animate-left animate-up absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-3xl md:text-[4vw] font-medium'>Monte<span  className='font-slack '>k</span> is a</h1>
        </div>
        <div className='green overflow-hidden w-full h-[0vh] bg-[#14CF93] absolute top-full'></div>
        <div id='section'  className='w-full h-screen dark:bg-[#333] bg-[#f0f0f0] text-[#333] dark:text-yellow-200 '>
          <div className='navbar w-full h-[100px] flex items-center justify-between px-[5vw] py-0'>
            <Link href="/" className='uppercase font-light text-xs  relative under'>Montek 
              <span className=' w-full h-[1px]  bg-[#333]  inline-block absolute right-0 bottom-0 line'></span>
            </Link>
            <a target="_blank" href="https://blog.montek.dev/" className='uppercase font-light text-xs relative under'>Devlog
            <span className=' w-full h-[1px] bg-[#333]  inline-block absolute right-0 bottom-0 line'></span>
            </a>
            {/* <a href="#" className='uppercase font-light text-xs text-black relative under'>link
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a>
            <a href="#" className='uppercase font-light text-xs text-black relative under'>link
            <span className=' w-full h-[1px] bg-black inline-block absolute right-0 bottom-0 line'></span>
            </a> */}
          </div>
          <div className='md:mt-58 lg: mt-32  flex flex-col '>
          <div className='navbar w-full flex flex-col md:flex-row justify-between  py-0 px-[6vw] pr-[12vw]'>
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
        <div className='w-full md:flex justify-between  py-0 px-[6vw] pr-[12vw] items-center  '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons hidden md:inline w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

          <div className='flex flex-col md:flex-row  '>
          <h1 className='text-7xl md:text-[13vw] text-center font-semibold font-slack tracking-tighter visual md:pr-32'><span>~</span>Visual </h1>
          <h1 className='text-7xl md:text-[13vw] font-semibold typewriter text-center font-mono'>
              <span>Dev</span>
              <div id='cursor' className='w-1.5 h-14 md:w-2 md:h-20  xl:h-40 bg-[#333]   animate-[blink_1s_infinite] inline-block' />
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
       
        <div ref={divRef}  id='section_1' className='dark:bg-[#333]  bg-[#f0f0f0] w-full h-full pb-32 pt-32' >
        <h1 className='text-5xl mx-10 md:text-[11vw] font-semibold   text-[#333]  dark:text-yellow-200 text-center font-abril'>Straight Flush of Skills</h1>
          <CardStack/>
          <h1 className='text-5xl  mx-20 md:text-[11vw] font-semibold  text-center font-abril text-[#333]  dark:text-yellow-200'>Jack of All Codes, Mastering Them All</h1>
        </div>
        
        <div   className='pb-32 dark:bg-[#333]  bg-[#f0f0f0] ' >
        <Started/>
        </div>

        <div   className='bg-[#333] w-full h-screen ' >
          
        <Suspense fallback={null}>
        <Overlay />
        <Flock count={flockCount} />
        
      </Suspense>
      
      <WindowFocusHandler />
        </div>
      </div>
      <div   className='pb-32 w-full h-screen dark:bg-[#333]  bg-[#2e8f16] ' >
        <div className='h-screen'><HoverPage /></div>
        {/* <a style={{  top: 40, left: 40, fontSize: '13px' }} href="#" onClick={() => setLocation('/')}>
          {params ? '< back' : 'double click to enter portal'}
        </a> */}
        
        </div>
      </motion.div>
  );
};

export default Home;
