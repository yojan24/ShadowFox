import React from "react";
import { Element } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Project() {
  useGSAP(() => {
    gsap.from(".project-heading", {
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      y: "30%",
      scrollTrigger: {
        trigger: ".project-heading",
        scroller: "body",
        start: "top 90%",
      },
    });

    gsap.from(".card-1", {
      duration: 1,
      opacity: 0,
      x: "-100%",
      scrollTrigger: {
        trigger: ".card-1",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
    gsap.from(".card-2", {
      duration: 1,
      opacity: 0,
      x: "100%",
      scrollTrigger: {
        trigger: ".card-2",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
    gsap.from(".card-3", {
      duration: 1,
      opacity: 0,
      x: "-100%",
      scrollTrigger: {
        trigger: ".card-3",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
    gsap.from(".card-4", {
      duration: 1,
      opacity: 0,
      x: "100%",
      scrollTrigger: {
        trigger: ".card-4",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
  });
  return (
    <Element name="project">
      <div
        id="project"
        className="min-h-[100vh] flex flex-col justify-around pb-8 overflow-x-hidden "
      >
        <div className="py-8 md:py-14 w-full flex justify-center items-center ">
          <h1 className="text-4xl font text-white section-heading project-heading">
            Projects
          </h1>
        </div>
        <div className=" w-full  flex justify-center items-center project-animate ">
          <div className="mx-4 sm:mx-16 w-full grid md:grid-cols-2 gap-6 justify-center items-center">
            <div className="flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2 card-1">
              <div>
                <img src="BLOG.png" alt="" />
              </div>
              <div>
                <p className="text-xl text-white py-2 font-bold">
                  Blog Website
                </p>
                <p className="text-white">
                  Fully functional blog website built using the MERN stack. It
                  features user authentication, allowing users to create
                  accounts, log in, and manage their posts. The website includes
                  functionalities for creating, editing, and deleting blog
                  entries. The responsive design ensures a seamless user
                  experience across devices. This project showcases my ability
                  to develop dynamic web applications and implement RESTful
                  APIs, demonstrating a solid understanding of full-stack
                  development.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2 card-2 ">
              <div>
                <img src="tiny_url.png" alt="" />
              </div>
              <div>
                <p className="text-xl text-white py-2 font-bold">Tiny URL</p>
                <p className="text-white">
                  Dashboard website created using the MERN stack and Google
                  Charts. It visualizes key data insights, including "Sales by
                  Region" through bar graphs and pie charts, and "Customer
                  Feedback by Products" using bar charts and stacked column
                  charts. The interactive filter functionality allows users to
                  customize their view enhancing usability and analysis. This
                  project highlights my skills in data visualization and
                  full-stack development to create dynamic and user-centric web
                  applications.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2 card-3">
              <div>
                <img src="weather.png" alt="" />
              </div>
              <div>
                <p className="text-xl py-2 text-white font-bold">
                  Weather Website
                </p>
                <p className="text-white">
                  Weather application built with React that provides real-time
                  weather updates based on the user's location. Utilizing Axios
                  for API calls to the OpenWeatherMap API, the app fetches and
                  displays detailed weather data, including temperature,
                  humidity etc. The intuitive interface allows users to easily
                  input their location and receive accurate weather information.
                  This project showcases my proficiency in React and API
                  integration, highlighting my ability to create responsive and
                  user-friendly applications.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-around rounded-lg border border-gray-600 gap-4 p-2 card-4">
              <div>
                <img src="Todo.png" alt="" />
              </div>
              <div>
                <p className="text-xl text-white py-2 font-bold">
                  Todo Website
                </p>
                <p className="text-white">
                  Todo website developed using React, featuring a simple and
                  intuitive interface for task management. Users can easily add,
                  delete, and mark tasks as complete, enhancing their
                  productivity. I implemented Redux for state management,
                  ensuring a smooth and efficient user experience as the
                  application scales. This project demonstrates my ability to
                  create responsive web applications and effectively manage
                  state in complex UIs, showcasing my skills in React and modern
                  web development practices.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mx-4 md:mx-44 pt-5">
          <div className="py-4">
            <div className="border-2 mt-5">
              <div className="md:flex gap-4">
                <div className="md:w-1/2 lg:w-2/6 overflow-y-hidden flex justify-center items-center  shadow-lg">
                  <img
                    src="blog.png"
                    alt=""
                    className="h-full w-full object-fill rounded-md"
                  />
                </div>
                <div className="md:w-1/2 lg:w-4/6 py-4  px-4">
                  <p className="pt-2 text-3xl">
                    35 Candlestick Chart Patterns in the Stock Market Explained
                  </p>

                  <p className="py-2 text-gray-700">
                    Did you know we can visually analyse whether the Bulls or
                    the Bears are winning? Candlestick patterns help us see the
                    price movements of any stock on the charts. Candlesticks
                    tell a comprehensive story, with the body and wicks of each
                    candlestick revealing whether the bulls or bears are in
                    control. <br /> Additionally, they provide key data such as
                    the opening and closing prices, as well as the highest and
                    lowest prices reached over a given period (day, week, or
                    month). It is important for any technical analyst in the
                    stock market to understand the interpretation of candlestick
                    chart patterns. By recognizing these patterns, they can make
                    informed decisions about future price movements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="border-2 mt-5">
              <div className="md:flex gap-4">
                <div className="md:w-1/2 lg:w-3/6 overflow-y-hidden flex justify-center items-center  shadow-lg">
                  <img
                    src="dashboard.png"
                    alt=""
                    className="h-full w-full object-fill rounded-md"
                  />
                </div>
                <div className="md:w-1/2 lg:w-3/6 py-4  px-4">
                  <p className="pt-2 text-3xl">
                    Integrating Psychology into Software Development
                  </p>
                  <p className="py-2 text-gray-700">
                    Imagine sitting down at your desk to untangle a particularly
                    complex piece of software code. Your eyes scan lines packed
                    with logical operations and function calls. Somewhere in
                    this intricate weave, a bug lurks, derailing the
                    application’s performance. This scenario, familiar to many
                    developers, isn’t just a test of technical skill; it’s a
                    psychological challenge. The frustration and cognitive
                    fatigue that often accompany such tasks can cloud judgment
                    and prolong resolution. It’s in moments like these that the
                    intersection of psychology and software development comes
                    into sharp focus.
                    <br />
                    Cognitive load theory, originally applied to educational
                    psychology, has profound implications for
                    <span className="cursor-pointer text-blue-700">
                      read more
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </Element>
  );
}

export default Project;
