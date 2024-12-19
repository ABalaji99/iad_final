
import greenEnergyConsultancyServices from "@/app/api/(services)/sustainability-energy-solutions/greenEnergyConsultancyServices";
import greenEnergyWhyChoose from "@/app/api/(services)/sustainability-energy-solutions/greenEnergyWhyChoose";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";



export default function page() {
  return (
    <section className=" ">
      <Subhero
        subhead="In today’s rapidly evolving energy landscape, adopting sustainable energy solutions is not only good for the environment but also crucial for long-term business success. At iAppsData, we offer expert consultancy and project management services to guide your organization through the adoption and integration of green energy practices."
        head="Green Energy Consultancy & Project Management"
        img="/images/banner/sustain.png"
        title="Green Energy Consultancy & Project Management"
        link="#green-energy"
      />
      <Supersubserv
        head="Sustainable Energy Practices"
        subhead="Guiding Your Organization Toward a Greener Future"
        api={greenEnergyConsultancyServices}
      />
      <WhyChoose
        head="Why Choose iAppsData for Green Energy Consultancy?"
        subhead="Our Expertise in Sustainable Energy Solutions"
        api={greenEnergyWhyChoose}
      />
     <ServiceForm/>
    </section>
  );
}
