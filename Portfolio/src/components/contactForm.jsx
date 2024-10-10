import React from "react";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Footer from "./Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const submit = async (data) => {
    const formData = {
      ...data,
      access_key: "8f936699-2c99-4132-844f-39026085f814",
    };
    const json = JSON.stringify(formData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent",
        icon: "success",
      }).then(() => {
        reset();
      });
    }
  };
  useGSAP(() => {
    gsap.from(".contact-heading", {
      opacity: 0,
      delay: 0.2,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact-heading",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".contact-form", {
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact-form",
        scroller: "body",
        start: "top 95%",
      },
    });
  });
  return (
    <Element name="contact">
      <div className="w-full flex flex-col justify-center items-center min-h-[100vh] contact-form ">
        <p className="text-3xl text-white mt-8 contact-heading">
          Let's Connect
        </p>
        <form
          className="flex flex-col w-full justify-center items-center h-[70vh] contact-form"
          onSubmit={handleSubmit(submit)}
        >
          <input
            className="w-2/5 p-3 m-1 border-none  focus:ring-1 outline-none md:text-lg text-md focus:border-b-2  bg-gray-200"
            type="text"
            placeholder=" Full Name"
            {...register("name", { required: true })}
          />
          <input
            className="w-2/5 p-3 m-1 border-none  focus:ring-1 outline-none md:text-lg text-md focus:border-b-2  bg-gray-200"
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="w-2/5 p-3 m-1 border-none  focus:ring-1 outline-none md:text-lg text-md focus:border-b-2  bg-gray-200"
            type="text"
            placeholder="Phone No."
            {...register("number", { required: true })}
          />
          <textarea
            className="w-2/5 p-3 m-1 border-none  focus:ring-1 outline-none md:text-lg text-md focus:border-b-2  bg-gray-200"
            rows={5}
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className="bg-new-color md:w-[10%] p-3 mt-2 bg-c rounded-full focus:ring-2 text-[#ffffffe7] focus:bg-blue-600 transition ease-in-out focus:translate-y-[0.1rem]"
          >
            Send
          </button>
        </form>
        <Footer />
      </div>
    </Element>
  );
}

export default ContactForm;
