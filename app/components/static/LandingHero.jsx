'use client';

import { useState, useEffect } from 'react';
import { Globe } from '../(reusables)/(banner)/Globe';

const LandingHero = () => {
  const slides = [
    {
      id: 1,
      heading: "Empower Your Business",
      description: "Innovative solutions to accelerate your digital journey.",
      buttonText: "Learn More",
      buttonLink: "/services",
    },
    {
      id: 2,
      heading: "Future-Ready Solutions",
      description: "Tailored technologies for a seamless experience.",
      buttonText: "Explore Now",
      buttonLink: "/about",
    },
    {
      id: 3,
      heading: "Achieve Excellence",
      description: "We help you redefine success with cutting-edge services.",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative flex items-center justify-between px-8 md:px-20 w-full h-[750px] bg-primary text-white pt-26">
      {/* Left Side: Text */}
      <div >
        <h1
          key={activeSlide}
          className="text-3xl md:text-5xl font-bold mb-4 transition-opacity duration-500 opacity-100"
        >
          {slides[activeSlide].heading}
        </h1>
        <p
          key={`desc-${activeSlide}`}
          className="text-md md:text-lg mb-6 transition-opacity duration-500"
        >
          {slides[activeSlide].description}
        </p>
        <a
          href={slides[activeSlide].buttonLink}
          className="px-6 py-3 bg-white text-black font-semibold transition"
        >
          {slides[activeSlide].buttonText}
        </a>
      </div>

      {/* Right Side: Globe */}
     
        <Globe />
     
    </div>
  );
};

export default LandingHero;
