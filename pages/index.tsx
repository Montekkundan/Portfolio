import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../Experience/Experience';
import Head from 'next/head';
import { useProgress } from '@react-three/drei';

const LoadingScreen = ({ progress }:any) => {
  return (
    <div style={{ position: 'fixed', backgroundColor: 'black', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'none' }}>
      <div style={{ backgroundColor: 'black', border: '2px solid white', padding: '2rem', borderRadius: '0.5rem', fontFamily: 'monospace', color: 'white' }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Montek OS [Version 10.0.19043.1266]</p>
        <p style={{ fontSize: '1.5rem' }}>Loading... {progress} %</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  setTimeout(() => setIsLoading(false), 3000);
  
  const { progress } = useProgress();
  // console.log(progress);
  return (
    <>
      <Head>
        <title>Montek</title>
      </Head>
      <div className="root_page">
        {isLoading ? (
          <LoadingScreen progress={progress} />
        ) : (
          <Canvas>
            <Experience />
          </Canvas>
        )}
      </div>
    </>
  );
};

export default Home;
