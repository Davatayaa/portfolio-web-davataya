import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import BackToTopButton from './components/BackToTopButton';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <Preloader>
        <ThreeBackground />
        <div className="relative z-10">
          <Header />
          {/* Outlet adalah tempat konten halaman akan dirender */}
          <main className="pt-20">
            <Outlet /> 
          </main>
          <Footer />
        </div>
        <BackToTopButton />
      </Preloader>
    </>
  );
}

export default App;