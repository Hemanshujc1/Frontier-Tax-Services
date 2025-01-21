"use client";
import React from "react";
import AnimatedNumber from '../AnimatedNumber/AnimatedNumber';


const MyComponent = () => {
    return (
      <div className="slide h-[30vh] flex gap-20 justify-center items-center text-center font-bold text-white bg-black text-xl">
        <div className="slide1">
          <h2>Increased Savings</h2>
          <AnimatedNumber end={70} duration={2} suffix={"%"} />
        </div>
        <div className="bg-white sep h-28 w-0.5"></div>
        <div className="slide2">
          <h2>Accounting Firms</h2>
          <AnimatedNumber end={13} duration={2} suffix={"+"} />
        </div>
        <div className="bg-white sep h-28 w-0.5"></div>
        <div className="slide3">
          <h2>Employees</h2>
          <AnimatedNumber end={5} duration={2} suffix={"+"} />
        </div>
        <div className="bg-white sep h-28 w-0.5"></div>
        <div className="slide4">
          <h2>Years of Experience</h2>
          <AnimatedNumber end={3} duration={2} suffix={"+"} />
        </div>
      </div>
    );
  };

export default MyComponent
