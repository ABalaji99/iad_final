"use client";

import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import CTA from "../(reusables)/(buttons)/CTA";
import Image from "next/image";

// Dynamic Carousel Data
const carouselData = [
  {
    title: "iAppsData",
    description:
      "Embrace the power of digital transformation and unlock new opportunities.",
    image: "/images/all-services.png",
    link: "/services/iad.cloudsolutions",
    bgclr:'#023550',
  },
  {
    title: "Digital Transformation & Cloud Solutions",
    description: "Unlock new opportunities with digital transformation.",
    image: "/images/digi-service.png",
    link: "/services/iad.cloudsolutions",
    bgclr:'#1d222c',
  },
  {
    title: "Staffing",
    description:
      "Empowering businesses to lead with cutting-edge technologies.",
    image: "/images/staffing-service.png",
    link: "/services/iad.staffing",
    bgclr:'#193508',
  },
  {
    title: "US Healthcare RCM Services & Solutions",
    description:
      "Streamline revenue cycle management with expert solutions tailored for US healthcare providers.",
    image: "/images/health-service.png",
    link: "/services/iad.cloudsolutions",
    bgclr:'#2e1813',
  },
  {
    title: "AI & Data Analytics",
    description: "Effortlessly migrate to the cloud with our expert solutions.",
    image: "/images/ai-service.png",
    link: "/services/iad.ai-data",
    bgclr:'#3c4862',
  },
  {
    title: "Sustainability & Energy Solutions",
    description: "Lead with innovative sustainability and energy solutions.",
    image: "/images/sustain-service.png",
    link: "/services/iad.Sustainability-Energy-solutions",
    bgclr:'#044d55',
  },
  {
    title: "Government Solutions",
    description: "Transform government operations with tailored solutions.",
    image: "/images/govt-service.png",
    link: "/services/iad.government-solutions",
    bgclr:'#9e8b7d',
  },
  {
    title: "Cybersecurity & Data Privacy",
    description:
      "Protect your business with cutting-edge cybersecurity solutions and robust data privacy measures.",
    image: "/images/cyber-service.png",
    link: "/services/iad.cybersecurity",
    bgclr:'#6ca3c4',
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
      className="mySwiper h-screen "
      onSwiper={(swiper) => {
        slideRefs.current = swiper.slides; // Save Swiper slides to refs
      }}
    >
      {carouselData.map((item, index) => (
        <SwiperSlide key={index} data-hash={`slide${index + 1}`}>
          <div className="h-full flex justify-between items-center text-left pl-10 bg-cover bg-right " style={{backgroundColor:item.bgclr}}>
            {/* Left side: Text */}
            <div className="bg-opacity-75 text-white text-left p-6 max-w-xl w-1/2">
              <h1 className="text-white text-7xl font-semibold">{item.title}</h1>
              <p className="text-white">{item.description}</p>
              <CTA title="Check our Services" link={item.link} />
            </div>

            {/* Right side: Image */}
            <div className=" w-full h-full bg-cover bg-right" >
            <Image
            src={item.image}
            alt={item.title}
            width={100000000000}
            height={100000000000}
            className="w-full h-full object-contain"
            />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
