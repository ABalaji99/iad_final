

import { dataWarehousingServices } from "@/app/api/(services)/ai-data-analytics/dataWarehousingServices";
import { dataWarehousingWhyChoose } from "@/app/api/(services)/ai-data-analytics/dataWarehousingWhyChoose";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Supersubserv from "@/app/components/(reusables)/(sections)/Supersubserv";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";
import React from "react";

export default function page() {
  return (
    <section className=" ">
      <Subhero
        subhead="In today’s data-driven world, making informed decisions quickly is essential. At iAppsData, we specialize in Data Warehousing and Business Intelligence Solutions, empowering organizations with real-time insights and analytics to drive strategic decisions and operational excellence."
        head="Our Services"
        img="/images/banner/data-warehouse-banner.png"
        title="Data Warehousing & BI Solutions"
        link="#our-services"
      />
      <Supersubserv
        head="Data Warehousing and BI Services"
        subhead="Empowering Strategic Decisions Through Real-Time Insights"
        api={dataWarehousingServices}
      />
      <WhyChoose
        head="Why iAppsData for Data Warehousing & BI Solutions?"
        subhead="Why Choose Us"
        api={dataWarehousingWhyChoose}
      />
      <ServiceForm/>
    </section>
  );
}
