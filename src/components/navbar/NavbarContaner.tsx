import React from "react";
import AMLogo from "../../icons/AMLogo";

interface NavbarProps {
  onAboutClick: () => void;
  onLabClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick, onLabClick }) => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="fixed top-0 z-10 flex w-full items-center justify-between bg-navBg px-4 backdrop-blur-md md:px-8">
        {/* mx-auto */}
        <div className="text-xl font-bold">
          <AMLogo height={60} width={90} />
          {/* <a href="#" onClick={onHomeClick}>
            Home
          </a> */}
        </div>
        <div className="space-x-4">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-gray-400"
            onClick={onAboutClick}
          >
            About
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-gray-400"
            onClick={onLabClick}
          >
            Lab
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
