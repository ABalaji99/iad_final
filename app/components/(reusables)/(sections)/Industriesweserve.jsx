import React from 'react';

import Image from 'next/image';
import govindustries from '@/app/api/(services)/staffing/govindustries';
import SecHeader from '../(headers)/SecHeader';


export default function Industriesweserve() {
  return (
    <section className="px-24 py-20">
      {/* Section Header */}
      <SecHeader
        subhead="Industries We Serve"
        head="Serving a Wide Range of Key Industries"
      />

      {/* List of Industries */}
      <div className="grid grid-cols-1 sm:grid-cols-4 ">
        {govindustries.map((industry) => (
          <div
            key={industry.id}
            className="shadow-lg hover:scale-105 transition-transform duration-500 relative group"
          >
            {/* Image */}
            <Image
              src={industry.image}
              alt={industry.title}
              width={200}
              height={200}
              className="object-cover w-full"
            />
            {/* Title Always Visible */}
            <h3 className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center font-semibold px-4 py-2 block">
              {industry.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
