import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const NumberAnimation = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / ((duration * 1000) / 60); // Calculate increment per frame (60fps)
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setCount(Math.ceil(start));
      }, 1000 / 60); // 60fps

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default NumberAnimation;
