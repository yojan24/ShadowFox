import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const technologies = [
  { name: "HTML", src: "https://img.icons8.com/color/48/html-5--v1.png" },
  { name: "Tailwind", src: "https://img.icons8.com/color/48/tailwind_css.png" },
  { name: "JS", src: "https://img.icons8.com/color/48/javascript--v1.png" },
  { name: "React", src: "https://img.icons8.com/plasticine/100/react.png" },
  { name: "Node", src: "https://img.icons8.com/fluency/48/node-js.png" },
  { name: "MongoDB", src: "https://img.icons8.com/color/48/mongodb.png" },
];

export default function BouncyImagePushAnimation() {
  const controls = technologies.map(() => useAnimation());
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const animateSequence = async () => {
      const pushDistance = 30; // pixels

      for (
        let i = direction > 0 ? 0 : technologies.length - 1;
        direction > 0 ? i < technologies.length - 1 : i > 0;
        i += direction
      ) {
        // Push current image
        await controls[i].start({
          x: `${direction * pushDistance}px`,
          transition: { duration: 0.1, ease: "easeInOut" },
        });

        // Bounce back current image and push next image
        await Promise.all([
          controls[i].start({
            x: "0px",
            transition: { type: "spring", stiffness: 500, damping: 25 },
          }),
          controls[i + direction].start({
            x: `${direction * pushDistance}px`,
            transition: { type: "spring", stiffness: 500, damping: 25 },
          }),
        ]);

        // Bounce back next image
        await controls[i + direction].start({
          x: "0px",
          transition: { type: "spring", stiffness: 500, damping: 25 },
        });

        // Small pause for visual clarity
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      setDirection((prev) => -prev);
    };

    animateSequence();
  }, [direction]);

  return (
    <div className="lg:w-[80%] w-[100%] flex items-center justify-center mt-7  ">
      <div
        ref={containerRef}
        className="flex gap-0 justify-between items-center lg:w-full w-[80%] max-w-2xl "
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="relative w-14 h-16 "
            animate={controls[index]}
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="rounded-lg shadow-md h-9 w-9 "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
