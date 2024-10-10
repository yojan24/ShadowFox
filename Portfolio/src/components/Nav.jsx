import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdOutlineMenu } from "react-icons/md";
import MobileNav from "./MobileNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Nav() {
  const [isopen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("done");
    setIsOpen(!isopen);
  };
  useGSAP(() => {
    gsap.fromTo(
      ".nav-item",
      {
        opacity: 0,
        delay: 0.5,
      },
      {
        opacity: 1,
        delay: 0.5,
        stagger: 0.15,
        duration: 0.5,
      }
    );
  });
  return (
    <>
      <MobileNav isopen={isopen} toggleMenu={toggleMenu} />
      <header className="w-full  h-[10%] flex justify-between  items-center py-8">
        <div className=" ml-14 md:text-3xl sm:xl text-white nav-item name">
          Yojan
        </div>
        <ul className=" mr-14 lg:flex justify-center items-center  rounded-lg gap-10  hidden">
          <Link
            to="skill"
            className="text-2xl p-3 transition-all ease-in-out delay-75 hover:bg-[#ffffff] rounded-xl text-[#ffffffe7] hover:text-black cursor-pointer nav-item"
          >
            Skills
          </Link>
          <Link
            to="project"
            className="text-2xl  p-3 transition-all ease-in-out delay-75 hover:bg-[#FFFFFF] rounded-xl text-[#ffffffe7] hover:text-black cursor-pointer nav-item"
          >
            Projects
          </Link>
          <Link
            to="education"
            className="text-2xl  p-3 transition-all ease-in-out delay-75 hover:bg-[#FFFFFF] rounded-xl text-[#ffffffe7] hover:text-black cursor-pointer nav-item"
          >
            Education
          </Link>
          <Link
            to="contact"
            className="text-2xl  p-3 transition-all ease-in-out delay-75 hover:bg-[#FFFFFF] rounded-xl text-[#ffffffe7] hover:text-black cursor-pointer nav-item"
          >
            Contact
          </Link>
        </ul>
        <button
          className="flex justify-center items-center py-5 mx-4 w-14 hover:bg-[#a993fe] hover:text-black h-[5vh] rounded-md bg-black text-[#a993fe] lg:hidden"
          onClick={toggleMenu}
        >
          <MdOutlineMenu size={35} />
        </button>
      </header>
    </>
  );
}

export default Nav;
