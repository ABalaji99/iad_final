
import cyber_compliance from "@/app/api/(services)/cybersecurity-data-privacy/cyber_compliance";
import whyCompliance from "@/app/api/(services)/cybersecurity-data-privacy/whyCompliance";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";

export default function page() {
  return (
    <section className=" ">
      <Subhero
        subhead="Navigating the complex landscape of data protection regulations is essential for any organization that handles personal information. At iAppsData, we offer comprehensive Compliance Services to ensure that your organization adheres to regulations such as the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant data protection laws."
        head="Compliance Services (GDPR, CCPA, etc.)"
        img="/images/banner/compliance.png"
        title="Our Services"
        link="#our-services"
      />
      <Supersubserv
        head="Comprehensive Cybersecurity Compliance"
        subhead="Tailored Solutions for Your Compliance Needs"
        api={cyber_compliance}
      />
      <WhyChoose
        head=" iAppsData Compliance Services (GDPR, CCPA, etc.)?"
        subhead="Why Choose"
        api={whyCompliance}
      />
      <ServiceForm/>
    </section>
  );
}
