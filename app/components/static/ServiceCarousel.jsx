'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const carouselData = [
  {
    title: 'iAppsData',
    description: 'Embrace the power of digital transformation and unlock new opportunities.',
    image: '/images/All-2.jpg',
    link: '/services/iad.cloudsolutions',
  },
  {
    title: 'Digital Transformation & Cloud Solutions',
    description: 'Embrace the power of digital transformation and unlock new opportunities.',
    image: '/images/Digital-Transformation.png',
    link: '/services/iad.cloudsolutions',
  },
  {
    title: 'Staffing',
    description: 'Empowering businesses to lead with cutting-edge technologies.',
    image: '/images/Staffing-theme.png',
    link: '/services/iad.staffing',
  },
  {
    title: 'US Healthcare RCM Services & Solutions',
    description:
      'Streamline revenue cycle management with expert solutions tailored for US healthcare providers.',
    image: '/images/healthcare-theme.png',
    link: '/services/iad.cloudsolutions',
  },
  {
    title: 'AI & Data Analytics',
    description: 'Effortlessly migrate to the cloud with our expert solutions.',
    image: '/images/ai-data-theme.png',
    link: '/services/iad.ai-data',
  },
  {
    title: 'Sustainability & Energy Solutions',
    description: 'Empowering businesses to lead with cutting-edge technologies.',
    image: '/images/Sustainability-Energy-solutions.png',
    link: '/services/iad.Sustainability-Energy-solutions',
  },
  {
    title: 'Government Solutions',
    description: 'Empowering businesses to lead with cutting-edge technologies.',
    image: '/images/Government-Solutions.png',
    link: '/services/iad.government-solutions',
  },
  {
    title: 'Cybersecurity & Data Privacy',
    description:
      'Protect your business with cutting-edge cybersecurity solutions and robust data privacy measures.',
    image: '/images/Data-security.png',
    link: '/services/iad.cybersecurity',
  },
];

const AUTO_PLAY_INTERVAL = 10000;
const TRANSITION_DURATION = 700;

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const carouselRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
      gsap.timeline()
        .to(carouselRef.current, { opacity: 0, duration: 0.5 })
        .to(carouselRef.current, {
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          ease: 'power2.inOut',
        })
        .to(textRef.current, { opacity: 0, y: 50, duration: 0.5 })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
          ease: 'power2.out',
        })
        .call(() => setIsAnimating(false));
    }
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
      gsap.timeline()
        .to(carouselRef.current, { opacity: 0, duration: 0.5 })
        .to(carouselRef.current, {
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          ease: 'power2.inOut',
        })
        .to(textRef.current, { opacity: 0, y: 50, duration: 0.5 })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
          ease: 'power2.out',
        })
        .call(() => setIsAnimating(false));
    }
  }, [isAnimating]);

  const handleDotClick = useCallback(
    (index) => {
      if (index !== activeIndex && !isAnimating) {
        setIsAnimating(true);
        setActiveIndex(index);
        gsap.timeline()
          .to(carouselRef.current, { opacity: 0, duration: 0.5 })
          .to(carouselRef.current, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            ease: 'power2.inOut',
          })
          .to(textRef.current, { opacity: 0, y: 50, duration: 0.5 })
          .to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.5,
            ease: 'power2.out',
          })
          .call(() => setIsAnimating(false));
      }
    },
    [activeIndex, isAnimating]
  );

  useEffect(() => {
    timeoutRef.current = setInterval(handleNext, AUTO_PLAY_INTERVAL);
    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [handleNext]);

  return (
    <section
      ref={carouselRef}
      className="relative h-[80vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] bg-cover bg-center flex overflow-hidden"
      style={{
        backgroundImage: `url(${carouselData[activeIndex].image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: `background-image ${TRANSITION_DURATION}ms ease-in-out`,
      }}
    >
      {/* Content */}
      <div className="container mx-auto flex flex-col items-center justify-center lg:items-start relative z-10 px-4 sm:px-8 md:px-12 lg:px-16">
        <div
          ref={textRef}
          className={`w-full max-w-2xl text-left lg:text-left text-white transition-all duration-700 ease-in-out ${
            isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-tight mb-4">
            {carouselData[activeIndex].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            {carouselData[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black  p-2  z-10 hidden sm:block"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <span className="text-xl">&#10094;</span>
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black p-2  z-10 hidden sm:block"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <span className="text-xl">&#10095;</span>
      </button>

      {/* Navigation Dots (Indicators) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-4 z-10">
        {carouselData.map((_, index) => (
          <button
            ref={(el) => (dotsRef.current[index] = el)}
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-transform duration-300 ease-out rounded-full ${
              activeIndex === index
                ? 'bg-white w-6 h-6 sm:w-8 sm:h-8 scale-110'
                : 'bg-gray-400 w-4 h-4 sm:w-5 sm:h-5 opacity-50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
