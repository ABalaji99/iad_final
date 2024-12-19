
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
        subhead="In today’s fast-evolving digital landscape, businesses increasingly rely on cloud technology to enhance operational efficiency, scalability, and security. At iAppsData, we offer Cloud Migration & Management Services designed to seamlessly transition your business to the cloud while maintaining continuity."
        head="Cloud Migration & Management Services"
        img="/images/banner/cloud-migration.png"
        title="Our Services"
        link="#our-services"
      />
      <Supersubserv
        head="Seamless Cloud Transformation"
        subhead="Our Approach to Streamlining Your Cloud Journey"
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
