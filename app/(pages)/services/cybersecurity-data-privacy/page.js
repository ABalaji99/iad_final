
import Cybersecuritysub from "@/app/api/(services)/cybersecurity-data-privacy/Cybersecuritysub";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Subservices from "@/app/components/(reusables)/(sections)/SubServices";
import React from "react";
import CaseStudiesPage from "../../insights/casestudies/page";

export default function page() {
  return (
    <section>
      <Subhero
        img="/images/banner/cyber-banner.png"
        link="/contact"
        title="Protect Your Business with Cybersecurity & Data Privacy"
        head="Fortify Your Business with Leading Cybersecurity Solutions"
        subhead="Ensure your company's safety with robust data protection, secure cloud services, and compliance-driven solutions designed to keep your business secure and your data private."
      />

      <Subservices
        apiData={Cybersecuritysub}
        head="Protect your business from evolving threats with our advanced cybersecurity solutions."
        subhead="Our Cybersecurity Expertise"
        themeimg='/images/banner/cloud.png'
      />

      <CaseStudiesPage filter="cybersecurity" />
      <ServiceForm/>
    </section>
  );
}
