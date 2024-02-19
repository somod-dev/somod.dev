import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ScrollAnimation = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const spring = useSpring({
    transform: `translateX(${(scrollPosition * 80)-80}%)`,
    from:{ transform: 'translateX(0%)' },
  });

  return (
    <animated.div style={spring}>
      {children}
    </animated.div>
  );
};

export default ScrollAnimation;
