import Image from 'next/image';
import React from 'react';

export default function Card1({ img, title, head, subhead }) {
  return (
    <div className="bg-white hover:bg-lightbg transition-all ease-in-out hover:scale-105 p-4 sm:p-6 md:p-8 hover:border-lightbg shadow-lg hover:shadow-xl duration-600 border border-black group overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          width={1000}
          height={1000}
          alt={title}
          src={img}
          className="w-full h-full object-contain bg-lightbg group-hover:bg-white"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-4 sm:p-6 md:p-8 text-left">
        <h2 className="text-sm sm:text-base md:text-lg group-hover:text-white font-semibold text-gray-800 mb-2">{head}</h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-white leading-relaxed">{subhead}</p>
      </div>
    </div>
  );
}
