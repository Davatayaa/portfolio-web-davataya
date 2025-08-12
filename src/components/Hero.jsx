import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Full-Stack & DevOps Engineer
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            I design and build resilient, efficient, and scalable digital infrastructure. From code to cloud, I transform complex ideas into reliable software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;