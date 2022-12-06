import {useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from '@react-three/drei'
function Experience() {
  const model = useLoader(GLTFLoader, "/model/scene.gltf")
  console.log(model)
  return (
    <>
    <OrbitControls makeDefault />
    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <primitive object={ model.scene } scale={ 10 } />
  </>
  )
}

export default Experience