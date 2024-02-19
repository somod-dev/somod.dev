import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Slide1Animation = ({ children })  => {
  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1.5 },
    config: config.molasses,
    delay: 350
  });

  const scaleAnimation = useSpring({
    from: { scale: 0.1},
    to: { scale: 1 },
    config: config.molasses,
    delay: 350
  });

  return (
    <animated.div style={{ ...fadeAnimation,...scaleAnimation }}>
      {children}
    </animated.div>
  );
};

export default Slide1Animation;
