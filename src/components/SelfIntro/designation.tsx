import React from "react";

const SoftwareEngineerDesignation: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-[100px] pb-0 pt-[100px]">
      {/* Title Section */}
      <div className="-left-[300px] flex flex-row items-start">
        <span className="md:text-30xl text-center font-roboto text-[50px] leading-[90px] tracking-[0.02em]">
          I'm a Software Engineer
        </span>
      </div>

      {/* Company Section */}
      <div className="pt-1">
        <span className="flex justify-center">
          Currently, I'm a Software Engineer at{" "}
          <a
            href="https://www.jio.com/platforms/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500 hover:underline"
          >
            Jio
          </a>
        </span>
        <div className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          <span className="font-roboto text-sm md:text-base">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineerDesignation;
