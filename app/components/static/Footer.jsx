import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

export default function Footer() {
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
            <Link
              href="https://www.google.com/maps?q=51+John+F+Kennedy+Parkway+Ste+130,+Short+Hills+NJ+07078"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
            >
              Short Hills, NJ
            </Link>
          </p>
          <p className="flex items-center mt-2">
            <CiMail className="mr-2" />{" "}
            <Link href="mailto:info@iappsdata.com" className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]">
              info@iappsdata.com
            </Link>
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#FAFAFA]">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/services/digital-transformation"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Digital Transformation & Cloud Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services/ai-data-analytics"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                AI & Data Analytics
              </Link>
            </li>
            <li>
              <Link
                href="/services/healthcare-solutions"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Healthcare Solutions & Services
              </Link>
            </li>
            <li>
              <Link
                href="/services/sustainability-energy"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Sustainability & Energy
              </Link>
            </li>
            <li>
              <Link
                href="/services/staffing"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Staffing
              </Link>
            </li>
            <li>
              <Link
                href="/services/cybersecurity"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Cybersecurity & Data Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/services/government-solutions"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
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
              <Link
                href="/industries/oil-energy"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Oil & Energy
              </Link>
            </li>
            <li>
              <Link
                href="/industries/mining-metals"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Mining & Metals
              </Link>
            </li>
            <li>
              <Link
                href="/industries/banking"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Banking
              </Link>
            </li>
            <li>
              <Link
                href="/industries/insurance"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Insurance
              </Link>
            </li>
            <li>
              <Link
                href="/industries/retail"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Retail
              </Link>
            </li>
            <li>
              <Link
                href="/industries/hospitals-healthcare"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Hospitals & Healthcare
              </Link>
            </li>
            <li>
              <Link
                href="/industries/telecommunication"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Telecommunication
              </Link>
            </li>
            <li>
              <Link
                href="/industries/transportation-logistics"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
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
              <Link
                href="/about"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/leadership"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Leadership
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t flex justify-between items-center border-[#A4A7AE] mt-10 pt-5 text-center">
        <p className="text-sm">© 2024 iAppsData. All rights reserved.</p>
        <div className="text-sm">
          <Link
            href="/cookie-policy"
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
          >
            Cookie Policy
          </Link>{" "}
          |{" "}
          <Link
            href="/terms-and-conditions"
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
          >
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link
            href="/privacy-policy"
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#4DAFCE]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
