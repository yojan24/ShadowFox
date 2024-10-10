import React from "react";
import { Element } from "react-scroll";
import { Nav, Intro } from "../components/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    gsap.from(".home-animate", {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <Element name="home">
      <div className="min-h-[100vh] lg:h-screen py-2 ">
        <Nav />
        <Intro />
      </div>
    </Element>
  );
}

export default Home;
