
import c2cData from "@/app/api/(services)/staffing/ITstaffing/c2cData";
import c2hData from "@/app/api/(services)/staffing/ITstaffing/c2hData";
import fulltime from "@/app/api/(services)/staffing/ITstaffing/fulltime";
import Subhero from "@/app/components/(reusables)/(banner)/Subhero";
import ServiceForm from "@/app/components/(reusables)/(forms)/ServiceForm";
import ITserviceSection from "@/app/components/(reusables)/(sections)/ITserviceSection";


import React from "react";

export default function page() {
  return (
    <section className="">
      <Subhero
        img="/images/banner/itstaffing.png"
        head="IT Staffing Solutions"
        subhead="Empowering Your Workforce with Top IT Talent"
        title="Find Skilled IT Professionals to Drive Your Business"
        link="#it-staffing"
      />
      <ITserviceSection api={c2cData}  img='/images/banner/it-1.png'/>
      <ITserviceSection api={c2hData}  img='/images/banner/it-2.png'/>
      <ITserviceSection api={fulltime}  img='/images/banner/it-3.png'/>
  
  
     <ServiceForm/>
    </section>
  );
}
