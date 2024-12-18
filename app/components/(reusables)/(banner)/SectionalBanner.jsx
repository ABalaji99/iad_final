import React from 'react';

export default function SectionalBanner({ backgroundImage, height = "50vh", children }) {
  return (
    <section
      className="relative bg-no-repeat bg-cover mx-20 flex items-center justify-center text-white group"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
      }}
      id="parallax-section"
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>

      {/* Content */}
      {children}

      {/* Hover Effect: Image Scaling */}
      <div className="absolute inset-0  transition-transform duration-500 ease-in-out"></div>
    </section>
  );
}
