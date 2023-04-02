import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../Experience/Experience';
import Head from 'next/head';
import LoadingScreen from '../Experience/LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  setTimeout(() => setIsLoading(false), 3000);

  return (
    <>
      <Head>
        <title>Montek</title>
      </Head>
      <div className="root_page">
        {isLoading ? (
          <LoadingScreen />
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
