import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, to } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import imgs from './data';

import styles from './styles.module.css';

const calcX = (y: number, ly: number) => -(y - ly - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 20;

export default function DragImage() {
  const [origX, setOrigX] = useState(-550);
  const [origY, setOrigY] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        // For mobile screens
        setOrigX(0);
        setOrigY(5);
        setScaleFactor(0.8);
      } else if (window.innerWidth < 1220) {
        // For tablet screens
        setOrigX(260);
        setOrigY(70);
        setScaleFactor(1);
      } else {
        // For desktop screens
        setOrigX(-490);
        setOrigY(-60);
        setScaleFactor(1);
      }
    }

    // Update position on component mount
    handleResize();

    // Update position whenever window gets resized
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', preventDefault);
    document.addEventListener('gesturechange', preventDefault);

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: origX,
    y: origY,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useEffect(() => {
    api.start({ x: origX, y: origY });
  }, [origX, origY]);

  useGesture(
    {
      onDrag: ({ active, movement: [x, y] }: any) =>
        api.start({ x: active ? x + origX : origX, y: active ? y + origY : origY, immediate: active }),
      onPinch: ({ offset: [d, a] }: any) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }: any) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }: any) => {
        if (hovering) {
          setCurrentImage(prevIndex => (prevIndex + 1) % imgs.length);
        }
        api({ rotateX: 0, rotateY: 0, scale: 1 });
      },
    },
    { target: domTarget, eventOptions: { passive: false } }
  );

  const handleLinkClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className={styles.container_card}>
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: scaleFactor,
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <animated.div>
          {imgs.map((img, i) => (
            <div key={i} style={{ backgroundImage: `url(${imgs[currentImage]})` }} />
          ))}
        </animated.div>
        
      </animated.div>
      {/* {currentImage === 1 && (
         <div className=''>
         <div className='' onClick={handleLinkClick}>
           Link
         </div>
       </div>
      )} */}
    </div>
  );
}
