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
    <div className="relative flex items-center justify-between w-full h-[100vh] bg-primary text-white pt-36">
      {/* Left Side: Text */}
      <div className="flex-1 px-8">
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
      <div className="absolute top-0 right-0 w-[100%] h-[40%] sm:w-[60%] sm:h-[60%] transition-all ease-in-out">
        <Globe className="w-full h-full" />
      </div>
    </div>
  );
};

export default LandingHero;
