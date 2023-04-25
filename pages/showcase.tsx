import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useState } from 'react';
import wordList from '../utils/wordlist';
import React from 'react';
import { Object3D } from 'three';

type SphereOfWordsProps = {
  expanded: boolean;
};

const SphereOfWords: React.FC<SphereOfWordsProps> = ({ expanded }) => {
  const ref = React.useRef();

  useFrame(() => {
    if (ref.current) {
      (ref.current as Object3D).children.forEach((child: { position: { x: number; y: number; z: number; }; }, index: any) => {
        if (!expanded) {
          // A random speed and direction for the movement
          const speed = Math.random() * 0.1;
          const direction = Math.random() * Math.PI * 6 ;
        
          // Move the child according to the speed and direction
          child.position.x += Math.cos(direction) * speed;
        
          // Wrap the position around the edges of the screen
          if (child.position.x > window.innerWidth / 2) child.position.x = -window.innerWidth / 2;
          if (child.position.x < -window.innerWidth / 2) child.position.x = window.innerWidth / 2;
          if (child.position.y > window.innerHeight / 2) child.position.y = -window.innerHeight / 2;
          if (child.position.y < -window.innerHeight / 2) child.position.y = window.innerHeight / 2;
        }
      });
    }
  });

  return (
    <group ref={ref}>
      {wordList.map((word, index) => (
        <Text
          key={index}
          position={[
            expanded ? window.innerWidth < 640 ? 0 : Math.random() * 10 - 4 : Math.random() * 10 - 5,
            expanded ? Math.random() * 10 - 4 : Math.random() * 5 - 2.5,
            expanded ? Math.random() * 10 - 4 : 0,
          ]}

          fontSize={0.5}
          color="black"  getObjectsByProperty={undefined} getVertexPosition={undefined}>
          {word}
        </Text>
      ))}
    </group>
  );
};

const Showcase = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="w-full fixed   md:w-1/2 p-8 z-50">
        <p className="text-2xl sm:text-3xl lg:text-4xl">
          I am a full-stack developer proficient in multiple technologies, including React, Next.js, TypeScript, and
          Three.js. I am constantly seeking opportunities to expand my skill set and create innovative solutions for
          real-world problems.
        </p>

        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded text-sm sm:text-base lg:text-lg z-50"
            onClick={() => setExpanded(!expanded)}
          >
            Toggle Sphere
          </button>
        </div>
      </div>
      <div className='root_page z-0'>
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SphereOfWords expanded={expanded} />
        </Canvas>
      </div>
    </>
  );
};




export default Showcase;
