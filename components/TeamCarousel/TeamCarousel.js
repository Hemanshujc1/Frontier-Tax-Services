"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "./TeamCarousel.css";


const TeamCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
      {
        name: "Arpit Choudhary",
        title: "Director",
        img: "/person1.jpg",
        desc: "Experienced in taxation, compliance, and business strategy, providing visionary leadership to drive growth, seamless solutions, and client-focused success.",
      },
      {
        name: "Riddhi Choudhary",
        title: "Accounting Manager",
        img: "/person2.jpg",
        desc: "Skilled in accounting, financial analysis, and compliance, ensuring accurate reporting, efficient processes, and client-focused financial management solutions.",
      },
      {
        name: "Vishnu Vardhan Ratnapuram",
        title: "Tax Manager",
        img: "/person3.jpg",
        desc: "Experienced in U.S. taxation, compliance, incorporation services, and regulations, delivering client-focused solutions with precision and expertise.",
      },
      {
        name: "Hemanshu Choudhary",
        title: "IT Head",
        img: "/Hemanshupic.jpeg",
        desc: "Expert in IT solutions, web development, and system optimization, driving innovation, seamless operations, and scalable technology for business success.",
      },
    ];
    const totalItems = items.length;
  
    const handleLeftClick = () => {
      setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
    };
  
    const handleRightClick = () => {
      setCurrentIndex((currentIndex + 1) % totalItems);
    };
  
    return (
      <div className="relative flex items-center justify-center w-full h-[80vh] perspective-1000">
        <button
          className="absolute left-2 text-2xl focus:outline-none"
          onClick={handleLeftClick}
        >
          ←
        </button>
        <div className="relative flex items-center justify-center w-[80%] h-full overflow-hidden" >
          <div
            className="carousel relative flex items-center justify-center w-full h-full transition-transform duration-700"
            style={{
              transform: `rotateY(${(currentIndex * -360) / totalItems}deg)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="carousel-item absolute teamcard1 shadow-md"
                style={{
                  transform: `rotateY(${
                    (index * 360) / totalItems
                  }deg) translateZ(250px)`,
                }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24  mb-2"
                  width={98}
                  height={98}
                />
                <div className="text-center name1">
                  <h3>{item.name}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-2 text-2xl focus:outline-none"
          onClick={handleRightClick}
        >
          →
        </button>
      </div>
    );
 };


export default TeamCarousel
