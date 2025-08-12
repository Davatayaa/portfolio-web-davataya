import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Collaborate</h2>
          <p className="text-lg text-gray-400 mt-4 mb-8">
            Have an interesting project or idea? I'm always open to new opportunities and collaborations.
          </p>
          <a href="mailto:email@anda.com" className="text-2xl font-bold text-accent hover:underline">
            davaatayaa@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;