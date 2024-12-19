import CaseStudiesPage from "../../insights/casestudies/page";
import FAQ from "@/app/components/(reusables)/(sections)/FAQ";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import SectionalBanner from "@/app/components/(reusables)/(banner)/SectionalBanner";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import Subservices from "@/app/components/(reusables)/(sections)/SubServices";
import WhyChoose from "@/app/components/(reusables)/(sections)/WhyChoose";

export const metadata = {
  title: "Staffing Services | iAppsData",
  description: "Explore tailored staffing solutions by iAppsData.",
  openGraph: {
    title: "Staffing Services | iAppsData",
    description: "Explore tailored staffing solutions by iAppsData.",
    url: "https://www.iappsdata.com/staffing",
    images: [
      { url: "/images/banner/staffing-banner.png", alt: "Staffing Banner" },
    ],
  },
};

const page = () => {
  return (
    <section className="space-y-16">
      <Subhero
        head="Connecting You to the Right Talent"
        subhead="Staffing solutions designed to drive your business forward."
        link="#staffservices"
        title="Our services"
        img="/images/banner/staffing-banner.png"
      />
      <Subservices
        apiData={staffingservices}
        head="Discover tailored staffing solutions to meet your specific needs."
        subhead="Explore Our Staffing Services"
        themeimg="/images/banner/cloud.png"
      />
      <SectionalBanner backgroundImage="/images/staffing-sec-banner.png" />
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
      <ServiceForm />
    </section>
  );
};

export default page;
