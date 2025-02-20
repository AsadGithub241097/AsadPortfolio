import { useEffect } from "react";
import gsap from "gsap";
import reactIcon from "../assets/react.png";

const ReactIcon = () => {
  useEffect(() => {
    // Animate the rotation of the reactIcon slowly
    gsap.to(".react-icon", {
      rotation: 360,
      duration: 10, // Rotate slowly over 10 seconds
      repeat: -1, // Infinite loop
      ease: "linear", // Continuous rotation
    });
  }, []);
  return (
    <div className="relative flex h-10 w-10 items-center justify-center ">
      <div className="absolute inset-0 rotate-6 transform rounded-full bg-gradient-to-b from-purple-600 to-blue-600 shadow-xl" />
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-b from-purple-500 to-blue-500 shadow-lg">
        <div className="flex items-center justify-center">
          <img
            className="react-icon flex h-[30px] w-[30px] justify-center"
            src={reactIcon}
            alt="React Icon"
          />
        </div>
      </div>
      <div className="absolute -right-2 -top-2 h-2 w-2 rounded-full bg-white opacity-50" />
      <div className="absolute -right-4 top-4 h-1.5 w-1.5 rounded-full bg-white opacity-30" />
      <div className="absolute -top-4 right-8 h-1 w-1 rounded-full bg-white opacity-20" />
    </div>
  );
};

export default ReactIcon;
