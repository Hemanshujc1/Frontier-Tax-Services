"use client";
import React from "react";
import Image from "next/image";
import "./Aboutus.css";
import TeamCarousel from "@/components/TeamCarousel/TeamCarousel";
import MyComponent from "@/components/MyComponent/MyComponent";

const Page = () => {
  return (
    <div className="background text-black">
      <section className="section-1 relative h-screen flex flex-col items-center justify-center">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-[0.4] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1b3462]">
            About Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black">
            We provide comprehensive assistance, spanning from bookkeeping to
            advisory consultation, resulting in enhanced efficiency and reduced
            costs for your company.
          </p>
        </div>
      </section>
      <div className="experience h-auto">
        <MyComponent />
      </div>
      <div className="newbox h-auto p-5 flex justify-center items-center">
        <div className="howcanhelpyou w-[90vw] flex justify-center align-center items-center gap-6">
          <div className="heading">
            <h1 className="text-center text-2xl font-bold">
              How we can help you get ahead ?
            </h1>
          </div>
          <div className="txt flex flex-col">
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
            <p className="pt-2 pb-2">By partnering with us, you can observe:</p>
            <ul>
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
      <div className="our-team h-auto flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold mt-5">
          Our Team
        </h2>
        <div className="team flex flex-wrap items-center justify-center gap-8 mb-10 mt-5">
          <div className="teamcard MEMBER-1">
            <Image
              src={"/person1.jpg"}
              alt={"Arpit pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />

            <div className="name text-center">
              <h3 className="font-bold">Arpit Choudhary</h3>
              <h4>Director</h4>
              <p>
                Experienced in taxation, compliance, and business strategy,
                providing visionary leadership to drive growth, seamless
                solutions, and client-focused success.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard MEMBER-2">
            <Image
              src={"/person2.jpg"}
              alt={"Riddhi pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />

            <div className="name text-center">
              <h3 className="font-bold">Riddhi Choudhary</h3>
              <h4>Accounting Manager</h4>
              <p>
                Skilled in accounting, financial analysis, and compliance,
                ensuring accurate reporting, efficient processes, and
                client-focused financial management solutions.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard MEMBER-3">
            <Image
              src={"/person3.jpg"}
              alt={"Vishnu Vardhan Ratnapuram pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />

            <div className="name text-center">
              <h3 className="font-bold">Vishnu Vardhan Ratnapuram </h3>
              <h4>Tax Manager</h4>
              <p>
                Experienced in U.S. taxation, compliance, incorporation
                services, and regulations, delivering client-focused solutions
                with precision and expertise.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard MEMBER-4">
            <Image
              src={"/Hemanshupic.jpeg"}
              alt={"Hemanshu pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />

            <div className="name text-center">
              <h3 className="font-bold">Hemanshu Choudhary</h3>
              <h4>IT Head</h4>
              <p>
                Expert in IT solutions, web development, and system
                optimization, driving innovation, seamless operations, and
                scalable technology for business success.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
        </div>
        <div className="teamcarousel hidden">
          <TeamCarousel />
        </div>
      </div>
    </div>
  );
};

export default Page;
