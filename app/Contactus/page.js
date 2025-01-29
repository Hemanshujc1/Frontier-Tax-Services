"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Contactus.css";
import useWeb3Forms from "@web3forms/react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  //new lines

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  // 6f388c93-d671-4cac-ab73-5ab20aff678e
  const accessKey = "6f388c93-d671-4cac-ab73-5ab20aff678e";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Your Global TaX Buddy",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  // the end

  return (
    <>
    <Head>
        <title>Best CPA & Accounting Services | Your Global Tax Buddy</title>
        <meta name="description" content="Get in touch with our CPA firm for expert accounting and tax solutions. Whether you need tax planning, payroll management, or financial consulting, we’re here to help. Contact us today to schedule a consultation and take control of your finances." />
        <meta name="keywords" content="CPA services, accounting firm, tax preparation, payroll, business accounting" />
        <meta name="author" content="Your Global Tax Buddy" />
      </Head>
      <section className="relative h-screen flex flex-col overflow-x-hidden">
        <div className="flex h-[100%] contactpagecontainer">
          <div className="contacttextarea relative text-black w-[50%] text-center flex flex-col justify-center items-center gap-4 p-4">
            <div className="text mt-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Contact Our Team
              </h2>
              <p className="sectionpara pt-4 mt-4">
                Get in touch with us today to discover tailored accounting
                solutions that fit your business needs. Our expert team is
                dedicated to providing accurate, reliable, and efficient
                services to help you streamline your financial processes. Let us
                support you in achieving your business goals with professional
                care and attention
              </p>
            </div>
            <div className="socialmedia flex flex-col gap-4">
              <Link
                href="mailto:arpit.alice@gmail.com"
                className="flex gap-3 align-middle items-center justify-center"
              >
                <Image
                  src="/gmail.gif"
                  alt="Gmail"
                  width={34}
                  height={34}
                  className="rounded-[8px] cursor-pointer"
                  unoptimized
                />
                <p>arpit.alice@gmail.com</p>
              </Link>
              <Link
                href="mailto:arpit.alice@gmail.com"
                className="flex gap-3 align-middle items-center justify-center"
              >
                <Image
                  src="/Call.gif"
                  alt="call"
                  width={34}
                  height={34}
                  className="rounded-[8px] cursor-pointer"
                  unoptimized
                />
                <p>+91 1234567890</p>
              </Link>
            </div>
          </div>
          <div className="sept h-screen bg-[red] p-1"></div>

          <div className="section-2 flex justify-center w-[50%] items-center bg-black">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="contact-form relative flex text-center flex-col align-middle justify-center items-center gap-6">
                <div className="name flex gap-2">
                  <div className="firstname flex flex-col">
                    {errors.FirstName && (
                      <div className="error">{errors.FirstName.message}</div>
                    )}
                    <input
                      {...register("FirstName", {
                        required: "This field is required",
                        minLength: { value: 2, message: "Minimum length is 2" },
                        maxLength: {
                          value: 20,
                          message: "Maximum length is 20",
                        },
                      })}
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="lastname flex flex-col">
                    {errors.LastName && (
                      <div className="error">{errors.LastName.message}</div>
                    )}
                    <input
                      {...register("LastName", {
                        required: "This field is required",
                        minLength: { value: 2, message: "Minimum length is 2" },
                        maxLength: {
                          value: 20,
                          message: "Maximum length is 20",
                        },
                      })}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="contactdetails flex gap-2">
                  <div className="emailbox flex flex-col">
                    {errors.Email && (
                      <div className="error">{errors.Email.message}</div>
                    )}
                    <input
                      {...register("Email", {
                        required: "This field is required",
                      })}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="numberbox flex flex-col">
                    {errors.Number && (
                      <div className="error">{errors.Number.message}</div>
                    )}
                    <input
                      {...register("Number", {
                        required: "This field is required",
                        minLength: {
                          value: 10,
                          message: "Minimum length is 10",
                        },
                        maxLength: {
                          value: 14,
                          message: "Maximum length is 14",
                        },
                      })}
                      type="tel"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div className="subject flex flex-col">
                  {errors.Subject && (
                    <div className="error">{errors.Subject.message}</div>
                  )}
                  <input
                    {...register("Subject", {
                      required: "This field is required",
                      minLength: { value: 5, message: "Minimum length is 5" },
                      maxLength: { value: 50, message: "Maximum length is 50" },
                    })}
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="messagebox flex flex-col">
                  {errors.Message && (
                    <div className="error">{errors.Message.message}</div>
                  )}
                  <textarea
                    {...register("Message", {
                      required: "This field is required",
                      minLength: { value: 20, message: "Minimum length is 20" },
                      maxLength: {
                        value: 1000,
                        message: "Maximum length is 1000",
                      },
                    })}
                    id="Message"
                    placeholder="Message"
                    rows={4}
                  />
                </div>
                <div className="submit flex justify-center align-middle items-center gap-2">
                  <input type="submit" value="Message Us" />
                  <div>{result}</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
