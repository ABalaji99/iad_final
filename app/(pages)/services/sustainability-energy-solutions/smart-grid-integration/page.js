
import smartGridTechnologyIntegrationServices from "@/app/api/(services)/sustainability-energy-solutions/smartGridTechnologyIntegrationServices";
import smartGridWhyChoose from "@/app/api/(services)/sustainability-energy-solutions/smartGridWhyChoose";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";

export default function page() {
  return (
    <section className=" ">
      <Subhero
        subhead="As the energy landscape evolves, the need for efficient, reliable, and sustainable energy management systems has never been greater. At iAppsData, we specialize in Smart Grid Technology Integration, helping organizations harness advanced technologies to optimize energy management and enhance distribution efficiency for a sustainable energy future."
        head="Smart Grid Technology Integration"
        img="/images/banner/sustain.png"
        title="Smart Grid Technology Integration"
        link="#smart-grid"
      />
      <Supersubserv
        head="Optimize Energy Distribution with Smart Grid Solutions"
        subhead="Advanced Integration for a Sustainable Energy Future"
        api={smartGridTechnologyIntegrationServices}
      />
      <WhyChoose
        head="Why Choose iAppsData for Smart Grid Technology Integration?"
        subhead="Innovative Solutions for Efficient Energy Management"
        api={smartGridWhyChoose}
      />
      <ServiceForm/>
    </section>
  );
}
