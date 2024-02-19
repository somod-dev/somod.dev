import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedImage = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const childrenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scale, opacity } = useSpring({
    scale: scrollPosition,
    opacity: scrollPosition*2,
    config: { tension: 120, friction: 22, precision: 0.001 },
  });

  return (
    <animated.div
      ref={childrenRef}
      style={{
        transform: scale.interpolate(s => `scale(${s * 0.5 + 0.54})`),
        opacity:opacity,
      }}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedImage;
