"use client";

import Link from "next/link";
import React from "react";
import { DiDigitalOcean } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { ImPower } from "react-icons/im";
import { SiSpringsecurity } from "react-icons/si";
import { RiGovernmentLine } from "react-icons/ri";
import { PiHospitalLight } from "react-icons/pi";
import CTA from "../(buttons)/CTA";
import SecHeader from "../(headers)/SecHeader";




const cardData = [
  {
    id: 1,
    heading: "Digital Transformation & Cloud Solutions",
    description: "Transform your business with cutting-edge cloud solutions.",
    image: <DiDigitalOcean size={60} />,
    link: "/services/cloudsolutions",
    cta: "Get Started",
  },
  {
    id: 2,
    heading: "AI & Data Analytics",
    description: "Uncover insights with AI and advanced analytics.",
    image: <GiArtificialIntelligence size={60} />,
    link: "/services/ai-data",
    cta: "Discover AI",
  },
  {
    id: 3,
    heading: "Staffing Solutions",
    description: "Empower your team with global staffing expertise.",
    image: <IoIosPeople size={60} />,
    link: "/services/staffing",
    cta: "Hire Experts",
  },
  {
    id: 4,
    heading: "Sustainability & Energy Solutions",
    description: "Innovative solutions for a sustainable future.",
    image: <ImPower size={60} />,
    link: "/services/sustainable-energy",
    cta: "Go Green",
  },
  {
    id: 5,
    heading: "Cybersecurity & Data Privacy",
    description: "Stay secure with our advanced cybersecurity services.",
    image: <SiSpringsecurity size={60} />,
    link: "/services/data-cybersecurity",
    cta: "Stay Secure",
  },
  {
    id: 6,
    heading: "US Healthcare RCM Solutions & Services",
    description: "Revolutionizing healthcare with smart IT solutions.",
    image: <PiHospitalLight size={60} />,
    link: "/services/healthcare",
    cta: "Explore Now",
  },
  {
    id: 7,
    heading: "Government Solutions",
    description: "Smart solutions for governance and public services.",
    image: <RiGovernmentLine size={60} />,
    link: "/services/government-solutions",
    cta: "Learn More",
  },
];

const ServiceCard = ({ card }) => (
  <Link
    href={card.link}
    className="hover:bg-service flex flex-col transition-all duration-700 justify-start p-cardPadding bg-white shadow-lg hover:shadow-xl flex-grow group relative overflow-hidden hover:scale-105"
  >
    <div className="text-Darkbg group-hover:text-black">{card.image}</div>
    <div className="group-hover:text-white text-heading mt-4 leading-he font-semibold transition-colors">
      {card.heading}
    </div>
    <p className=" hidden group-hover:black group-hover:text-white">{card.description}</p>
    {/* <CTA title={card.cta}  link={card.link}/> */}
  </Link>
);

export default function MainSerrvices() {
  return (
    <section
    className="p-secPadding bg-texture bg-white"
    id="services"
  >
  
  
      <div className="container mx-auto">
        {/* Header Section */}
        <SecHeader subhead='Tailored Solutions to Meet Your Needs' head='Services That Empower Growth and Innovation'/>

        {/* Three Equal Height Columns */}
        <div className="flex gap-8 items-stretch">
          {/* First Column */}
          <div className="flex flex-col gap-6 w-1/3">
            {cardData.slice(0, 2).map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-6 w-1/3">
            {cardData.slice(2, 5).map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-6 w-1/3">
            {cardData.slice(5, 7).map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
