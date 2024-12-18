import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ITserviceSection = ({ api, img }) => {
  if (!api) {
    return <p>Error: API data is missing or invalid.</p>;
  }

  return (
    <section className=" bg-white px-6 py-12 lg:py-24 lg:px-20 gap-10">
      {/* LEFT SIDE: Text Content */}
      <div className="w-full  space-y-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#101332] leading-snug">
          {api.title}
        </h2>
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{api.description}</p>


        <div className='flex justify-between items-center'>
          <div>
            {/* Key Features */}
            {api.keyFeatures && (
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#101332]">Key Features</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  {api.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advantages */}
            {api.advantages && (
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#101332]">Advantages</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  {api.advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* RIGHT SIDE: Image */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src={img}
              alt="Service Image"
              width={400}
              height={400}
              className="object-contain  h-full w-full"
            />
          </div>
        </div>



        {/* How It Works */}
        {api.howItWorks && (
          <div className="p-4 flex justify-between items-center bg-[#0A77AC] text-white ">
            <div>
            <h3 className="text-lg font-semibold mb-2">How It Works ?</h3>
            <p className="text-sm leading-relaxed  text-gray-50">{api.howItWorks}</p>
            </div>
          
            <Link href='#contact' className=' bg-white text-black px-12 py-4 w-max text-nowrap'>{api.ctaText}</Link>
          </div>
        )}

      </div>


    </section>
  );
};

ITserviceSection.propTypes = {
  api: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keyFeatures: PropTypes.arrayOf(PropTypes.string),
    advantages: PropTypes.arrayOf(PropTypes.string),
    howItWorks: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
  }).isRequired,
  img: PropTypes.string.isRequired,
};

export default ITserviceSection;
