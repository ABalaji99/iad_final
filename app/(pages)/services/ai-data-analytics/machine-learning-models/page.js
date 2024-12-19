
import machineLearningServices from "@/app/api/(services)/ai-data-analytics/machineLearningServices";
import whyChooseMachineLearning from "@/app/api/(services)/ai-data-analytics/whyChooseMachineLearning";
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
        head="Machine Learning Models"
        img="/images/banner/machine-banner.png"
        title="Our Services"
        link="#our-services"
      />

      <Supersubserv
        head="Our Services"
        subhead="Our Comprehensive Machine Learning Services"
        api={machineLearningServices}
      />
      <WhyChoose
        subhead="Why choose"
        head="iAppsData for Machine learning models"
        api={whyChooseMachineLearning}
      />
      <ServiceForm/>
    </section>
  );
}
