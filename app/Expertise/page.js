import React from "react";
import Image from "next/image";
import "./Expertise.css";

const page = () => {
  return (
    <div>
      <section className="expertise h-[90vh] flex flex-col gap-16 p-5 mb-10 justify-center">
        <div className="heading text-center text-4xl font-bold">
          <h2>Who We Serve?</h2>
        </div>
        <div className="cards flex flex-wrap gap-2 h-[85vh] overflow-auto justify-center">
          <div className="expertisecard">
            <Image src="/Real-Estate.gif" alt="Real-Estate gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Real Estate Industries</h4>
          </div>
          <div className="expertisecard">
            <Image src="/Hospitality.gif" alt="Hospitality gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Hospitality Industries</h4>
          </div>
          <div className="expertisecard">
            <Image src="/Healthcare.gif" alt="Healthcare gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Healthcare Industries</h4>
          </div>
          <div className="expertisecard">
            <Image src="/Technology.gif" alt="Technology gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Technology Industries</h4>
          </div>
          <div className="expertisecard">
            <Image src="/Restaurants.gif" alt="Restaurants gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Restaurants Industries</h4>
          </div>
          <div className="expertisecard">
            <Image src="/Professional.gif" alt="Professional gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Professional Services</h4>
          </div>
          <div className="expertisecard">
            <Image src="/entrepreneur.gif" alt="Entrepreneur gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Entrepreneur</h4>
          </div>
          <div className="expertisecard">
            <Image src="/Construction.gif" alt="Construction gif" width={60} height={60} unoptimized />
            <h4 className="text-center w-[170px]">Construction Industries</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
