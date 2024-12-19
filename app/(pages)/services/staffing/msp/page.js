


import mspStaffingData from "@/app/api/(services)/staffing/msp/mspStaffingData";
import whyChooseMSPData from "@/app/api/(services)/staffing/msp/whyChooseMSPData";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";



export default function page() {
  return (
    <section className=" ">
    <Subhero
      subhead="Delivering top-tier Managed Service Provider staffing solutions to empower your business with unmatched expertise and support."
      head="MSP Staffing Services"
      img="/images/banner/msp.png"
      title="MSP Staffing Services"
      link="#msp-staffing"
    />
    <Supersubserv
      head="Tailored MSP Staffing Solutions"
      subhead="Empowering Your Business with the Right Talent"
      api={mspStaffingData}
    />
    <WhyChoose
      head="Why Choose iAppsData for MSP Staffing?"
      subhead="Partnering for Excellence in Managed Services"
      api={whyChooseMSPData}
    />
    <ServiceForm/>
  </section>
  );
}
