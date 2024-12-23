'use client';

import React, { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import CTA from '../(reusables)/(buttons)/CTA';

// Dynamic Carousel Data
const carouselData = [
  {
    title: 'iAppsData',
    description: 'Embrace the power of digital transformation and unlock new opportunities.',
    image: '/images/All-2.jpg',
    link: '/services/iad.cloudsolutions',
  },
  {
    title: 'Digital Transformation & Cloud Solutions',
    description: 'Unlock new opportunities with digital transformation.',
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
    description: 'Lead with innovative sustainability and energy solutions.',
    image: '/images/Sustainability-Energy-solutions.png',
    link: '/services/iad.Sustainability-Energy-solutions',
  },
  {
    title: 'Government Solutions',
    description: 'Transform government operations with tailored solutions.',
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

export default function Herosection() {
  const slideRefs = useRef([]); // Ref to store all slides

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000, // Delay in milliseconds between slides
        disableOnInteraction: false, // Keeps autoplay running after user interaction
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper h-screen px-20"
      onSwiper={(swiper) => {
        slideRefs.current = swiper.slides; // Save Swiper slides to refs
      }}
    >
      {carouselData.map((item, index) => (
        <SwiperSlide key={index} data-hash={`slide${index + 1}`}>
          <div
            className="h-full flex justify-start items-center text-left pl-10 bg-cover bg-right"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-opacity-75 p-6 max-w-xl" style={{ backgroundImage: "url('/images/text-bg.png')" }}>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{item.title}</h1>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <CTA title="Check our Services" link="/" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
