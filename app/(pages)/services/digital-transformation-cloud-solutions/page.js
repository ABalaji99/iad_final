




import React from "react";
import CaseStudiesPage from "../../insights/casestudies/page";
import digitalCloud from "@/app/api/(services)/digital-transformation-cloud-solutions/digitalCloud";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import Subservices from "@/app/components/(reusables)/(sections)/SubServices";

export default function page() {
  return (
    <section>
      <Subhero
        img="/images/banner/dc-banner.png"
        link="/contact"
        title="Have Questions? We're Ready!"
        head="Transform Your Business with Digital Cloud Solutions"
        subhead="Seamlessly migrate, manage, and scale your business with cutting-edge digital cloud technologies designed for your needs."
      />

      <Subservices
        apiData={digitalCloud}
        head="Whether you re just starting your cloud journey or looking to optimize your infrastructure, we offer cloud solutions that drive innovation and efficiency."
        subhead="Our Cloud Expertise"
        themeimg='/images/banner/cloud.png'
      />

      <CaseStudiesPage filter="cloud" />
      <ServiceForm/>
    </section>
  );
}
