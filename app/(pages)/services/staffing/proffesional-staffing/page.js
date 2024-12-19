

import professionalStaffingServices from "@/app/api/(services)/staffing/proffesionalstaffing/professionalStaffingServices";
import professionalStaffingWhyChoose from "@/app/api/(services)/staffing/proffesionalstaffing/professionalStaffingWhyChoose";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Industriesweserve from "@/app/components/(reusables)/(sections)/Industriesweserve";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";

export default function page() {
  return (
    <section className=" ">
      <Subhero
        subhead="Enhance your workforce with top-tier professional talent that drives business success. At iAppsData, we connect you with experts tailored to meet your organizational needs."
        head="Professional Staffing"
        img="/images/banner/permanent-staffing.png"
        title="Professional Staffing Services"
        link="#professional-staffing"
      />
      <Supersubserv
        head="Expert Professional Staffing Solutions"
        subhead="Delivering Talent to Drive Excellence"
        api={professionalStaffingServices} // API for professional staffing services
      />
      <Industriesweserve/>
      <WhyChoose
        head="Why Choose iAppsData for Professional Staffing?"
        subhead="Your Trusted Partner in Workforce Solutions"
        api={professionalStaffingWhyChoose} // API for Why Choose content
      />
      <ServiceForm/>
    </section>
  );
}
