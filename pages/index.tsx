import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import Experience from '../Experience/Experience'
import Head from 'next/head'
const Home: NextPage = () => {

      // const form = document.getElementById('__next')
      // if(form) (form.classList.add('page')); 

  return (
    <>
    <Head>
      <title>
        Montek
      </title>
    </Head>
    <div className="root_page">
    <Canvas >
      <Experience/>
    </Canvas>
    </div>
    </>
  )
}

export default Home
