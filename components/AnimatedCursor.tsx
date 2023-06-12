import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCursor: React.FC = () => {
  let cursor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };
  
    const onMouseHover = () => {
      gsap.to(cursor.current, {
        scale: 1.5,
        duration: 0.3,
      });
      if(cursor.current) {
        cursor.current.classList.add("cursor-hover");
      }
    };
  
    const onMouseHoverOut = () => {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.3,
      });
      if(cursor.current) {
        cursor.current.classList.remove("cursor-hover");
      }
    };
  
    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("h1").forEach((el: Element) => {
      el.addEventListener("mouseenter", onMouseHover);
      el.addEventListener("mouseleave", onMouseHoverOut);
    });
  
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll("h1").forEach((el: Element) => {
        el.removeEventListener("mouseenter", onMouseHover);
        el.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);
  

  return <div ref={cursor} className="cursor"></div>
}

export default AnimatedCursor;
