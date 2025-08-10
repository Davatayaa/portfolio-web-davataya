import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Perubahan ada di dalam return statement di bawah ini
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} bg-black/30 backdrop-blur-sm`}>
      {/* PERUBAHAN 1:
        - Kelas background (`bg-black/30`, `backdrop-blur-sm`) dipindahkan ke elemen <header> di atas.
        - `div` di bawah ini sekarang hanya berfungsi sebagai pembungkus konten yang rapi di tengah.
      */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Link "Davataya." ini tidak memiliki efek hover, sesuai permintaan */}
        <a href="#home" className="text-xl font-bold">Davataya.</a>

        <nav className="hidden md:flex items-center space-x-8">
          {/*
            PERUBAHAN 2:
            - Kelas `transform` dan `hover:-translate-y-0.5` ditambahkan untuk memberikan efek mengangkat saat di-hover.
            - `hover:text-accent` sudah ada dari sebelumnya untuk mengubah warna teks.
          */}
          <a href="#about" className="hover:text-accent transition-all transform hover:-translate-y-0.5">About</a>
          <a href="#projects" className="hover:text-accent transition-all transform hover:-translate-y-0.5">Project</a>
          <a href="#contact" className="hover:text-accent transition-all transform hover:-translate-y-0.5">Contact</a>
        </nav>

        {/* <a href="#contact" className="border border-accent text-accent font-semibold px-4 py-2 rounded-md 
        transition-all duration-300 
        hover:border-sky-300 hover:text-sky-300">
        Hubungi Saya
        </a> */}
        <a href="#contact" className="border border-sky-400  font-semibold px-4 py-2 rounded-md 
        transition-all duration-300 
        hover:scale-105 hover:shadow-lg hover:shadow-sky-400/40 hover:text-white">
        Contact me
        </a>
      </div>
    </header>
  );
};

export default Header;