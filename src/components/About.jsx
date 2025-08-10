import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Focus on Solutions and Efficiency</h2>
          <p className="text-lg text-gray-400">
            For me, software engineering is about solving problems. I'm passionate about optimizing systems, automating processes, and ensuring every line of code delivers maximum value. My expertise includes:
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="font-bold text-accent">Backend</h3>
              <p className="text-sm text-gray-400">Go, Python, Node.js, REST & gRPC APIs</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="font-bold text-accent">DevOps</h3>
              <p className="text-sm text-gray-400">CI/CD, Docker, Kubernetes, Terraform</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg col-span-2 md:col-span-1">
              <h3 className="font-bold text-accent">Cloud</h3>
              <p className="text-sm text-gray-400">AWS, Google Cloud, Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;