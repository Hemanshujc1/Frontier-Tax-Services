"use client"
import React, { useState, useEffect } from 'react';

const items = [
  {
    heading: "Personal Tax",
    para:
      "We help individuals explore tax-saving opportunities and provide solid tax strategies to increase their scalability and growth. By evaluating the tax consequences of business and personal decisions, we provide integrated guidance to manage and retain hard-earned wealth. Our team of experienced and skilled tax professionals leads individuals through the complexity of taxes with confidence and works closely to get tax-related tasks accomplished accurately, efficiently, and on time.",
  },
  {
    heading: "State and local Tax",
    para:
      " We provide individuals and businesses with comprehensive state and local tax strategies that help lower tax rates, minimize compliance risk and tax burden, and ensure compliance with all the different regulations. Our dedicated state and local tax (SALT)professionals help businesses identify opportunities for tax savings, manage state and local tax burdens, stay up to date on evolving tax laws and rules, and provide tailored and accurate solutions to meet every business need. We offer customized SALT services to handle unique SALT challenges faced by businesses and recommend accurate and favorable tax solutions to help businesses meet their objectives.",
  },
  {
    heading: "Business Tax",
    para:
      "We are Experienced, well-prepared, and qualified team of expert tax professionals and advisors helping businesses with the tax services they need for every aspect of their financial and tax situation. Our tax advisors ensure every business receives tax assistance aligned with their business goals and requirements. We help busy business owners with their taxes and assist with consulting, compliance, tax preparation, and tax filing to help them lower taxable income, optimize tax credits, reduce the tax rate, and strategize tax payments. We serve companies across multiple industries, such as real estate, healthcare, technology, nonprofit organizations, and many more, with professional business tax services.",
  },
  {
    heading: "Payroll Services",
    para:
      " We have a team of experienced payroll specialists skilled in payroll, reporting payroll taxes, and preparation of necessary reporting forms, including W-2 and 1099. We provide comprehensive payroll services tailored to meet every business's needs and streamline their payroll processes. Our comprehensive payroll service allows business owners to focus more on running businesses and achieving strategic goals by saving valuable time spent on routine payroll and accounting tasks. We simplify payroll for organizations while ensuring full compliance, meeting regulatory standards, and never missing a payroll.",
  },
  {
    heading: "Monthly Accounting Services",
    para:
      "We offer comprehensive Accounting and Bookkeeping Services tailored to meet the unique needs of your business. Our dedicated team ensures accurate financial records, timely reporting, and adherence to regulatory standards. From day-to-day transaction recording to financial statement preparation, we handle it all with precision and professionalism. Trust us to streamline your financial processes, providing you with the insights needed to make informed decisions and drive business growth. Let us take care of your accounting needs, so you can focus on what you do best – running your business.",
  },
 
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  useEffect(() => {
    const serviceCards = document.querySelectorAll('.servicecard');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    serviceCards.forEach((card) => observer.observe(card));

    return () => {
      serviceCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center">
      <button
        className="absolute left-2 text-3xl focus:outline-none z-10"
        onClick={handleLeftClick}
      >
        &lt;
      </button>
      <div className="carousel-container">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item w-full flex justify-center">
              <div className="servicecard shadow-md">
                <div className="text-center information">
                  <h3 className="font-bold text-[purple]">{item.heading}</h3>
                  <h4 className="text-sm text-purple p-2">{item.para}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-2 text-3xl focus:outline-none z-10"
        onClick={handleRightClick}
      >
        &gt;
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center">
      <TeamCarousel />
    </div>
  );
};

export default Page;
