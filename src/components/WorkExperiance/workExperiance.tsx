import React, { useState, useRef, useEffect } from "react";
import ReactIcon from "../../icons/reactIcon";

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
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at ${center.x * 2 + bounds.width / 2}px 
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
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
      cardRef.current.style.transform = "";
      glowRef.current.style.background = "";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`z-1 h-auto rounded-lg border-[1px] bg-[radial-gradient(circle,_#763CAC_10%,_#0F0420_60%)] p-6 backdrop-blur-md
        transition-all duration-300 ease-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactIcon />
      <h3 className="mb-2 font-roboto text-xl font-bold text-white">{title}</h3>
      <p className="text-white">{description}</p>
      <div
        ref={glowRef}
        className="m-w-[120px] absolute left-0 top-0 h-full rounded-[10px]"
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
    <div className="relative bg-bgColor px-[200px] py-[170px]">
      <h1 className="font-preahvihear mb-6 text-4xl font-normal leading-tight text-white">
        Work Experience
      </h1>
      <div className="grid grid-cols-2 gap-[40px]">
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
