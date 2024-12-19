
import cybersecurityRiskAssessment from "@/app/api/(services)/cybersecurity-data-privacy/cybersecurity_risk_assessment";
import whyCybersecurityRiskAssessment from "@/app/api/(services)/cybersecurity-data-privacy/whyCybersecurityRiskAssessment ";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";

export default function page() {
  return (
    <section>
      <Subhero
        subhead="In an increasingly digital world, safeguarding your organization from cyber threats is paramount. At iAppsData, we specialize in Cybersecurity Risk Assessment and Management, providing comprehensive services designed to identify vulnerabilities and implement effective risk management strategies that protect your business and ensure operational continuity."
        head="Cybersecurity Risk Assessment and Management"
        img="/images/banner/Risk-Assessment.png"
        title="Our Services"
        link="#our-services"
      />
      <Supersubserv
        head="Comprehensive Cybersecurity Risk Assessment"
        subhead="Identifying and Mitigating Cyber Risks to Safeguard Your Organization"
        api={cybersecurityRiskAssessment}
      />
      <WhyChoose
        head=" iAppsData Compliance Services (GDPR, CCPA, etc.)?"
        subhead="Why Choose"
        api={whyCybersecurityRiskAssessment}
      />
     <ServiceForm/>
    </section>
  );
}
