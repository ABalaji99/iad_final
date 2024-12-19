
import data_privacy from "@/app/api/(services)/cybersecurity-data-privacy/data_privacy";
import whyCompliance from "@/app/api/(services)/cybersecurity-data-privacy/whyCompliance";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";

export default function page() {
  return (
    <section>
      <Subhero
        subhead="In today s data-driven landscape, protecting sensitive information is crucial for maintaining trust and compliance with regulatory requirements. At iAppsData, we specialize in developing and executing tailored Data Privacy Strategies that safeguard your organization s valuable data while ensuring compliance with applicable regulations."
        head="Data Privacy Strategy and Implementation"
        img="/images/banner/data-privacy-strategy.png"
        title="Our Services"
        link="#our-services"
      />
      <Supersubserv
        head="Comprehensive Data Privacy Solutions"
        subhead="Protecting Your Data with Tailored Privacy Strategies"
        api={data_privacy}
      />
      <WhyChoose
        head=" iAppsData Data Privacy Strategy and Implementation?"
        subhead="Why Choose"
        api={whyCompliance}
      />
      <ServiceForm />
    </section>
  );
}
