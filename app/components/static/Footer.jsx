import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { gsap } from "gsap";

export default function Footer() {
  useEffect(() => {
    // Select all links inside the footer
    const links = document.querySelectorAll("footer a");

    // GSAP hover animation setup
    links.forEach(link => {
      gsap.set(link, { scale: 1, color: "#A4A7AE" }); // Initial state
      
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.1, 
          color: "#4DAFCE", // Change color on hover
          duration: 0.3,     // Duration of the animation
          ease: "power2.out", // Ease for smooth transition
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1, 
          color: "#A4A7AE", // Reset to initial color
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
    
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <footer className="bg-[#101332] text-[#A4A7AE] py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#FAFAFA]">iAppsData</h3>
          <p className="text-sm">
            51 John F Kennedy Parkway Ste 130, <br />
            Short Hills NJ 07078
          </p>
          <p className="flex items-center mt-4">
            <IoLocationOutline className="mr-2" />{" "}
            <Link href="https://www.google.com/maps?q=51+John+F+Kennedy+Parkway+Ste+130,+Short+Hills+NJ+07078" target="_blank" rel="noopener noreferrer">
              Short Hills, NJ
            </Link>
          </p>
          <p className="flex items-center mt-2">
            <CiMail className="mr-2" />{" "}
            <Link href="mailto:info@iappsdata.com">info@iappsdata.com</Link>
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FAFAFA]">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/digital-transformation">
                Digital Transformation & Cloud Solutions
              </Link>
            </li>
            <li>
              <Link href="/services/ai-data-analytics">
                AI & Data Analytics
              </Link>
            </li>
            <li>
              <Link href="/services/healthcare-solutions">
                Healthcare Solutions & Services
              </Link>
            </li>
            <li>
              <Link href="/services/sustainability-energy">
                Sustainability & Energy
              </Link>
            </li>
            <li>
              <Link href="/services/staffing">
                Staffing
              </Link>
            </li>
            <li>
              <Link href="/services/cybersecurity">
                Cybersecurity & Data Privacy
              </Link>
            </li>
            <li>
              <Link href="/services/government-solutions">
                Government Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FAFAFA]">Industries</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/industries/oil-energy">
                Oil & Energy
              </Link>
            </li>
            <li>
              <Link href="/industries/mining-metals">
                Mining & Metals
              </Link>
            </li>
            <li>
              <Link href="/industries/banking">
                Banking
              </Link>
            </li>
            <li>
              <Link href="/industries/insurance">
                Insurance
              </Link>
            </li>
            <li>
              <Link href="/industries/retail">
                Retail
              </Link>
            </li>
            <li>
              <Link href="/industries/hospitals-healthcare">
                Hospitals & Healthcare
              </Link>
            </li>
            <li>
              <Link href="/industries/telecommunication">
                Telecommunication
              </Link>
            </li>
            <li>
              <Link href="/industries/transportation-logistics">
                Transportation & Logistics
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FAFAFA]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/leadership">Leadership</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t flex justify-between items-center border-[#A4A7AE] mt-10 pt-5 text-center">
        <p className="text-sm">
          © 2024 iAppsData. All rights reserved.
        </p>
        <div className="text-sm">
          <Link href="/cookie-policy">Cookie Policy</Link> |{" "}
          <Link href="/terms-and-conditions">Terms and Conditions</Link> |{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
