import { div } from "framer-motion/client";
import { Element } from "react-scroll";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Education() {
  useGSAP(() => {
    gsap.from(".education-heading", {
      opacity: 0,
      delay: 0.2,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".project-heading",
        scroller: "body",
        start: "top 90%",
      },
    });
    gsap.fromTo(
      ".education-list",
      {
        opacity: 0,
        delay: 0.2,
      },
      {
        opacity: 1,
        delay: 0.2,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".education-list",
          scroller: "body",
          start: "top 90%",
        },
      }
    );
  });
  return (
    <Element name="education">
      <div className="w-full min-h-[100vh] py-2 flex flex-col justify-center items-center ">
        <div className="text-[#ffffff] text-4xl mb-9 education-heading">
          Education
        </div>
        <div className=" md:w-[50%] w-[80%]">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
            <li className="mb-10 ms-6  ">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className=" education-list border-2 border-gray-500 p-2 rounded-lg text-[#ffffff] hover:text-black hover:bg-gradient-to-r  hover:from-[#ffffffa3] hover:to-[#ffffff40]  transition-all duration-300  ">
                <h3 className="flex items-center mb-1 text-lg font-semibold ">
                  Bachelors Of Computer Engineering{" "}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none  ">
                  2019-2023
                </time>
                <p className="mb-4 text-base font-normal   ">
                  I earned a Bachelor of Computer Engineering from Shivajirao S.
                  Jondhale College of Engineering, where I studied from August
                  2019 to July 2023, graduating with a CGPA of 8.28. During my
                  time at the college, I engaged in various projects and
                  coursework that enhanced my skills in areas such as data
                  structures, algorithms, and software engineering.
                </p>
              </div>
            </li>
            <li className="mb-10 ms-6 ">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="education-list border-2 border-gray-500 p-2 rounded-lg text-[#ffffff] hover:text-black hover:bg-gradient-to-r  hover:from-[#ffffffa3] hover:to-[#ffffff40]  transition-all duration-300 ">
                <h3 className="flex items-center mb-1 text-lg font-semibold   ">
                  HSC{" "}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none  ">
                  2018-2019
                </time>
                <p className="mb-4 text-base font-normal   ">
                  I completed my Higher Secondary Certificate (H.S.C.) at Sau.
                  Laxmibai Jr. College from August 2017 to April 2019, achieving
                  a percentage of 65%.
                </p>
              </div>
            </li>
            <li className="ms-6 ">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="education-list border-2 border-gray-500 p-2 rounded-lg text-[#ffffff] hover:text-black hover:bg-gradient-to-r  hover:from-[#ffffffa3] hover:to-[#ffffff40]  transition-all duration-300 ">
                <h3 className="flex items-center mb-1 text-lg font-semibold   ">
                  SSC{" "}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none  ">
                  2017
                </time>
                <p className="mb-4 text-base font-normal   ">
                  I completed my Secondary School Certificate (S.S.C.) from the
                  Indian Education Society in June 2017, achieving a percentage
                  of 75%.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Element>
  );
}

export default Education;
