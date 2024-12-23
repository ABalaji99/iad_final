
import Image from "next/image";
import React from "react";
import CaseStudiesPage from "../../insights/casestudies/page";
import KeyBenefits from "@/app/api/(services)/government-solutions/KeyBenefits";
import govtExpertise from "@/app/api/(services)/government-solutions/govtExpertise";
import SecHeader from "@/app/components/(reusables)/(headers)/SecHeader";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import Plainbtn from "@/app/components/(reusables)/(buttons)/Plainbtn";
import Card1 from "@/app/components/(reusables)/(cards)/Card1";
import Industriesweserve from "@/app/components/(reusables)/(sections)/Industriesweserve";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import whyChooseData from "@/app/api/(services)/government-solutions/whyChooseData";



export default function page() {
  return (
    <section className="">
      <Subhero
        img="/images/landinghero.jpg"
        link="/contact"
        title="Explore Our Services"
        head="Government Solutions"
        subhead="We understand the unique challenges faced by government agencies. From stringent regulations to enhanced transparency and security, we provide tailored solutions that streamline operations and drive cost savings."
      />

      <section className="md:py-32 md:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          <SecHeader
            head="We empower government agencies with secure, scalable solutions using advanced technologies to overcome complex challenges."
            subhead="Our Expertise in Government Solutions"
          />
          <Plainbtn link="/contact" title="Let's Discuss" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
          {govtExpertise.map((item, index) => (
            <Card1
              key={index}
              title={item.title}
              img={item.poster}
              head={item.title}
              subhead={item.description}
              className="flex flex-col items-center"
            />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 flex flex-col gap-20 md:py-32 md:px-20 lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-screen mb-8 lg:mb-0">
          <Image
            src="/images/benefits.jpg" // Replace with your image path
            alt="Government Solutions"
            width={10000}
            height={10000}
            className="w-full h-full hover:scale-105 transition-all ease-in-out duration-500 object-cover "
          />
        </div>

        {/* Right Side - Cards */}
        <div className="w-full lg:w-1/2 ">
          {/* Section Header */}

          <SecHeader
            subhead="Key Benefits"
            head="Empowering Government Agencies with Proven Benefits"
          />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {KeyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white hover:scale-105 transition-all ease-in-out duration-500 p-6 shadow-lg border border-black group hover:bg-lightbg hover:border-lightbg"
              >
                <h3 className="text-heading font-semibold mb-4 group-hover:text-white">
                  {benefit.title}
                </h3>
                <p className=" group-hover:text-white text-subText">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    <Industriesweserve />


      <WhyChoose subhead='Why Choose iAppsData?' head='Your Trusted Partner in Government Solutions' api={whyChooseData}/>
      <CaseStudiesPage filter="government" />

      
    </section>
  );
}
