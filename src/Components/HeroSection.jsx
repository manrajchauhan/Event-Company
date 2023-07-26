import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from './animationData.json';

const HeroSection = () => {
  const [randomShadowColor, setRandomShadowColor] = useState('rgba(0, 0, 0, 0.3)');

  const handleRandomColor = () => {
    const randomColorValue = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomShadowColor(randomColorValue);
  };

  useEffect(() => {
    const interval = setInterval(handleRandomColor, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">

      <div className="lottie-animation-container flex items-center justify-center overflow-hidden ">
        <Lottie animationData={animationData} loop autoplay style={{ width: '400px', height: '400px',marginTop:'-90px' }} />
      </div>
      <div className="header-content text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 " style={{marginTop:'-20px' }}> Imagine. Plan. Achieve.</h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-10">
          Unleashing the Art of Events: Where Imagination Meets Precision
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-white text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-md hover:bg-blue-100 transition-colors duration-300">
            View Events
          </button>
          <button
            className="bg-black border border-white text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-colors duration-300"
            style={{
              boxShadow: `0 4px 8px ${randomShadowColor}, 0 0 8px ${randomShadowColor}`,
            }}
          >
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
