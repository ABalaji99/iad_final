'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <section className=" text-center w-full lg:py-32 px-28 h-screen">
      {/* Full-screen Image Background using Image component */}
      <Image
        src="/images/404.png" // Replace with your image path
        alt="Not Found"
        objectFit="cover"
        width={1000}
        height={1000} // Ensures the image covers the entire screen
        className="w-full h-full object-contain"
      />

      <h2 >Sorry for the inconvenience we couldn&apost find this page in <Link className=' text-Darkbg' href='/'>iAppsData</Link> universe </h2>
      <p>if you have any queries or enquiry please reach out on <Link className=' text-Darkbg' href={"mailto:"}>temp@mail.com</Link></p>
    </section>
  );
};

export default page;
