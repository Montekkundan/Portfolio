import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import Experience from '../Experience/Experience'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>
        Montek
      </title>
    </Head>
    <Canvas >
      <Experience/>
    </Canvas>
    </>
  )
}

export default Home
