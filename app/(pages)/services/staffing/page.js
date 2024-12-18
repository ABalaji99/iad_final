import Subhero from "@/app/reusablecomponents/Subhero";
import Subservices from "@/app/reusablecomponents/Subservices";
import staffingservices from "@/app/api/staffingservices";
import WhyChoose from "@/app/reusablecomponents/WhyChoose";
import whychoosestaffing from "@/app/api/whychoosestaffing";
import FAQ from "@/app/reusablecomponents/FAQ";
import staffingFAQ from "@/app/api/staffingFAQ";
import CaseStudiesPage from "@/app/(navbarpage)/insights/case-studies/page";
import SectionalBanner from "@/app/reusablecomponents/SectionalBanner";
import ServiceForm from "@/app/reusablecomponents/ServiceForm";

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
      <SectionalBanner backgroundImage='/images/banner/staffing-sectionalbanner.png'/>
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
