"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Contactus.css";
import useWeb3Forms from "@web3forms/react";

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
      from_name: "Frontier Tax Services",
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
      <section className="section-1 relative h-[150vh] flex flex-col items-center justify-center">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-[0.2] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/video.mp4" type="video/mp4" />
            Unable to load the background
          </video>
        </div>
        <div className="relative hello overflow-hidden z-10 max-w-3xl text-center px-4 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-11 text-black">
            Contact Our Team
          </h2>
      <div className="section-2 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-form relative flex text-center flex-col align-middle justify-center items-center font-bold gap-6 bg-[blanchedalmond] rounded-[18px]">
            <h1 className="text-black text-xl ">Have a general question?</h1>
            <h2 className="text-[#628000] text-xl">
              Fill out this form to speak with a member of our team.
            </h2>
            <input
              {...register("Name", {
                required: "This field is required",
                minLength: { value: 2, message: "Minimum length is 2" },
                maxLength: { value: 50, message: "Maximum length is 50" },
              })}
              type="text"
              placeholder="Name"
            />
            {errors.Name && <div className="error">{errors.Name.message}</div>}

            <input
              {...register("email", {
                required: "This field is required",
              })}
              type="email"
              placeholder="Email"
            />
            {errors.Email && (
              <div className="error">{errors.Email.message}</div>
            )}

            <input
              {...register("Number", {
                required: "This field is required",
                minLength: { value: 10, message: "Minimum length is 10" },
                maxLength: { value: 14, message: "Maximum length is 14" },
              })}
              type="tel"
              placeholder="Mobile Number"
            />
            {errors.Number && (
              <div className="error">{errors.Number.message}</div>
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
            {errors.Subject && (
              <div className="error">{errors.Subject.message}</div>
            )}
            <textarea
              {...register("Message", {
                required: "This field is required",
                minLength: { value: 20, message: "Minimum length is 20" },
                maxLength: { value: 1000, message: "Maximum length is 1000" },
              })}
              id="Message"
              placeholder="Message"
              rows={4}
            />
            {errors.Message && (
              <div className="error">{errors.Message.message}</div>
            )}
            <div className="submit flex justify-center align-middle items-center gap-2">
              <input
                type="submit"
                value="Message Us"
                className=""
              />        
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
