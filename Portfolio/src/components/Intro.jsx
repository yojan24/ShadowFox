import React from "react";
import pdf from "../../public/Resume.pdf";
import BouncyImagePushAnimation from "./BounceImg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Intro() {
   useGSAP(() => {
    gsap.from(".home-animate", {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div className="flex justify-center items-center  w-full h-full home-animate">
      <div className="w-full flex flex-col lg:flex-row mx-auto justify-around items-center">
        <div className="text-white md:text-2xl  text-lg lg:order-first order-last flex flex-col justify-center  md:mt-0 mt-3 items-center">
          <div className="flex flex-col md:justify-start lg:items-start items-center justify-center">
            <p className="py-1">👋 Hey, There !</p>
            <p className="md:text-6xl text-3xl py-2">I'm Yojan Pawade</p>
            <p className="py-1">Software Developer</p>
          </div>
          <div className=" w-full sm:block flex md:self-start self-center justify-center items-center ">
            <BouncyImagePushAnimation />
          </div>
          <a
            href={pdf}
            download="Yojan_Pawade.pdf"
            className="bg-new-color text-white lg:self-start py-2 px-8 rounded-lg relative z-10 focus:ring-2 focus:ring-blue-700 sm:self-center mb-1"
          >
            Resume
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img src="photo.jpg" className="w-3/4 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
