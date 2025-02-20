import React from 'react';
import Navbar from './NavbarContaner.tsx';

const TopNavbar: React.FC = () => {
  // Handlers for Navbar actions
  const handleHomeClick = () => {
    console.log('Navigating to Home');
    // Add navigation logic or functionality here
  };

  const handleAboutClick = () => {
    console.log('Navigating to About');
    // Add navigation logic or functionality here
  };

  const handleLabClick = () => {
    console.log('Navigating to Lab');
    // Add navigation logic or functionality here
  };

  return (
    <div>
      <Navbar
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onLabClick={handleLabClick}
      />
      {/* Rest of your application */}
     
    </div>
  );
};

export default TopNavbar;
