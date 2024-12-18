import React from "react";
import SecHeader from "../(headers)/SecHeader";


 
export default function WhyChoose({head , subhead , api}) {
  return (
    <section className="py-16 px-4 md:py-32 md:px-20 bg-white">
      {/* Section Header */}
      <SecHeader
        subhead={subhead}
        head={head}
      />

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {api.map((item) => (
          <div
            key={item.id}
            className="bg-white hover:scale-105 transition-transform duration-500 p-6  border border-border group hover:bg-lightbg hover:border-lightbg"
          >
            <h3 className="text-heading font-semibold mb-4 group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-subText group-hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
