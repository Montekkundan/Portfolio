import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import Experience from '../Experience/Experience'
import Head from 'next/head'
import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'
const Home: NextPage = () => {

      // const form = document.getElementById('__next')
      // if(form) (form.classList.add('page')); 
      function Loader() {
        const { progress } = useProgress()
        return <Html center>{progress} % loaded</Html>
      }
  return (
    <>
    <Head>
      <title>
        Montek
      </title>
    </Head>
    <div className="root_page">
    <Canvas >
    <Suspense fallback={<Loader />}>
      <Experience/>
      </Suspense>
    </Canvas>
    </div>
    </>
  )
}

export default Home
