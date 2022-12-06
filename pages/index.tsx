import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import Experience from '../Experience/Experience'

const Home: NextPage = () => {
  return (
    <Canvas >
      <Experience/>
    </Canvas>
  )
}

export default Home
