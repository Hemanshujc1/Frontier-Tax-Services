"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { submitAction } from "@/actions/Client";

const Page = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(resolve, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);
    await delay(2); // 2 seconds delay
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Email", data.Email);
    formData.append("Number", data.Number);
    formData.append("Subject", data.Subject);
    formData.append("Message", data.Message);

    await submitAction(formData);
    setLoading(false);
    reset();
  };

  return (
    <>
      <section className="section-1 relative h-screen flex flex-col items-center justify-center">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/video.mp4" type="video/mp4" />
            Unable to load the background
          </video>
        </div>
        <div className="text relative z-10 max-w-3xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Contact Our Team
          </h2>
        </div>
      </section>
      <div className="bg-white opacity-15 h-1"></div>
      <div className="section-2 h-[90vh] flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-form relative top-[-25%] flex text-center flex-col align-middle justify-center items-center font-bold gap-6 bg-[#00ffff35] rounded-[18px]">
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
            {errors.Name && (
              <div className="error">{errors.Name.message}</div>
            )}

            <input
              {...register("Email", {
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
                disabled={isSubmitting || loading}
                type="submit"
                value="Message Us"
                className=""
              />
              {loading && <div className="text-[#800017]">Submitting...</div>}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;