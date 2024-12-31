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

      <section className=" md:flex sm:block md:justify-between md:items-center  mb-40" >
        <Image
          className=" w-full h-screen"
          width={100}
          height={100}
          src="/images/gloabl.png"
          alt="global"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {KeyBenefits.map((item, index) => (
            <article key={index}>
              <Image
                src={item.img}
                alt="global"
                width={1000}
                height={1000}
                className=" w-20 h-20"
              />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Industriesweserve />

      <WhyChoose
        subhead="Why Choose iAppsData?"
        head="Your Trusted Partner in Government Solutions"
        api={whyChooseData}
      />
      <CaseStudiesPage filter="government" />
    </section>
  );
}
