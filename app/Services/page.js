"use client";
import React, { useState, useEffect } from "react";
import "./Services.css";
import { FaChevronDown } from "react-icons/fa";

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
    <div className="h-[90vh] flex flex-col overflow-auto align-center items-center justify-center gap-12">
      <h1 className="text-7xl">What Services We Offer ?</h1>
      {/* Tax Preparation */}
      <div className="service1">
        <div
          className="serive_title flex justify-between items-center rounded-sm w-[70vw] h-[5vh] bg-slate-300 text-emerald-800 font-bold p-5 cursor-pointer"
          onClick={() => toggleService("taxPreparation")}
        >
          <h2>Tax Preparation</h2>
          <FaChevronDown />
        </div>
        {expandedService === "taxPreparation" && (
          <div className="allsubservices">
            <div className="subservice subservice1">
              <div
                className="serive_subtitle flex justify-between items-center rounded-sm w-[70vw] h-[5vh] bg-slate-300 text-emerald-800 font-bold p-5 cursor-pointer"
                onClick={() => toggleSubservice("personalTax")}
              >
                <h2>Personal Tax</h2>
                <FaChevronDown />
              </div>
              {expandedSubservice === "personalTax" && (
                <div className="para rounded-sm w-[70vw] bg-slate-300 text-emerald-600 p-5">
                  <p>
                    We help individuals explore tax-saving opportunities and
                    provide solid tax strategies to increase their scalability
                    and growth. By evaluating the tax consequences of business
                    and personal decisions, we provide integrated guidance to
                    manage and retain hard-earned wealth. Our team of
                    experienced and skilled tax professionals leads individuals
                    through the complexity of taxes with confidence and works
                    closely to get tax-related tasks accomplished accurately,
                    efficiently, and on time.
                  </p>
                </div>
              )}
            </div>
            {/* Similar structure for other subservices */}
            <div className="subservice subservice2">
              <div
                className="serive_subtitle flex justify-between items-center rounded-sm w-[70vw] h-[5vh] bg-slate-300 text-emerald-800 font-bold p-5 cursor-pointer"
                onClick={() => toggleSubservice("BusinessTax")}
              >
                <h2>Business Tax</h2>
                <FaChevronDown />
              </div>
              {expandedSubservice === "BusinessTax" && (
                <div className="para rounded-sm w-[70vw]  bg-slate-300 text-emerald-600 p-5">
                  <p>
                    We are Experienced, well-prepared, and qualified team of
                    expert tax professionals and advisors helping businesses
                    with the tax services they need for every aspect of their
                    financial and tax situation. Our tax advisors ensure every
                    business receives tax assistance aligned with their business
                    goals and requirements. We help busy business owners with
                    their taxes and assist with consulting, compliance, tax
                    preparation, and tax filing to help them lower taxable
                    income, optimize tax credits, reduce the tax rate, and
                    strategize tax payments. We serve companies across multiple
                    industries, such as real estate, healthcare, technology,
                    nonprofit organizations, and many more, with professional
                    business tax services.
                  </p>
                </div>
              )}
            </div>
            <div className="subservice subservice3">
              <div
                className="serive_subtitle flex justify-between items-center rounded-sm w-[70vw] h-[5vh] bg-slate-300 text-emerald-800 font-bold p-5 cursor-pointer"
                onClick={() => toggleSubservice("stateandlocalTax")}
              >
                <h2>State and Local Tax</h2>
                <FaChevronDown />
              </div>
              {expandedSubservice === "stateandlocalTax" && (
                <div className="para rounded-sm w-[70vw] bg-slate-300 text-emerald-600 p-5">
                  <p>
                    We provide individuals and businesses with comprehensive
                    state and local tax strategies that help lower tax rates,
                    minimize compliance risk and tax burden, and ensure
                    compliance with all the different regulations. Our dedicated
                    state and local tax (SALT)professionals help businesses
                    identify opportunities for tax savings, manage state and
                    local tax burdens, stay up to date on evolving tax laws and
                    rules, and provide tailored and accurate solutions to meet
                    every business need. We offer customized SALT services to
                    handle unique SALT challenges faced by businesses and
                    recommend accurate and favorable tax solutions to help
                    businesses meet their objectives.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Pay Roll */}
      <div className="service2">
        <div
          className="serive_title flex justify-between items-center rounded-sm w-[70vw] h-[5vh] bg-slate-300 text-emerald-800 font-bold p-5 cursor-pointer"
          onClick={() => toggleService("Payroll")}
        >
          <h2>Pay Roll</h2>
          <FaChevronDown />
        </div>
        {expandedService === "Payroll" && (
          <div className="allsubservices">
            <div className="subservice subservice1">
              {expandedService === "Payroll" && (
                <div className="para rounded-sm w-[70vw] bg-slate-300 text-emerald-600 p-5">
                  <p>
                    We offer comprehensive Accounting and Bookkeeping Services
                    tailored to meet the unique needs of your business. Our
                    dedicated team ensures accurate financial records, timely
                    reporting, and adherence to regulatory standards. From
                    day-to-day transaction recording to financial statement
                    preparation, we handle it all with precision and
                    professionalism. Trust us to streamline your financial
                    processes, providing you with the insights needed to make
                    informed decisions and drive business growth. Let us take
                    care of your accounting needs, so you can focus on what you
                    do best – running your business.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* General Accounting */}
      <div className="service3">
        <div
          className="serive_title flex justify-between items-center rounded-sm w-[70vw] h-[5vh] bg-slate-300 text-emerald-800 font-bold p-5 cursor-pointer"
          onClick={() => toggleService("GeneralAccounting")}
        >
          <h2>General Accounting</h2>
          <FaChevronDown />
        </div>
        {expandedService === "GeneralAccounting" && (
          <div className="allsubservices">
            <div className="subservice subservice1">
              <div
                className="serive_subtitle flex justify-between items-center rounded-sm w-[70vw] h-[5vh] bg-slate-300 text-emerald-800 font-bold p-5 cursor-pointer"
                onClick={() => toggleSubservice("MonthlyAccountingServices")}
              >
                <h2>Monthly Accounting Services</h2>
                <FaChevronDown />
              </div>
              {expandedSubservice === "MonthlyAccountingServices" && (
                <div className="para rounded-sm w-[70vw] bg-slate-300 text-emerald-600 p-5">
                  <p>
                    We offer comprehensive Accounting and Bookkeeping Services
                    tailored to meet the unique needs of your business. Our
                    dedicated team ensures accurate financial records, timely
                    reporting, and adherence to regulatory standards. From
                    day-to-day transaction recording to financial statement
                    preparation, we handle it all with precision and
                    professionalism. Trust us to streamline your financial
                    processes, providing you with the insights needed to make
                    informed decisions and drive business growth. Let us take
                    care of your accounting needs, so you can focus on what you
                    do best – running your business.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;