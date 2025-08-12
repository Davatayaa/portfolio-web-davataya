import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//imager
import slider1 from '../../assets/backend_api_kost/slider1.png';

const sliderImages = [
  slider1, 
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", 
];

// Data untuk bagian fitur detail
const features = [
  {
    title: "Secure Authentication",
    description: "Implemented a robust authentication system using Google OAuth for social sign-in and JWTs for stateless session management, ensuring secure, role-based access for different users.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Efficient Data Management",
    description: "Designed a clean database schema in PostgreSQL and built comprehensive CRUD endpoints for managing tenants, rooms, and user data, including handling multi-image uploads for property listings.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop"
  }
];


const BackendApiKost = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efek untuk auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 4000); // Ganti gambar setiap 4 detik

    // Cleanup function untuk membersihkan timer saat komponen tidak lagi digunakan
    return () => clearInterval(timer);
  }, []);

  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <button 
        onClick={() => navigate("/")} 
        className="mb-8 font-semibold text-accent hover:underline"
      >
        &larr; Back to home
      </button>

      {/* --- HEADER PROYEK --- */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">RESTful API for Kost Management Panel</h1>
      </div>

      {/* --- IMAGE SLIDER --- */}
      <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 mb-12 rounded-lg overflow-hidden shadow-2xl">
        {sliderImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ))}
        {/* Navigasi Titik/Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* --- DESKRIPSI UTAMA & LINK GITHUB --- */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          This project is the backend foundation for the Alamanda Kost management system, engineered for performance, scalability, and maintainability. Originally a monolithic Python Flask application, it was completely refactored into a modern, decoupled RESTful API using Go and the Gin framework.
        </p>
        <a 
        href="https://github.com/Davatayaa/react-admin-frontend" // GANTI DENGAN LINK REPO ANDA
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block border border-sky-400 text-sky-400 font-bold py-3 px-8 rounded-md 
            hover:bg-sky-400 hover:text-gray-900 
            transition-all duration-300 transform hover:scale-105"
        >
        View on GitHub
        </a>
      </div>

      {/* --- BAGIAN FITUR DETAIL --- */}
      <div className="max-w-5xl mx-auto mt-20 md:mt-32 space-y-16">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
              <img src={feature.image} alt={feature.title} className="w-full h-auto object-cover rounded-lg shadow-lg" loading="lazy" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-accent mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackendApiKost; // Pastikan nama export sesuai