import React, { useState, useRef } from "react";
import gsap from "gsap";

interface WorkExperienceCardProps {
  title: string;
  description: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  title,
  description,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState<DOMRect | null>(null);

  const rotateToMouse = (e: MouseEvent) => {
    if (!bounds || !cardRef.current || !glowRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    // Using GSAP to animate card rotation and scaling
    gsap.to(cardRef.current, {
      scale: 1.07,
      rotationX: center.y / 10,
      rotationY: -center.x / 10,
      duration: 0.3,
      ease: "power3.out",
    });

    // Using GSAP to animate the glow effect
    gsap.to(glowRef.current, {
      backgroundImage: `radial-gradient(circle at ${
        center.x * 2 + bounds.width / 2
      }px ${center.y * 2 + bounds.height / 2}px, #ffffff55, #0000000f)`,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      setBounds(cardRef.current.getBoundingClientRect());
      document.addEventListener("mousemove", rotateToMouse);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current && glowRef.current) {
      document.removeEventListener("mousemove", rotateToMouse);

      // Resetting GSAP animation when mouse leaves
      gsap.to(cardRef.current, {
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(glowRef.current, {
        backgroundImage:
          "radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)",
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`z-1 h-auto rounded-lg bg-[rgb(118,60,172)] bg-[linear-gradient(24deg,_rgba(118,60,172,1)_0%,_rgba(18,4,32,1)_50%)] p-6 backdrop-blur-md transition-all duration-300 ease-out`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="mb-2 font-roboto text-xl font-bold text-white">{title}</h3>
      <p className="text-white">{description}</p>
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-full w-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)",
        }}
      />
    </div>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <div className="relative bg-bgColor px-[350px] py-[170px]">
      <h1 className="font-preahvihear mb-6 text-4xl font-normal leading-tight text-white">
        Work Experience
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <WorkExperienceCard
          title="CIB on the Mobile"
          description="CIB on the Mobile is a product that allows customers to manage their finances on the go."
        />
        <WorkExperienceCard
          title="Digital Payment App"
          description="A streamlined application for managing payments securely and conveniently."
        />
        <WorkExperienceCard
          title="Enterprise Solution"
          description="Providing robust solutions for enterprises to handle large-scale financial operations."
        />
        <WorkExperienceCard
          title="Personal Finance Tool"
          description="An innovative tool for personal finance management with cutting-edge analytics."
        />
      </div>
    </div>
  );
};

export default WorkExperience;
