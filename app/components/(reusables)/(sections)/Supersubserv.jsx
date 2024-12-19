import React from "react";
import SecHeader from "../(headers)/SecHeader";


export default function Supersubserv({ api, subhead, head }) {
  return (
    <section
      className="px-4 sm:px-8 lg:px-12 xl:px-20 py-12 
      bg-[#FAFAFA] bg-[url('/images/superservice-pattern.png')] 
      bg-cover bg-center bg-no-repeat"
    >
      {/* Section Header */}
      <SecHeader subhead={subhead} head={head} />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {api.map((item, index) => (
          <div
            key={item.id}
            className={`flex p-6 gap-4 group transition-transform duration-300 hover:scale-[1.01]
              ${index % 3 === 1 ? "border-l-2 border-r-2 border-[#38BDF8]" : ""}`}
          >
            {/* Icon Box */}
            <div className="px-5 py-5 h-max bg-[#38BDF8] flex items-center justify-center text-white text-2xl font-bold">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h3 className="text-[#101332] text-lg font-semibold mb-2 group-hover:text-[#2563EB]">
                {item.title}
              </h3>
              <p className="text-[#A4A7AE] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
