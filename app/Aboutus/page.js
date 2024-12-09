"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import "./Aboutus.css";

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

const MyComponent = () => {
  return (
    <div className="slide h-[30vh] flex gap-20 justify-center items-center text-center text-yellow-800">
      <div className="slide1">
        <h2>Increased Savings</h2>
        <AnimatedNumber end={70} duration={2} />
      </div>
      <div className="bg-white sep h-28 w-0.5"></div>
      <div className="slide2">
        <h2>Accounting Firms</h2>
        <AnimatedNumber end={13} duration={2} />
      </div>
      <div className="bg-white sep h-28 w-0.5"></div>
      <div className="slide3">
        <h2>Employees</h2>
        <AnimatedNumber end={5} duration={2} />
      </div>
      <div className="bg-white sep h-28 w-0.5"></div>
      <div className="slide4">
        <h2>Years of Experience</h2>
        <AnimatedNumber end={3} duration={2} />
      </div> 
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <section className="section-1 relative h-screen flex flex-col items-center justify-center">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/aboutvideo.mp4" type="video/mp4" />
            Unable to load the background
          </video>
        </div>
        <div className="text relative z-10 max-w-3xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            About Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-400">
            We provide comprehensive assistance, spanning from bookkeeping to
            advisory consultation, resulting in enhanced efficiency and reduced
            costs for your company.
          </p>
        </div>
      </section>
      <div className="bg-white opacity-15 h-1"></div>
      <div className="experience">
        <MyComponent />
      </div>
      <div className="bg-white opacity-15 h-1"></div>
      <div className="newbox h-[80vh] flex justify-center items-center">
        <div className="howcanhelpyou w-[90vw] flex justify-center align-center items-center gap-6">
          <div className="heading">
            <h1 className="text-center text-3xl font-bold">
              How we can help you get ahead ?
            </h1>
          </div>
          <div className="txt flex flex-col justify-center align-middle">
            <p>
              Great outsourcing is all about escalating the counter accounting
              firm to excel in every aspect, from increasing the profit margin
              to alluring potential clients.
            </p>
            <p>
              Our talented pool of skilled professionals has successfully worked
              with ample of firms and assisted them to grow their client reaches
              and formulated an updated marketing plan to persist ahead of their
              contenders.
            </p>
            <p>
              In order to make a major breakthrough in today’s competitive
              market, each and every firm is seeking the answer to this one
              question:” How do we keep our clients’ deliverables up to date
              with a profitable margin?”
            </p>
            <p className="p-2">By partnering with us, you can observe:</p>
            <ul className="text-[#ff6600]">
              <li>-Best accounting and bookkeeping practices</li>
              <li>-High operational efficiency</li>
              <li>-Enhance client’s deliverables</li>
              <li>-Increase profit margin</li>
              <li>-Outstanding productivity at reduced costs</li>
              <li>-Efficient and accountable outcome</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white opacity-15 h-1"></div>
      <div className="our-team h-[150vh] flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold mt-8">Our Team</h2>
        {/* <TeamCarousel /> */}
        <div className="team flex flex-wrap items-center justify-center gap-8 mb-10 mt-10 h-[90vh] w-[80vw]">
          <div className="teamcard MEMBER-1">
            <Image
              src={"/person1.jpg"}
              alt={"Arpit pic"}
              className="w-81 h-40 rounded-[10px] mb-2 mt-0"
              width={220}
              height={220}
            />

            <div className="name text-center">
              <h3 className="font-bold">Arpit Choudhary</h3>
              <h4>Director</h4>
              <p>
              Experienced in taxation, compliance, and business strategy, providing visionary leadership to drive growth, seamless solutions, and client-focused success.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard MEMBER-2">
            <Image
              src={"/person2.jpg"}
              alt={"Riddhi pic"}
              className="w-81 h-40 rounded-[10px] mb-2 mt-0"
              width={220}
              height={220}
            />

            <div className="name text-center">
              <h3 className="font-bold">Riddhi Choudhary</h3>
              <h4>Accounting Manager</h4>
              <p>Skilled in accounting, financial analysis, and compliance, ensuring accurate reporting, efficient processes, and client-focused financial management solutions.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard MEMBER-3">
            <Image
              src={"/person3.jpg"}
              alt={"Vishnu Vardhan Ratnapuram pic"}
              className="w-81 h-50 rounded-[10px] mb-2 mt-0"
              width={220}
              height={220}
            />

            <div className="name text-center">
              <h3 className="font-bold">Vishnu Vardhan Ratnapuram </h3>
              <h4>Tax Manager</h4>
              <p>
              Experienced in U.S. taxation, compliance, incorporation services, and regulations, delivering client-focused solutions with precision and expertise.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard MEMBER-4">
            <Image
              src={"/Hemanshupic.jpeg"}
              alt={"Hemanshu pic"}
              className="w-81 h-48 rounded-[10px] mb-2 mt-0"
              width={220}
              height={220}
            />

            <div className="name text-center">
              <h3 className="font-bold">Hemanshu Choudhary</h3>
              <h4>IT Head</h4>
              <p>
              Expert in IT solutions, web development, and system optimization, driving innovation, seamless operations, and scalable technology for business success.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          {/* <div className="teamcard MEMBER-5">
            <Image
              src={"/Hemanshupic.jpeg"}
              alt={"Hemanshu pic"}
              className="w-81 h-50 rounded-[10px] mb-2 mt-0"
              width={220}
              height={220}
            />

            <div className="name text-center">
              <h3 className="font-bold">Hemanshu Choudhary | CTO </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus dignissimos quis reiciendis ipsa deleniti
                dicta praesentium aut officiis repellat.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// const TeamCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const items = [
//     {
//       name: "Hemanshu Choudhary",
//       title: "B.tech | Title",
//       img: "/Hemanshupic.jpeg",
//     },
//     {
//       name: "Hemanshu Choudhary",
//       title: "B.tech | Title",
//       img: "/Hemanshupic.jpeg",
//     },
//     {
//       name: "Hemanshu Choudhary",
//       title: "B.tech | Title",
//       img: "/Hemanshupic.jpeg",
//     },
//     {
//       name: "Hemanshu Choudhary",
//       title: "B.tech | Title",
//       img: "/Hemanshupic.jpeg",
//     },
//   ];
//   const totalItems = items.length;

//   const handleLeftClick = () => {
//     setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
//   };

//   const handleRightClick = () => {
//     setCurrentIndex((currentIndex + 1) % totalItems);
//   };

//   return (
//     <div className="relative flex items-center justify-center w-full h-[80vh] perspective-1000">
//       <button
//         className="absolute left-2 text-3xl focus:outline-none"
//         onClick={handleLeftClick}
//       >
//         ←
//       </button>
//       <div className="relative flex items-center justify-center w-4/5 h-full overflow-hidden">
//         <div
//           className="carousel relative flex items-center justify-center w-full h-full transition-transform duration-700"
//           style={{
//             transform: `rotateY(${(currentIndex * -360) / totalItems}deg)`,
//           }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="carousel-item absolute teamcard shadow-md"
//               style={{
//                 transform: `rotateY(${
//                   (index * 360) / totalItems
//                 }deg) translateZ(250px)`,
//               }}
//             >
//               <Image
//                 src={item.img}
//                 alt={item.name}
//                 className="w-24 h-24 rounded-full mb-2"
//                 width={96}
//                 height={96}

//               />
//               <div className="text-center name">
//                 <h3 className="font-bold">{item.name}</h3>
//                 <h4 className="text-sm">{item.title}</h4>
//                 <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         className="absolute right-2 text-3xl focus:outline-none"
//         onClick={handleRightClick}
//       >
//         →
//       </button>
//     </div>
//   );
// };

export default Page;
