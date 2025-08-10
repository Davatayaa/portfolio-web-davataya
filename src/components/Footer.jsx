import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border-dark">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Davataya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;