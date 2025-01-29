"use client";
import React, { useState, useEffect } from "react";
import "./Services.css";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";


export default function Services() {
  return (
    <div className="bg-gray-50 text-gray-800">
   
      <Head>
        <title>Best CPA & Accounting Services | Your Global Tax Buddy</title>
        <meta name="description" content="Explore our professional CPA services, including tax preparation, payroll processing, bookkeeping, accounts payable, and financial consulting. We provide customized solutions to streamline your business finances and ensure compliance. Partner with us for expert accounting support." />
        <meta name="keywords" content="CPA services, accounting firm, tax preparation, payroll, business accounting" />
        <meta name="author" content="Your Global Tax Buddy" />
      </Head>

      {/* Hero Section */}

      <section className="bg-black text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl font-bold mb-4">
            Your One-Stop Solution for Accounting and Tax Services
          </h1>
          <p className="text-lg mb-6">
            Expertly managing your finances so you can focus on growth. Explore
            our comprehensive range of services designed to meet your unique
            needs.
          </p>
          <Link href="/Contactus">
          <button className="buttons py-1 px-6">
          Get Started Now
          </button>
          </Link>
        </motion.div>
      </section>
      <div className="w-screen bg-white p-1"></div>

      {/* Services Section */}
      <section id="services1" className="py-16 ">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sectionheading"
          >
            Our Services
          </motion.h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* General Accounting */}
            <div className="transition-transform transform hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cards servicecards"
              >
                <h3 className="cardsheading mb-2">
                  General Accounting
                </h3>
                <p className="cardspara mb-4">
                  Stay ahead of your financials with our comprehensive monthly
                  accounting services. From tracking transactions to preparing
                  accurate financial statements, we ensure your books are always
                  in order.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Detailed Financial Reporting</li>
                  <li>Bank Reconciliations</li>
                  <li>General Ledger Management</li>
                  <li>Budgeting & Forecasting</li>
                </ul>
              </motion.div>
            </div>

            {/* Accounts Payable */}
            <div className="transition-transform transform hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cards servicecards"
              >
                <h3 className="cardsheading mb-2">
                  Accounts Payable
                </h3>
                <p className="cardspara mb-4">
                  Reduce manual work and maintain strong vendor relationships
                  with our efficient accounts payable services. We ensure
                  accurate, timely payments and keep you compliant with
                  financial obligations.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Invoice Processing & Verification</li>
                  <li>Payment Scheduling & Execution</li>
                  <li>Vendor Management</li>
                  <li>Expense Tracking</li>
                </ul>
              </motion.div>
            </div>
            {/* Accounts Receivable */}
            <div className="transition-transform transform hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cards servicecards"
              >
                <h3 className="cardsheading mb-2">
                  Accounts Receivable
                </h3>
                <p className="cardspara mb-4">
                  Maximize revenue collection and maintain healthy cash flow
                  with our accounts receivable services. We help you reduce
                  payment delays and manage customer invoicing seamlessly.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Customer Invoice Management</li>
                  <li>Payment Collection & Reconciliation</li>
                  <li>Aging Reports & Analysis</li>
                  <li>Credit Policy Monitoring</li>
                </ul>
              </motion.div>
            </div>
            {/* Tax Preparation */}
            <div className="transition-transform transform hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cards servicecards"
              >
                <h3 className="cardsheading mb-2">Tax Preparation</h3>
                <p className="cardspara mb-4">
                  Our tax preparation services simplify the complexities of tax
                  filing, ensuring compliance and minimizing liabilities.
                  Whether personal or business taxes, we’ve got you covered.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Personal Tax Preparation</li>
                  <li>Business Tax Preparation</li>
                  <li>State and Local Tax Compliance</li>
                </ul>
              </motion.div>
            </div>
            {/* Payroll Services */}
            <div className="transition-transform transform hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cards servicecards"
              >
                <h3 className="cardsheading mb-2">
                  Payroll Services
                </h3>
                <p className="cardspara mb-4">
                  Ensure timely, accurate payroll processing with our expert
                  services. From calculations to tax filings, we handle it all,
                  so you can focus on growing your team and business.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payroll Tax Filing & Compliance</li>
                  <li>Direct Deposit & Pay Stub Generation</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen bg-white p-1"></div>

      {/* Call to Action */}
      <section className="bg-black text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-6">
            Let us handle your finances so you can focus on achieving your
            goals. Contact us today to get started!
          </p>
          <Link
            href="/Contactus"
            className="buttons py-2 px-6"
          >
            <button>Request a Free Consultation</button>
          </Link>
        </motion.div>
      </section>
      <div className="w-screen bg-white p-1"></div>

      <section id="our-process" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sectionheading text-center mb-12"
          >
            Our Process: Simplifying Your Finances
          </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
  {/* Step 1 */}
  <div className="transition-transform transform hover:scale-105">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cards processcard min-h-[250px] flex flex-col justify-between"
    >
      <div>
        <div className="text-blue-600 text-4xl font-bold mb-4">1</div>
        <h3 className="cardsheading mb-2">Initial Consultation</h3>
        <p className="cardspara">We begin by understanding your unique requirements and goals.</p>
      </div>
    </motion.div>
  </div>
  {/* Step 2 */}
  <div className="transition-transform transform hover:scale-105">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cards processcard min-h-[250px] flex flex-col justify-between"
    >
      <div>
        <div className="text-blue-600 text-4xl font-bold mb-4">2</div>
        <h3 className="cardsheading mb-2">Custom Plan</h3>
        <p className="cardspara">Develop tailored strategies.</p>
      </div>
    </motion.div>
  </div>
  {/* Step 3 */}
  <div className="transition-transform transform hover:scale-105">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cards processcard min-h-[250px] flex flex-col justify-between"
    >
      <div>
        <div className="text-blue-600 text-4xl font-bold mb-4">3</div>
        <h3 className="cardsheading mb-2">Execution</h3>
        <p className="cardspara">Handle accounting, taxes, etc.</p>
      </div>
    </motion.div>
  </div>
  {/* Step 4 */}
  <div className="transition-transform transform hover:scale-105">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cards processcard min-h-[250px] flex flex-col justify-between"
    >
      <div>
        <div className="text-blue-600 text-4xl font-bold mb-4">4</div>
        <h3 className="cardsheading mb-2">Reporting</h3>
        <p className="cardspara">Share detailed, transparent insights.</p>
      </div>
    </motion.div>
  </div>
  {/* Step 5 */}
  <div className="transition-transform transform hover:scale-105">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cards processcard min-h-[250px] flex flex-col justify-between"
    >
      <div>
        <div className="text-blue-600 text-4xl font-bold mb-4">5</div>
        <h3 className="cardsheading mb-2">Ongoing Support</h3>
        <p className="cardspara">Regular updates and guidance.</p>
      </div>
    </motion.div>
  </div>
</div>
</div>
</section>

    </div>
  );
}
