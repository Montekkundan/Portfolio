import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../Experience/Experience';
import Head from 'next/head';
import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import ReactLoading from 'react-loading';
import metadata from '../metadata.json';

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
  const [isLoading, setIsLoading] = useState(true);
const [controlsEnabled, setControlsEnabled] = useState(false);
  // Simulate loading time
  setTimeout(() => setIsLoading(false), 3000);
  
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
      <button onClick={() => setControlsEnabled(!controlsEnabled)} className='pointer absolute z-20'> {!controlsEnabled ? 'Enable' : 'Disable'}</button>
      <div className="root_page">
        {isLoading ? (
          <LoadingScreen progress={progress} />
        ) : (
          <Canvas>
            <Experience enable={controlsEnabled} />
          </Canvas>
        )}
      </div>
      </motion.div>
  );
};

export default Home;
