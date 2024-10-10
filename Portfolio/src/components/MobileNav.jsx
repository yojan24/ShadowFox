import React from "react";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
function MobileNav({ isopen, toggleMenu }) {
  return (
    isopen && (
      <div className="fixed right-0">
        <ul className="flex flex-col bg-violet-600 h-[50vh] w-50 z-50 items-center">
          <li className="self-end py-4 mr-7">
            <IoMdClose size={35} onClick={toggleMenu} />
          </li>
          <Link
            to="skill"
            className="w-full text-center  text-2xl py-2  px-7  hover:bg-[#ffffff] text-[#ffffffe7] hover:text-black cursor-pointer"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="project"
            className="w-full text-center text-2xl  py-2  px-7 hover:bg-[#FFFFFF] text-[#ffffffe7] hover:text-black cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="education"
            className="w-full text-center text-2xl  py-2 px-7  hover:bg-[#FFFFFF] text-[#ffffffe7] hover:text-black cursor-pointer"
            onClick={toggleMenu}
          >
            Education
          </Link>
          <Link
            to="contact"
            className="w-full text-center text-2xl  py-2 px-7  hover:bg-[#FFFFFF] text-[#ffffffe7] hover:text-black cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </ul>
      </div>
    )
  );
}

export default MobileNav;
