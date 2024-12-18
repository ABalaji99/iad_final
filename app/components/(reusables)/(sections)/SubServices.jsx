"use client";

import Image from "next/image";
import SecHeader from "./SecHeader";
import Link from "next/link";

// The component now accepts apiData as a prop
const Subservices = ({ apiData, head, subhead, themeimg }) => {
  return (
    <section id="card-section" className="w-full px-4 py-16 md:px-10 lg:px-20 text-white">
      <SecHeader head={head} subhead={subhead} />

      {/* Cards */}
      <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apiData.map((card) => (
          <Link
            href={card.link}
            key={card.id}
            className="group transition-all ease-in-out duration-300 relative"
          >
            {/* Card Container */}
            <div className="h-44 w-full relative">
              {/* Number Area */}
              <span className="block group-hover:hidden font-bold text-[#0A77AC] text-9xl absolute -bottom-16 -z-10">
                {card.number}
              </span>

              {/* Hover Image */}
              <div className="hidden group-hover:block absolute w-full -bottom-16 left-1/2 transform -translate-x-1/2 bg-Darkbg  transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:z-10 group-hover:bottom-0">
                <Image
                  src={themeimg}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="rounded-md  object-cover -top-7 relative transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* Text Content (Title, Description, Link) */}
            <div className="bg-[#F5F5F5] border border-Darkbg group-hover:border-Darkbg p-4 group-hover:bg-Darkbg transition-all duration-300">
              {/* Title */}
              <h3 className="text-2xl group-hover:text-white text-heading font-medium">
                {card.title}
              </h3>

              {/* Description */}
              <p className="my-4 text-base group-hover:text-gray-100 text-Para">
                {card.description}
              </p>

              {/* CTA Button */}
              <button className="border bg-Darkbg px-6 py-2 text-white transition-colors duration-300 hover:bg-[#0A77AC]">
                {card.cta}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Subservices;
