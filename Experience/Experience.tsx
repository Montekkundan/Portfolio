import {  useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei';
import router from 'next/router';
import { useRef } from 'react';
import { Mesh } from 'three/src/objects/Mesh';
import * as THREE from 'three';
import OperatingSystem from '../components/OperatingSystem';


function Experience(enable: any): JSX.Element {
  console.log(enable);
  const model = useLoader(GLTFLoader, '/model/room.glb');
  const { camera } = useThree();
  let time = 0;
const duration = 5; // duration of the animation in seconds
const start = new THREE.Vector3(0, 2.2828, 3.4258);
const end = new THREE.Vector3(-3.5359259, 2.2828, 3.4258);


function easeInOutCubic(t: number) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

useFrame(({ clock }) => {
  const elapsed = clock.elapsedTime;
  time += elapsed;
  if (time < duration) {
    const t = easeInOutCubic(time / duration);
    const newPosition = new THREE.Vector3().lerpVectors(start, end, t);
    camera.position.set(newPosition.x, newPosition.y, newPosition.z);
  }
  // setInterval(() => {
  //   console.log('Camera position:', camera.position);
  // }, 1000);
});

  camera.lookAt(0, 0.7, 14); // Make camera point at point of interest
  const purpleBoxRef = useRef<Mesh>(null!);
  const blueBoxRef = useRef<Mesh>(null!);

  const changeUrl = (url: string) => {
    router.push(`/${url}`);
  };

  const handleBoxPointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handleBoxPointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      
      <OrbitControls
        minDistance={2}
        maxDistance={8}
        maxPolarAngle={Math.PI / 2.1}
        position={[-4, 2.5, 5]}
      />
     <directionalLight
      castShadow
      position={[1, 2, 3]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <ambientLight intensity={0.5} />

       {/* Add a white cube */}
    <mesh  receiveShadow
      castShadow position-y={5}>
      <boxGeometry args={[13, 13, 13]} />
      <meshStandardMaterial color="white" side={THREE.BackSide} />
    </mesh>

      <primitive  object={model.scene} position-y={-0.4} scale={2}  rotation={[0, Math.PI, 0]} />

      <mesh
        ref={blueBoxRef}
        receiveShadow
        castShadow
        position-y={0}
        position-x={-2}
        scale={0.1}
        onClick={() => changeUrl('terminal')}
        onPointerOver={handleBoxPointerOver}
        onPointerOut={handleBoxPointerOut}
      >
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh
        ref={purpleBoxRef}
        receiveShadow
        castShadow
        position-y={0}
        position-x={-3}
        scale={0.1}
        onClick={() => changeUrl('resume')}
        onPointerOver={handleBoxPointerOver}
        onPointerOut={handleBoxPointerOut}
      >
        <boxGeometry />
        <meshStandardMaterial color="purple" />
      </mesh>
      <primitive
          object={ model.scene } 
      >
    
      <Html transform
    wrapperClass="htmlScreen"
    distanceFactor={ 0.22 }
    rotation={[0, Math.PI, 0]}
    position={ [ 0, 0.686, 0.12] }
    rotation-x={  0 }
    >
      { enable && <iframe src="https://www.montek.dev/terminal/" />}
          
          {/* <OperatingSystem/> */}
      </Html>
      </primitive>
    </>
  );
}

export default Experience;
