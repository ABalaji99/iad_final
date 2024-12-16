"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenuFold3Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const menuItems = [
  {
    label: "About",
    link: "/",
    dropdown: [
      { label: "Our Story", link: "/about/story" },
      { label: "Team", link: "/about/team" },
      { label: "Leadership", link: "/about/leadership" },
      { label: "Customer Speak", link: "/about/customer-speak" },
      { label: "Partner Ecosystem", link: "/about/partner-ecosystem" },
      { label: "Our Mission", link: "/about/our-mission" },
    ],
  },
  {
    label: "Services",
    link: "/services",
    dropdown: [
      { label: "Digital Transformation & Cloud Solutions", link: "/services/digital-transformation" },
      { label: "AI & Data Analytics", link: "/services/ai-data-analytics" },
      { label: "Sustainability & Energy Solutions", link: "/services/sustainability-energy" },
      { label: "Cybersecurity & Data Privacy", link: "/services/cybersecurity" },
      { label: "Staffing", link: "/services/staffing" },
      { label: "Healthcare Solutions & Services", link: "/services/healthcare" },
      { label: "Government Solutions", link: "/services/government" },
      { label: "Oil & Energy", link: "/services/oil-energy" },
      { label: "Mining & Metals", link: "/services/mining-metals" },
    ],
  },
  {
    label: "Industries",
    link: "/industries",
    dropdown: [
      { label: "Banking", link: "/industries/banking" },
      { label: "Financial Services", link: "/industries/financial-services" },
      { label: "Insurance", link: "/industries/insurance" },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 mx-8 md:mx-20 my-4 md:mt-4 bg-white shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/iad_logo.png"
          width={1000}
          alt="iAppsData"
          height={1000}
          className="w-52"
        />

        {/* Hamburger Icon for Mobile */}
        <button className="sm:hidden flex items-center space-x-2 cursor-pointer" onClick={toggleMenu}>
          <RiMenuFold3Line />
        </button>

        {/* Menu for Larger Screens */}
        <ul className="hidden sm:flex sm:space-x-8">
          {menuItems.map((item, index) => (
            <li key={item.label} className="relative w-max text-dark cursor-pointer">
              {/* Main menu link */}
              <button
                className="hover:text-primary flex items-center space-x-2"
                onClick={() => toggleDropdown(index)}
              >
                {item.label}
              </button>
              {/* Dropdown menu */}
              {item.dropdown && openDropdown === index && (
                <ul className="absolute left-0 mt-2 bg-white shadow-md border rounded-md z-10">
                  {item.dropdown.map((dropdownItem) => (
                    <li key={dropdownItem.label} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link href={dropdownItem.link}>{dropdownItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <button className="bg-primary text-white px-4 py-2 rounded-md">Enquire Now</button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Curtain Type) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-end animate-[slideIn_0.3s_ease-in-out] overflow-y-auto"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="w-full bg-white p-6 space-y-6 shadow-xl">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-xl text-primary">
                <VscChromeClose />
              </button>
            </div>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={item.label} className="relative">
                  <button
                    className="block w-full py-2 text-left text-dark hover:text-primary"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                  </button>
                  {item.dropdown && openDropdown === index && (
                    <ul className="space-y-2 pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.label}>
                          <Link href={dropdownItem.link} className="block py-2 text-dark hover:text-primary">
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <button className="w-full py-2 bg-primary text-white rounded-md">Enquire Now</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}