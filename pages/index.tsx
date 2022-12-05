import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'

const Home: NextPage = () => {
  return (
    <Canvas className="flex min-h-screen flex-col items-center justify-center py-2">
      <mesh>
        <torusKnotGeometry/>
        <meshNormalMaterial/>
      </mesh>
    </Canvas>
  )
}

export default Home
