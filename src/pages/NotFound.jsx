import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link untuk navigasi

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-8xl font-extrabold text-accent">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or may have moved.
      </p><br></br>
      <Link 
        to="/" 
        className="border border-sky-400  font-semibold px-4 py-2 rounded-md 
        transition-all duration-300 
        hover:scale-105 hover:shadow-lg hover:shadow-sky-400/40 hover:text-white"
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;