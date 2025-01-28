"use client";
import React from "react";
import Image from "next/image";
import "./Aboutus.css";
import TeamCarousel from "@/components/TeamCarousel/TeamCarousel";
import MyComponent from "@/components/MyComponent/MyComponent";
import Link from "next/link";

const Page = () => {
  return (
    <div className="background">
      <section className="section-1 relative h-screen flex flex-col items-center justify-center bg-slate-800">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-[0.3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/aboutvideo.mp4" type="video/mp4" />
            Unable to load the background
          </video>
        </div>
        <div className="herosectiontext relative z-10 max-w-3xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Redefining Accounting with Precision & Expertise
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-950">
            We empower CPAs, accounting firms, and businesses with seamless,
            reliable, and technology-driven outsourced accounting
            solutions—helping you focus on growth while we handle the numbers.
          </p>
          <Link href="Contactus">
            <button className="buttons px-4 py-1 m-3">
              Partner with Experts – Elevate Your Accounting Efficiency
            </button>
          </Link>
        </div>
      </section>
      <div className="experience h-auto">
        <MyComponent />
      </div>
      <div className="w-screen bg-white p-1"></div>

      <section class="py-20 relative">
        <div class="container mx-auto px-6 lg:px-12 relative">
          {/* dotted lines */}
          <div class="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-black bg-[length:1px_30px] bg-[radial-gradient(circle,_#ccc_4px,_transparent_5px)]"></div>
          {/* section 1 */}
          <div class="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 w-6 h-6 rounded-full"></div>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
            <div class="md:col-span-5 cards">
              <h3 class="cardsheading">About Us</h3>
              <p class="cardspara">
                We are more than just accountants — we are your trusted partners
                in financial success. With years of expertise in CPA and
                accounting consulting, we simplify complex financial landscapes
                for businesses, entrepreneurs, and individuals.
              </p>
            </div>
            <div class="md:col-span-20"></div>
          </div>
          {/* section 2 */}
          <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mt-16">
            <div class="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 w-6 h-6 rounded-full"></div>
            <div class="md:col-span-7"></div>
            <div class="md:col-span-5 text-left cards">
              <h3 class="cardsheading">Our Mission</h3>
              <p class="cardspara">
                Our mission is to empower clients with accurate, insightful, and
                actionable financial strategies. We enable compliance, optimize
                resources, and unlock growth opportunities.
              </p>
            </div>
          </div>
          {/* section 3 */}

          <div class="grid grid-cols-1 md:grid-cols-11 gap-8 items-center mt-16">
            <div class="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 w-6 h-6 rounded-full"></div>

            <div class="md:col-span-5 cards">
              <h3 class="cardsheading">What Sets Us Apart?</h3>
              <ul class="list-disc list-inside cardspara">
                <li>
                  A team of experienced, certified professionals dedicated to
                  your success.
                </li>
                <li>Personalized services tailored to your unique needs.</li>
                <li>
                  A proactive, results-driven approach to financial management.
                </li>
              </ul>
            </div>
            <div class="md:col-span-7"></div>
          </div>
          {/* section 4 */}
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-16">
            <div class="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 w-6 h-6 rounded-full"></div>

            <div class="md:col-span-7"></div>
            <div class="md:col-span-5 cards">
              <h3 class="cardsheading">Benefits of Partnering with Us</h3>
              <ul class="list-disc list-inside cardspara">
                <li>Best accounting and bookkeeping practices</li>
                <li>High operational efficiency</li>
                <li>Enhanced client deliverables</li>
                <li>Increased profit margins</li>
                <li>Outstanding productivity at reduced costs</li>
                <li>Efficient and accountable outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen bg-white p-1"></div>

      <div className="howcanhelpyou flex flex-wrap gap-3 mx-auto px-6 lg:px-12 py-5 bg-black text-white justify-center items-center align-middle">
        <div className="sectionhheading text-left">
          <h2 className="text-left sectionheading">
            How we can help you get ahead ?
          </h2>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <p className="sectionpara text-white">
            Great outsourcing is all about escalating the counter accounting
            firm to excel in every aspect, from increasing the profit margin to
            alluring potential clients.
          </p>
          <p className="sectionpara text-white">
            Our talented pool of skilled professionals has successfully worked
            with ample of firms and assisted them to grow their client reaches
            and formulated an updated marketing plan to persist ahead of their
            contenders.
          </p>
          <p className="sectionpara text-white">
            In order to make a major breakthrough in today’s competitive market,
            each and every firm is seeking the answer to this one question:” How
            do we keep our clients’ deliverables up to date with a profitable
            margin?”
          </p>
        </div>
        <Link href={"/Contactus"}>
          <button className="buttons px-2 py-1">
            Contact Our Team Now!!
          </button>
        </Link>
      </div>
      <div className="w-screen bg-white p-1"></div>

      <div className="our-team h-auto flex flex-col items-center py-9 my-2 mx-auto px-6 lg:px-12">
        <h2 className="text-center sectionheading">Meet Our Team</h2>
        <div className="team flex flex-wrap items-center justify-center gap-8 mb-10 mt-5">
          <div className="teamcard cards MEMBER-1">
          <div className="teammemberimage">

            <Image
              src={"/person1.jpg"}
              alt={"Arpit pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />
            </div>

            <div className="text-center">
              <h3 className="cardsheading">Arpit Choudhary</h3>
              <h3 className="cardsheading">Director</h3>
              <p className="cardspara">
                Experienced in taxation, compliance, and business strategy,
                providing visionary leadership to drive growth, seamless
                solutions, and client-focused success.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard cards MEMBER-2">
            <div className="teammemberimage">
            <Image
              src={"/person2.jpg"}
              alt={"Riddhi pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />
            </div>

            <div className="text-center">
              <h3 className="cardsheading">Riddhi Choudhary</h3>
              <h3 className="cardsheading">Accounting Manager</h3>
              <p className="cardspara">
                Skilled in accounting, financial analysis, and compliance,
                ensuring accurate reporting, efficient processes, and
                client-focused financial management solutions.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard cards MEMBER-3">
          <div className="teammemberimage">

            <Image
              src={"/person3.jpg"}
              alt={"Vishnu Vardhan Ratnapuram pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />
            </div>

            <div className=" text-center">
              <h3 className="cardsheading">Vishnu Vardhan Ratnapuram </h3>
              <h3 className="cardsheading">Tax Manager</h3>
              <p className="cardspara">
                Experienced in U.S. taxation, compliance, incorporation
                services, and regulations, delivering client-focused solutions
                with precision and expertise.
              </p>
              {/* <Image src="/staticgmail.png" alt="gmail gif" width={40} height={40}/> */}
            </div>
          </div>
          <div className="teamcard cards MEMBER-4">
          <div className="teammemberimage">

            <Image
              src={"/Hemanshupic.jpeg"}
              alt={"Hemanshu pic"}
              className="w-38 h-40 rounded-[10px] mb-2 mt-0"
              width={190}
              height={180}
            />
            </div>

            <div className=" text-center">
              <h3 className="cardsheading">Hemanshu Choudhary</h3>
              <h3 className="cardsheading">IT Head</h3>
              <p className="cardspara">
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
