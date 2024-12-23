"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const menuItems = [
  { label: "About Us", link: "/about" },
  { label: "Services", 
    megaMenu: [
      { label: "Digital Transformation & Cloud Solutions", link: "/services/digital-transformation-cloud-solutions" },
      { label: "AI & Data Analytics", link: "/services/ai-data-analytics" },
      { label: "Sustainability & Energy Solutions", link: "/services/sustainability-energy-solutions" },
      { label: "Cybersecurity & Data Privacy", link: "/services/cybersecurity-data-privacy" },
      { label: "Staffing", link: "/services/staffing" },
      { label: "Healthcare Solutions & Services", link: "/services/healthcare-solutions-services" },
      { label: "Government Solutions", link: "/services/government-solutions" },    
    ],
  },
  { label: "Industries", link: "/industries" },
  { label: "Insights", link: "/insights" },
  { label: "Careers", link: "/careers" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [navbarSize, setNavbarSize] = useState("lg");
  const [isClient, setIsClient] = useState(false);  // To track if it's the client side

  // Initialize Locomotive Scroll
  useEffect(() => {
    setIsClient(true);  // Set to true once mounted on the client side

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    // Handle scroll events for sticky navbar and dynamic size
    const handleScroll = () => {
      // Check if navbar should be sticky
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Handle navbar size changes
      if (window.scrollY > 200) {
        if (navbarSize !== "sm") setNavbarSize("sm");
      } else {
        if (navbarSize !== "lg") setNavbarSize("lg");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scroll) scroll.destroy();
    };
  }, [navbarSize]); // Only include `navbarSize` here to make sure it updates correctly

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMegaMenu = (index) => {
    setOpenMegaMenu((prev) => (prev === index ? null : index));
  };

  if (!isClient) {
    return null;  // Prevent render mismatch during SSR
  }

  return (
    <nav
      className={`relative right-0 sm:mx-0 py-2 sm:my-0 lg:mx-28 sm:px-5 sm:py-0 lg:px-4 md:mx-32 px-4  md:py-2 bg-white z-50 transition-transform duration-700 ease-in-out ${
        isSticky ? "sticky top-5 shadow-md transform scale-90 md:py-1 duration-300 transition-all ease-in-out bg-white bg-opacity-80 rounded-xl" : "auto"
      } ${navbarSize === "sm" ? "py-1" : "py-2"}`}
      data-scroll-container
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="logo">
            <Image
              src="/images/iad_logo.png"
              width={150}
              height={50}
              alt="iAppsData"
              className="sm:w-full w-full md:w-52"
            />
          </div>
        </Link>

        <button
          className="sm:hidden flex items-center space-x-2 cursor-pointer menu-icon"
          onClick={toggleMenu}
        >
          <CgMenuRight size={20} />
        </button>

        <ul className="hidden sm:flex items-center sm:space-x-8">
          {menuItems.map((item, index) => (
            <li key={item.label} className={isSticky ? "text-dark" : "text-dark"}>
              <button
                className="hover:text-primary text-base font-medium flex items-center space-x-2"
                onClick={() => toggleMegaMenu(index)}
              >
                {item.label}
              </button>
              {item.megaMenu && openMegaMenu === index && (
                <div className={`mega-menu-${index} absolute top-20 bg-white shadow-xl z-10 p-6 grid grid-cols-1 place-items-center gap-6 min-w-max w-max`}>
                  <div className="col-span-1">
                    <h2 className="text-lg font-medium text-[#252B37] mb-2">{item.label}</h2>
                    {item.megaMenu.map((dropdownItem) => (
                      <div key={dropdownItem.label} className="space-y-2 ms-4 mb-2">
                        <Link
                          href={dropdownItem.link}
                          className="text-dark hover:text-primary text-normal mb-4"
                        >
                          {dropdownItem.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <button className={isSticky ? "rounded-xl bg-primary text-white px-4 py-2 transition-transform transform hover:scale-105" : "bg-primary text-white px-4 py-2 transition-transform transform hover:scale-105 rounded-none"}>
              Enquire Now
            </button>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-end overflow-y-auto">
          <div className="w-full bg-white p-6 space-y-6 shadow-xl">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-3xl text-black">
                <MdOutlineCloseFullscreen size={20} />
              </button>
            </div>
            <ul className="px-5">
              {menuItems.map((item, index) => (
                <li key={item.label}>
                  <button
                    className="text-md text-black mb-2 text-dark w-full flex justify-between items-center gap-1 text-left"
                    onClick={() => toggleMegaMenu(index)}
                  >
                    {item.label} <GoChevronDown />
                  </button>
                  {item.megaMenu && openMegaMenu === index && (
                    <div className={`mega-menu-${index} p-4 pt-2 space-y-2 border-l`}>
                      {item.megaMenu.map((dropdownItem) => (
                        <div key={dropdownItem.label}>
                          <Link
                            href={dropdownItem.link}
                            className="text-dark inline-flex items-center gap-4 hover:text-primary text-sm"
                          >
                            {dropdownItem.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <button className={isSticky ? "rounded-xl" : "w-full py-3 mt-10 bg-blue-500 text-white text-sm rounded-none"}>
                  Enquire Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
