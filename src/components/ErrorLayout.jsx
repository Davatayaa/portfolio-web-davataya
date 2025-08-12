import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ThreeBackground from './ThreeBackground';
import BackToTopButton from './BackToTopButton';

// Layout ini khusus untuk halaman yang tidak memerlukan Header
const ErrorLayout = () => {
  return (
    <>
      <ThreeBackground />
      <div className="relative z-10">
        <main className="pt-20"> {/* Padding atas tetap ada agar konten tidak menempel di atas */}
          <Outlet /> {/* Di sini konten halaman (seperti NotFound) akan muncul */}
        </main>
        <Footer />
      </div>
      <BackToTopButton />
    </>
  );
};

export default ErrorLayout;