import React, { useState, useEffect,useRef} from 'react';
import { useSpring, animated,config } from 'react-spring';

const ScrollAnimation = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      (position > 0.65 && position < 0.75)?setScrollPosition(1):setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacitySpring = useSpring({
    opacity: scrollPosition*1.2 + 0.05,
    from: { opacity: 0 },
  });

  const leftSpring = useSpring({
    marginLeft: scrollPosition *-15 + 'px',
    from: { marginLeft: '0px' },
  });
  
  return (
    <animated.div style={{...opacitySpring,...leftSpring}}>
          {children}
    </animated.div>
  );
};

export default ScrollAnimation;
