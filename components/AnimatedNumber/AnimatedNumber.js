"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
const AnimatedNumber = ({ end, duration, suffix }) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5, // When 50% of the element is in view
    });
  
    // Update animation state when the element comes into view
    if (inView && !startAnimation) {
      setStartAnimation(true);
    }
  
    return (
      <div ref={ref} className="counter">
        <h3>
          <CountUp
            end={end}
            duration={duration}
            suffix={suffix}
            start={startAnimation ? null : 0}
          />
        </h3>
      </div>
    );
  };
  

export default AnimatedNumber
