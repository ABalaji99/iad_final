
import aiConsumerInsightsWhyChoose from "@/app/api/(services)/ai-data-analytics/aiConsumerInsightsWhyChoose";
import consumerAnalyticsServices from "@/app/api/(services)/ai-data-analytics/consumerAnalyticsServices";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";

export default function page() {
  return (
    <section className=" ">
    
        <Subhero
       subhead="In a data-driven world, understanding your consumers is key to making informed decisions and staying ahead of the competition. At iAppsData, we offer AI-powered Consumer Insights solutions that uncover valuable patterns, enabling strategic business growth."
       head="AI Consumer Insights"
       img="/images/banner/ai-sub-1.png"
       title="AI Consumer Insights"
       link="#consumer-insights"
         />
    

      <Supersubserv
        head="AI-Powered Consumer Insights Solutions"
        subhead="Transform Data into Strategic Growth"
        api={consumerAnalyticsServices}
      />
      <WhyChoose
        head="Why Choose iAppsData for AI Consumer Insights?"
        subhead="Our Expertise in Consumer Analytics"
        api={aiConsumerInsightsWhyChoose}
      />
      <ServiceForm/>
    </section>
  );
}
