import React from "react";
import Image from "next/image";
import "./Expertise.css";
import Link from "next/link";
import Head from "next/head";


const page = () => {
  return (
    <div className="background">
         <Head>
        <title>Best CPA & Accounting Services | Your Global Tax Buddy</title>
        <meta name="description" content="We provide specialized accounting and tax solutions for various industries, including healthcare, real estate, retail, and startups. Our CPA firm understands industry-specific challenges and offers tailored financial strategies to support your business growth." />
        <meta name="keywords" content="CPA services, accounting firm, tax preparation, payroll, business accounting" />
        <meta name="author" content="Your Global Tax Buddy" />
      </Head>
      <section className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Who We Serve?</h1>
          <p className="text-lg mb-6">
            With a deep understanding of accounting and financial management, we
            provide tailored outsourced accounting solutions to CPAs, accounting
            firms, and businesses. Our expertise spans across bookkeeping, tax
            preparation, payroll, accounts management, and compliance, ensuring
            accuracy, efficiency, and seamless financial operations. By
            leveraging advanced technology and industry best practices, we help
            you streamline processes, reduce costs, and focus on growth. Partner
            with us for reliable, scalable, and expert-driven accounting
            support.
          </p>
          <Link href="/Contactus">
          <button className="buttons py-1 px-6">
Contact Us
          </button>
          </Link>
        </div>
      </section>
      <div className="w-screen bg-white p-1"></div>


      <section className="expertise h-[90vh] flex flex-col p-5 my-3 justify-center align-middle items-center overflow-y-auto">
        <div>
          <h2 className="sectionheading"> Industries We Serve </h2>
        </div>
        <div className="h-[95%] w-[98%] overflow-y-auto flex flex-wrap gap-4 p-4 my-3 justify-center align-middle items-center">
          <div className="expertisecard cards">
            <Image
              src="/Real-Estate.gif"
              alt="Real-Estate gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Real Estate Industries</h3>
          </div>
          <div className="expertisecard cards">
            <Image
              src="/Hospitality.gif"
              alt="Hospitality gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Hospitality Industries</h3>
          </div>
          <div className="expertisecard cards">
            <Image
              src="/Healthcare.gif"
              alt="Healthcare gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Healthcare Industries</h3>
          </div>  
          <div className="expertisecard cards">
            <Image
              src="/Technology.gif"
              alt="Technology gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Technology Industries</h3>
          </div>
          <div className="expertisecard cards">
            <Image
              src="/Restaurants.gif"
              alt="Restaurants gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Restaurants Industries</h3>
          </div>
          <div className="expertisecard cards">
            <Image
              src="/Professional.gif"
              alt="Professional gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Professional Services</h3>
          </div>
          <div className="expertisecard cards">
            <Image
              src="/entrepreneur.gif"
              alt="Entrepreneur gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Entrepreneur</h3>
          </div>
          <div className="expertisecard cards">
            <Image
              src="/Construction.gif"
              alt="Construction gif"
              width={60}
              height={60}
              unoptimized
            />
            <h3 className="text-center cardsheading">Construction Industries</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
