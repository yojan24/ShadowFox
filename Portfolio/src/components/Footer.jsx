import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Footer() {
  useGSAP(() => {
    gsap.from(".roll-1", {
      opacity: 0,
      delay: 0.1,
      x: "-150%",
      rotate: -360,
      scrollTrigger: {
        trigger: ".roll-1",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".roll-2", {
      opacity: 0,
      delay: 0.1,
      x: "-100%",
      rotate: -360,
      scrollTrigger: {
        trigger: ".roll-2",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".roll-3", {
      opacity: 0,
      delay: 0.1,
      x: "100%",
      rotate: 360,
      scrollTrigger: {
        trigger: ".roll-3",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".roll-4", {
      opacity: 0,
      delay: 0.1,
      x: "150%",
      rotate: 360,
      scrollTrigger: {
        trigger: ".roll-4",
        scroller: "body",
        start: "top 95%",
      },
    });
  });
  return (
    <div className=" w-full h-[20vh] flex justify-center items-center gap-5 border-t border-gray-600 overflow-x-hidden">
      <div
        title="sakpalaniket44@gmail.com"
        className="rounded-full border-2 border-gray-300 aspect-square w-14 roll-1 "
      >
        <a href="mailto:pawadeyojan487@gmail.com" target="_blank">
          <img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail.png"
            className="p-2"
            alt=""
          />
        </a>
      </div>
      <div className="rounded-full border-2 border-gray-300 aspect-square w-14 roll-2">
        <a href="https://linkedin.com/in/yojan-pawade" target="_blank">
          <img
            src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png"
            className="p-2"
            alt=""
          />
        </a>
      </div>
      <div className="rounded-full border-2 border-gray-300 aspect-square w-14 roll-3">
        <a href="https://www.instagram.com/_yojan_24" target="_blank">
          <img
            src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png"
            className="p-2"
            alt=""
          />
        </a>
      </div>
      <div className="rounded-full border-2 border-gray-300 aspect-square w-14 roll-4">
        <a href="https://leetcode.com/u/Yojanpawade/" target="_blank">
          <img
            src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/100/FFFFFF/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-regular-tal-revivo.png"
            className="p-2 
            "
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
