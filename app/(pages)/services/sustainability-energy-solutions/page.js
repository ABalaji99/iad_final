

import energy from "@/app/api/(services)/sustainability-energy-solutions/energy";
import React from "react";
import CaseStudiesPage from "../../insights/casestudies/page";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import Subservices from "@/app/components/(reusables)/(sections)/SubServices";

export default function page() {
  return (
    <section>
      <Subhero
        img="/images/banner/sustainabilty-banner.png"
        link="/contact"
        title="Drive Positive Change with Sustainable Energy Solutions"
        head="Empower Your Business with Sustainable Energy Strategies"
        subhead="Transition to a greener future with innovative energy solutions that enhance efficiency, reduce environmental impact, and drive long-term value."
      />

      <Subservices
        apiData={energy}
        head="Whether you re just starting your cloud journey or looking to optimize your infrastructure, we offer cloud solutions that drive innovation and efficiency."
        subhead="Our Cloud Expertise"
        themeimg='/images/banner/sustainability-logo.png'
      />

      <CaseStudiesPage filter="sustainability" />

      <ServiceForm/>
    </section>
  );
}
