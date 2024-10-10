import { img } from "framer-motion/client";
import { Element } from "react-scroll";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Skills() {
  const frontEnd = [
    { name: "HTML", src: "https://img.icons8.com/color/48/html-5--v1.png" },
    { name: "CSS", src: "https://img.icons8.com/color/48/css3.png" },
    {
      name: "Tailwind",
      src: "https://img.icons8.com/color/48/tailwind_css.png",
    },
    {
      name: "JavaScript",
      src: "https://img.icons8.com/color/48/javascript--v1.png",
    },
    { name: "React", src: "https://img.icons8.com/plasticine/100/react.png" },
  ];

  const Backend = [
    { name: "Node", src: "https://img.icons8.com/fluency/48/node-js.png" },
    {
      name: "Express",
      src: "https://img.icons8.com/ios/50/FFFFFF/express-js.png",
    },
    {
      name: "AppWrite",
      src: "https://w7.pngwing.com/pngs/772/393/png-transparent-appwrite-logo-sticker-tech-companies.png",
    },
  ];

  const dataBase = [
    { name: "MongoDB", src: "https://img.icons8.com/color/48/mongodb.png" },
    {
      name: "PostgreSQL",
      src: "https://img.icons8.com/color/48/postgreesql.png",
    },
  ];

  const programming = [
    { name: "C", src: "https://img.icons8.com/fluency/48/c-programming.png" },
    {
      name: "C++",
      src: "https://img.icons8.com/fluency/48/c-plus-plus-logo.png",
    },
    { name: "Python", src: "https://img.icons8.com/color/50/python.png" },
  ];
  useGSAP(() => {
    gsap.from(".skills-heading", {
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      y: "30%",
      scrollTrigger: {
        trigger: ".project-heading",
        scroller: "body",
        start: "top 90%",
      },
    });

    gsap.from(".skill-1", {
      duration: 1,
      opacity: 0,
      x: "-100%",
      scrollTrigger: {
        trigger: ".skill-1",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        once: true,
      },
    });
    gsap.from(".skill-2", {
      duration: 1,
      opacity: 0,
      x: "100%",
      scrollTrigger: {
        trigger: ".skill-2",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",

        once: true,
      },
    });
    gsap.from(".skill-3", {
      duration: 1,
      opacity: 0,
      x: "-100%",
      scrollTrigger: {
        trigger: ".skill-3",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",

        once: true,
      },
    });
    gsap.from(".skill-4", {
      duration: 1,
      opacity: 0,
      x: "100%",
      scrollTrigger: {
        trigger: ".skill-4",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",

        once: true,
      },
    });
  });
  return (
    <Element name="skill">
      <div
        id="skills"
        className="w-full min-h-[100vh] flex flex-col justify-center items-center overflow-x-hidden  py-2"
      >
        <p className="text-[#ffffff] text-4xl mb-8 skills-heading">Skills</p>
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="w-[50%] flex flex-col border-2  rounded-xl skill-1 ">
            <p className="text-white text-xl text-center">FrontEnd:</p>
            <div className="flex justify-center flex-wrap">
              {frontEnd.map((el, i) => (
                <div
                  className="p-5 mx-3 flex flex-col justify-center items-center "
                  key={i}
                >
                  <img src={el.src} className="h-20 w-15" alt={el.name} />
                  <p className="md:text-xl text-md text-white">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] flex flex-col py-2 my-4 border-2  rounded-xl skill-2 ">
            <p className="text-white text-xl text-center">Backend:</p>
            <div className="flex justify-center  flex-wrap">
              {Backend.map((el, i) => (
                <div
                  className="p-5 mx-3 flex flex-col justify-center items-center "
                  key={i}
                >
                  <img src={el.src} className="h-20 w-15" alt={el.name} />
                  <p className="md:text-xl text-md text-white">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] flex flex-col border-2  rounded-xl skill-3 ">
            <p className="text-white text-xl text-center">Database:</p>
            <div className="flex justify-center flex-wrap">
              {dataBase.map((el, i) => (
                <div
                  className="p-5  md:mx-3  mx- flex flex-col justify-center items-center "
                  key={i}
                >
                  <img src={el.src} className="h-20 w-15" alt={el.name} />
                  <p className="md:text-xl text-md text-white">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] flex flex-col border-2  rounded-xl mt-4 skill-4 ">
            <p className="text-white text-xl text-center">Programming:</p>
            <div className="flex justify-center flex-wrap">
              {programming.map((el, i) => (
                <div
                  className="p-5  md:mx-3  mx- flex flex-col justify-center items-center "
                  key={i}
                >
                  <img src={el.src} className="h-20 w-15" alt={el.name} />
                  <p className="md:text-xl text-md text-white">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
