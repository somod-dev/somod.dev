import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';

const AnimatedImage = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const childrenRef = useRef(null);

  const { x, opacity } = useSpring({
    from: { x: -100, opacity: 0 },
    to: async (next) => {

      await next({ x: 0, opacity: 1 });
    },
    config: config.molasses,
    reset: true,
    immediate: !isVisible, 
  });

  useEffect(() => {
    const handleScroll = () => {
      const top = childrenRef.current?.getBoundingClientRect().top;
      const bottom = childrenRef.current?.getBoundingClientRect().bottom;
      const height = window.innerHeight;
      const threshold = 0.8;

      if (
        (top && top < height * threshold && bottom > 0) || 
        (bottom && bottom > height * (1 - threshold) && top < height) 
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <animated.div
      ref={childrenRef}
      style={{
        transform: x.interpolate((x) => `translateX(${x}%)`),
        opacity: opacity.interpolate((o) => o),
      }}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedImage;
