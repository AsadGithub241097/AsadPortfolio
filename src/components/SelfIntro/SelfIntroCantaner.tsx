import React from "react";
import profileImg from "../../assets/testimg.png"; // Import the image
import Arrow from "../../icons//Arrow";
import woodTable from "../../assets/w2.jpg";
import SoftwareEngineerDesignation from "./designation";
const SoftwareEngineerProfile: React.FC = () => {
  return (
    <section className="bg-bgColor px-6 text-white">
      {" "}
      {/* //bg-bgColor */}
      {/* <img
        src="/pexels-captainsopon-3409734.jpg"
        alt="Background"
        className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
      /> */}
      <div className="flex flex-col items-center">
        <div className="flex max-h-[400px] flex-row gap-[50px] pt-[120px] text-center">
          <div className="flex items-center space-x-3">
            <img
              src={profileImg}
              alt="Profile"
              className="h-auto w-full max-w-[300px] rounded-full object-cover"
            />
          </div>
          <div className="relative right-[115px] flex flex-row text-left">
            <Arrow className="relative top-[-22px] flex" />
            <span className=" font-cursive text-[19px] text-gray-300">
              Hello! I Am{" "}
              <span className="font-cursive text-[19px] text-blue-400">
                Asad Mulla
              </span>
              <h2 className="font-roboto md:text-3xl">
                A Developer <br />
                <span className="relative">
                  Who Crafts Experiences Beyond the <br />
                  <span className="text-purple-500">&lt;Code/&gt;</span>
                </span>
              </h2>
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex w-full items-center justify-center rounded-lg border-2 border-sky-200 text-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"></div> */}
      <SoftwareEngineerDesignation />
    </section>
  );
};

export default SoftwareEngineerProfile;
