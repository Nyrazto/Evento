import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageCarousel = ({ eventName, handleRegister }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2d2b901f-cbdf-46ee-a2f4-b8bd29a6198b/20f1e06ff50ff74944c43dc7d511f6f5.jpg", caption: "Innovación sin Límites" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2d2b901f-cbdf-46ee-a2f4-b8bd29a6198b/c5dcb9a079cc7c01439f723ae5457b33.png", caption: "Soluciones Inteligentes" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2d2b901f-cbdf-46ee-a2f4-b8bd29a6198b/f8d475a3ca72fde20e7028b44baa86cb.png", caption: "Conectando el Mañana" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2d2b901f-cbdf-46ee-a2f4-b8bd29a6198b/ef135234a0197ee0f94f75cea706be52.jpg", caption: "Transformación Digital" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2d2b901f-cbdf-46ee-a2f4-b8bd29a6198b/fce43694176d2e82bfede392a6471282.png", caption: "Tecnología de Vanguardia" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2d2b901f-cbdf-46ee-a2f4-b8bd29a6198b/f5648af9e16997a5f759d9a71ab9a149.webp", caption: "El Futuro es Ahora" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-background">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={images[currentIndex].src} alt={images[currentIndex].caption} className="carousel-image rounded-lg" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <motion.div 
          className="text-center text-white p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{images[currentIndex].caption}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{eventName}: Forjando el Futuro Digital</p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-md"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Regístrate Ahora
          </Button>
        </motion.div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors">
        <ChevronLeft size={32} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors">
        <ChevronRight size={32} />
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};