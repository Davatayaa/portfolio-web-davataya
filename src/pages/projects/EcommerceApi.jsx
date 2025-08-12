import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SistemMonitoring = () => {
  const navigate = useNavigate();

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

      {/* Konten custom untuk proyek ini */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Ecomerce API</h1>
      <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop" alt="Gambar Sistem Monitoring" className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" loading="lazy"/>
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nulla suscipit tempora libero aspernatur quidem exercitationem, ex tempore, dicta temporibus dolore ipsam nesciunt natus aut explicabo voluptatum. Eveniet, rerum quis!</p>
      </div>
    </div>
  );
};

export default SistemMonitoring;