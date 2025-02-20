import React from "react";
import Navbar from "./NavbarContaner.tsx";

const TopNavbar: React.FC = () => {
  const handleAboutClick = () => {
    console.log("Navigating to About");
    // Add navigation logic or functionality here
  };

  const handleLabClick = () => {
    console.log("Navigating to Lab");
    // Add navigation logic or functionality here
  };

  return (
    <div>
      <Navbar onAboutClick={handleAboutClick} onLabClick={handleLabClick} />
      {/* Rest of your application */}
    </div>
  );
};

export default TopNavbar;
