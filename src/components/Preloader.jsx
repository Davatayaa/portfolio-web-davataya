import React, { useState, useEffect } from 'react';

// Komponen Preloader menerima 'children', yaitu semua konten aplikasi kita.
const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan waktu loading (misalnya 2 detik).
    // Anda bisa mengganti ini dengan logika loading data jika ada.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000 milidetik = 2 detik

    // Cleanup function untuk membersihkan timer
    return () => clearTimeout(timer);
  }, []); // [] berarti efek ini hanya berjalan sekali saat komponen mount

  // Selama isLoading true, tampilkan layar preloader.
  // Jika sudah false, tampilkan children (konten utama).
  return isLoading ? (
    <div className="fixed inset-0 bg-[#111111] flex flex-col justify-center items-center z-[100]">
      {/* Animasi Cincin Mengembang */}
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-sky-400 ring-animate"></div>
        <div className="absolute inset-0 rounded-full border-2 border-sky-400 ring-animate [animation-delay:0.5s]"></div>
      </div>
      {/* Teks Loading */}
      <p className="text-gray-400 animate-pulse">Loading...</p>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Preloader;