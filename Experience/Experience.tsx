import {  useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import router from 'next/router';
import { useRef } from 'react';
import { Mesh } from 'three/src/objects/Mesh';

function Experience(): JSX.Element {
  const model = useLoader(GLTFLoader, '/model/room.glb');
  const { camera } = useThree();
  camera.position.set(-4, 2.5, 5);

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
        minDistance={0.5}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2.1}
        position={[4, 4, 3]}
      />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* Add a point light for room.glb */}
      <pointLight position={[0, 3, 0]} intensity={1} />
      <mesh
        receiveShadow
        position-y={0}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <primitive object={model.scene} position-y={0.34} scale={2}  rotation={[0, Math.PI, 0]} />

      <mesh
        ref={blueBoxRef}
        receiveShadow
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
    </>
  );
}

export default Experience;
