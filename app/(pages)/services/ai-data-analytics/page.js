// app/services/ai-data/page.js (or your respective page)

export const metadata = {
    title: "AI & Data Analytics Services | iAppsData - Leading in Innovation",
    description:
      "iAppsData's AI & Data Analytics solutions empower your business to stay ahead in a competitive market. Leverage cutting-edge AI technology, optimize operations, and unlock the full potential of your data for strategic decisions and innovation.",
    keywords:
      "AI solutions, competitive business AI, data analytics innovation, business intelligence, AI-driven decisions, optimize operations, future-focused AI",
    author: "iAppsData",
    robots: "index, follow",
    openGraph: {
      type: "website",
      title: "AI & Data Analytics Services | iAppsData - Leading in Innovation",
      description:
        "iAppsData's AI & Data Analytics solutions empower your business to stay ahead in a competitive market. Leverage cutting-edge AI technology, optimize operations, and unlock the full potential of your data for strategic decisions and innovation.",
      image: "/images/digi.jpg",
      url: "https://yourwebsite.com/services/ai-data-analytics",
      site_name: "iAppsData",
    },
    twitter: {
      card: "summary_large_image",
      title: "AI & Data Analytics Services | iAppsData - Leading in Innovation",
      description:
        "iAppsData's AI & Data Analytics solutions empower your business to stay ahead in a competitive market. Leverage cutting-edge AI technology, optimize operations, and unlock the full potential of your data for strategic decisions and innovation.",
      image: "/images/digi.jpg",
    },
  };
  







import React from "react";
import CaseStudiesPage from "../../insights/casestudies/page";
import aidata from "@/app/api/(services)/ai-data-analytics/aidata";
import SectionalBanner from "@/app/components/(reusables)/(banner)/SectionalBanner";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import Subservices from "@/app/components/(reusables)/(sections)/SubServices";
  
  export default function Page() {
    return (
      <section>
        <Subhero
          img="/images/banner/ai-banner-final.png"
          link="/contact"
          title="Explore our Services"
          head="Transform Your Business with Digital Cloud Solutions"
          subhead="Seamlessly migrate, manage, and scale your business with cutting-edge digital cloud technologies designed for your needs."
        />
  
        <Subservices
          apiData={aidata}
          subhead="Whether you're just starting your cloud journey or looking to optimize your infrastructure, we offer cloud solutions that drive innovation and efficiency."
          head="Our Cloud Expertise"
          themeimg='/images/ai-data-logo.png'
        />
  
        <SectionalBanner backgroundImage='/images/ai-data-sec-banner.png'/>
  
        <CaseStudiesPage filter="ai" />
        <ServiceForm/>
      
      </section>
    );
  }
  