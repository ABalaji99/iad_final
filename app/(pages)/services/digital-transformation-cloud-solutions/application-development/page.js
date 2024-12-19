
import cloudMigrationServices from "@/app/api/(services)/digital-transformation-cloud-solutions/cloudMigrationServices";
import whyCloudMigration from "@/app/api/(services)/digital-transformation-cloud-solutions/whyCloudMigration";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";


import React from "react";

export default function page() {
  return (
    <section className=" ">
      <Subhero
        subhead="In a rapidly changing business landscape, having the right software solutions is crucial to maintaining a competitive edge. At iAppsData, we specialize in Custom Application Development, creating tailored software solutions that meet your unique business requirements. Our goal is to enhance operational efficiency, improve user experience, and drive innovation within your organization."
        head="Custom Application Development"
        img="/images/banner/cloud-application.png"
        title="Our Services"
        link="#our-services"
      />
      <Supersubserv
        head="Tailored Solutions with Custom Application Development"
        subhead="Our Approach to Crafting Innovative, Client-Specific Applications"
        api={cloudMigrationServices}
      
      />
      <WhyChoose
        head=" iAppsData Compliance Services (GDPR, CCPA, etc.)?"
        subhead="Why Choose"
        api={whyCloudMigration}
      />
      <ServiceForm/>
    </section>
  );
}
