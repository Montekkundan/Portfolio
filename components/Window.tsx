import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '@react-spring/web';
import { Window as Window95, WindowContent, WindowHeader } from 'react95';
import { useMedia } from 'react-use';

const AnimatedWindow = Window95;

interface WindowProps {
  soundSource: string;
}

export const Window: React.FC<WindowProps> = ({ soundSource }) => {
  const [ref, inView] = useInView({
    rootMargin: '-45% 0px -45% 0px',
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const isLargerWindow = useMedia('(min-width: 1024px)');
  const [scale, setScale] = useState(1.3);
  const [hasPlayed, setHasPlayed] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setScale(isLargerWindow ? 3 : 1.3);
    }, 100); // delay of 100ms
  }, [isLargerWindow]);
  useEffect(() => {
    if (inView && audioRef.current && !hasPlayed) { 
      audioRef.current.play();
      setHasPlayed(true); 
    }
  }, [inView, hasPlayed]);

  return (
    <>
      <audio ref={audioRef} src={soundSource} preload="auto" />
      <AnimatedWindow style={{ transform: `scale(${scale})` }} ref={ref} className="window">
        <WindowHeader active={false} className="window-title">
          <span>hello.py</span>
        </WindowHeader>
        <WindowContent>
          <em>print("Hello, World!")</em>
        </WindowContent>
      </AnimatedWindow>
    </>
  );
};
