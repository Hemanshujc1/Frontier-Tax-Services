"use client";
import React, { useState, useEffect } from "react";
import "./Services.css";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedSubservice, setExpandedSubservice] = useState(null);

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  const toggleSubservice = (subservice) => {
    setExpandedSubservice(
      expandedSubservice === subservice ? null : subservice
    );
  };

  return (
    <div className="background">
      <section className="section-1 relative h-screen flex flex-col items-center justify-center overflow-x-hidden">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-[0.6] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/video1.mp4" type="video/mp4" />
            Unable to load the background
          </video>
        </div>
        <div className="text relative z-10 max-w-3xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[BLACK]">
          Comprehensive CPA and Accounting Consulting Services
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-950">
          Explore our tailored services that help businesses, entrepreneurs, and individuals achieve financial success.
          </p>
          <button className="bg-white shadow-lg rounded-md p-2 m-1">
            {" "}
            <Link href="Contactus">Get in Touch</Link>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Page;
