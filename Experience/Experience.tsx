import {useLoader, useThree} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from '@react-three/drei'
import gsap from "gsap";
import Link from 'next/link';
import router from 'next/router';
function Experience() {
  const model = useLoader(GLTFLoader, "/model/scene.gltf")
  const lamp = useLoader(GLTFLoader, "/lamp/scene.gltf")
  const {camera} = useThree()
  const eventHandler = () => {
    console.log("hello")
    gsap.to( camera.position, {
      duration: 2,
      x: 0,
      y: 1,
      z: 0, // maybe adding even more offset depending on your model
    } );
  }
  // Todo 
  // remove right click drag from camera
  // add blender model of apartment with rooms
  // add lamp with gsap path to apartment rooms
  // create magical background
  const changeUrl = () => {
    console.log("hello")
    router.push("/terminal")
  }
  return (
    <>
    <OrbitControls minDistance={0.5} maxDistance={10} maxPolarAngle={(Math.PI/2.1)}  position={[4,4,3]}/>
    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry args={[4,4,4]} />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <primitive object={ model.scene } position-y={ -0.07 }  scale={ 10 } />
        <primitive object={ lamp.scene } position-y={ -0.7 } position-x={ 2 } scale={ 0.1 } onClick={eventHandler} />
        
        <mesh receiveShadow position-y={ 0 }  position-x={ -2 }  scale={ 0.1 } onClick={changeUrl} >
            <boxGeometry />
            <meshStandardMaterial color="blue" />
        </mesh>
  </>
  )
}

export default Experience