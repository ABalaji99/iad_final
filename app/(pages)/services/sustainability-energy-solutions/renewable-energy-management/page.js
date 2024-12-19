
import renewableEnergyManagementSystemsServices from "@/app/api/(services)/sustainability-energy-solutions/renewableEnergyManagementSystemsServices";
import renewableEnergyWhyChoose from "@/app/api/(services)/sustainability-energy-solutions/renewableEnergyWhyChoose";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";



export default function page() {
  return (
    <section className=" ">
    <Subhero
      subhead="As the global focus shifts towards sustainable energy practices, optimizing the use of renewable energy sources is key to achieving your organization’s sustainability goals. At iAppsData, we specialize in developing Renewable Energy Management Systems that monitor, control, and optimize renewable energy utilization, helping you achieve long-term energy efficiency and environmental stewardship."
      head="Renewable Energy Management Systems"
      img="/images/banner/sustain.png"
      title="Renewable Energy Management Systems"
      link="#renewable-energy"
    />
    <Supersubserv
      head="Optimize Your Renewable Energy Usage"
      subhead="Innovative Systems to Enhance Sustainability"
      api={renewableEnergyManagementSystemsServices}
    />
    <WhyChoose
      head="Why Choose iAppsData for Renewable Energy Management?"
      subhead="Smart Solutions for Sustainable Energy"
      api={renewableEnergyWhyChoose}
    />
   <ServiceForm/>
  </section>
  );
}
