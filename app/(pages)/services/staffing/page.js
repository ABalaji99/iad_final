
import CaseStudiesPage from "../../insights/casestudies/page";
import staffingFAQ from "@/app/api/(services)/staffing/staffingFAQ";
import FAQ from "@/app/components/(reusables)/(sections)/FAQ";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import staffingservices from "@/app/api/(services)/staffing/staffingservices";
import whychoosestaffing from "@/app/api/(services)/staffing/whychoosestaffing";
import SectionalBanner from "@/app/components/(reusables)/(banner)/SectionalBanner";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Subservices from "@/app/components/(reusables)/(sections)/SubServices";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";

const page = () => {
  return (
    <section className="">
      <Subhero
        head="Connecting You to the Right Talent"
        subhead="Staffing solutions designed to drive your business forward."
        link="#staffservices"
        title="Our services"
        img="/images/banner/staffinfg-banner.png"
      />

      <Subservices
        apiData={staffingservices}
        head="Discover tailored staffing solutions to meet your specific needs."
        subhead="Explore Our Staffing Services"
        themeimg='/images/banner/cloud.png'
      />
      <SectionalBanner backgroundImage='/images/staffing-sec-banner.png'/>
      <WhyChoose
        subhead="Why Choose iAppsData?"
        head="Your Trusted Partner in Staffing Solutions"
        api={whychoosestaffing}
      />
      
      <CaseStudiesPage filter="staffing" />
      <FAQ
        head="Find answers to some of the most common questions about our services."
        subhead="Frequently Asked Questions"
        api={staffingFAQ}
      />
      <ServiceForm/>
    </section>
  );
};

export default page;
