"use client";

import Link from "next/link";
import React from "react";
import { HiExternalLink } from "react-icons/hi";


import Breadcrumb from "@/app/utils/Breadcrumb";
import ScrollButton from "../(buttons)/ScrollButton";




const Subhero = ({ img, head, subhead, title, link }) => {
  return (
    <section
      className="relative  h-[100vh] bg-cover bg-bottom"
      style={{
        backgroundImage: ` url(${img})`,
      }}
    >
      <header className="flex flex-col justify-center h-full px-8 md:px-20 text-left sm:items-center sm:text-center lg:items-start lg:text-left">
        <Breadcrumb />
        <h1 className="text-6xl sm:text-4xl lg:text-6xl font-bold w-8/12 leading-10 text-white mb-6">
          {head}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl lg:w-8/12 sm:w-full  text-gray-200 leading-relaxed mb-8">
          {subhead}
        </p>
        <Link href={link} className=" flex gap-4 items-center justify-between px-5 py-2 border border-white text-black hover:border-lightbg bg-white hover:bg-lightbg hover:text-white duration-300">{title} <HiExternalLink /></Link>
        <ScrollButton title='Expertise services' link='#expertise-services' />
      </header>
    </section>
  );
};

export default Subhero;
