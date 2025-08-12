import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  // State untuk melacak visibilitas tombol
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menampilkan tombol jika user scroll lebih dari 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll kembali ke atas dengan mulus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Menambahkan dan menghapus event listener saat komponen mount dan unmount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Fungsi cleanup untuk menghapus event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Tombol hanya akan dirender jika isVisible bernilai true */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            bg-transparent 
            border-2 border-transparent 
            text-sky-400 
            p-3 
            rounded-full 
            hover:border-sky-400 
            active:border-sky-400 
            hover:shadow-lg 
            hover:shadow-sky-400/50 
            hover:scale-110
            focus:outline-none 
            focus:ring-2 
            focus:ring-offset-2 
            focus:ring-sky-400 
            transition-all 
            duration-300
          "          
          aria-label="Go to top"
        >
          {/* Ikon panah ke atas (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;