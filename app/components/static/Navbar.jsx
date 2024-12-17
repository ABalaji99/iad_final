"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { gsap } from "gsap";
import { FaCaretDown } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { TiArrowRight } from "react-icons/ti";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const menuItems = [
  {
    label: "About",
    link: "/about",
    megaMenu: [
      { label: "Leadership", link: "/about/leadership" },
      { label: "Customer Speak", link: "/about/customer-speak" },
      { label: "Partner Ecosystem", link: "/about/partner-ecosystem" },
      { label: "Our Mission", link: "/about/our-mission" },
      { label: "Company Culture", link: "/about/company-culture" },
    ],
  },
  {
    label: "Services",
    link: "/services",
    megaMenu: [
      {
        label: "Digital Transformation & Cloud Solutions",
        link: "/services/digital-transformation",
      },
      { label: "AI & Data Analytics", link: "/services/ai-data-analytics" },
      {
        label: "Sustainability & Energy Solutions",
        link: "/services/sustainability-energy",
      },
      {
        label: "Cybersecurity & Data Privacy",
        link: "/services/cybersecurity",
      },
      { label: "Staffing", link: "/services/staffing" },
      {
        label: "Healthcare Solutions & Services",
        link: "/services/healthcare",
      },
      { label: "Government Solutions", link: "/services/government" },
    ],
  },
  {
    label: "Industries",
    link: "/industries",
    megaMenu: [
      { label: "Banking", link: "/industries/banking" },
      { label: "Financial Services", link: "/industries/financial-services" },
      { label: "Insurance", link: "/industries/insurance" },
      { label: "Healthcare", link: "/industries/healthcare" },
      { label: "Manufacturing", link: "/industries/manufacturing" },
    ],
  },
  {
    label: "Insights",
    link: "/insights",
    megaMenu: [
      { label: "Blog", link: "/insights/blog" },
      { label: "Case Studies", link: "/insights/case-studies" },
      { label: "News", link: "/insights/news" },
    ],
  },
  {
    label: "Careers",
    link: "/careers",
    megaMenu: [
      { label: "Open Positions", link: "/careers/open-positions" },
      { label: "Life at Company", link: "/careers/life-at-company" },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMegaMenu = (index) => {
    setOpenMegaMenu((prev) => (prev === index ? null : index));
  };

  // GSAP click animation for text
  const handleClick = (e) => {
    gsap.fromTo(
      e.target,
      { scale: 1, color: "#000" },
      {
        scale: 1.2,
        color: "#007BFF", // change to your desired highlight color
        duration: 0.2,
        ease: "power2.out",
        yoyo: true, // animation goes back to normal
        repeat: 1, // repeat once to create the effect
      }
    );
  };

  useEffect(() => {
    gsap.from(".logo", {
      opacity: 0,
      y: 20,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".nav-link", {
      opacity: 0,
      y: 10,
      stagger: 0.2,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power2.out", opacity: 1 }
      );
      gsap.to(".menu-icon", {
        rotation: 180,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".menu-icon > path", {
        stroke: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });

      // Background glow effect on mobile menu
      gsap.to(".mobile-menu", {
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
        duration: 0.3,
      });
    } else {
      gsap.to(".mobile-menu", { x: "100%", duration: 0.3, ease: "power2.in" });
      gsap.to(".menu-icon", { rotation: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(".menu-icon > path", {
        stroke: "#000",
        duration: 0.3,
        ease: "power2.in",
      });

      // Remove background glow effect on close
      gsap.to(".mobile-menu", { boxShadow: "none", duration: 0.3 });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (openMegaMenu !== null) {
      gsap.fromTo(
        `.mega-menu-${openMegaMenu}`,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [openMegaMenu]);

  return (
    <nav className="fixed top-0 left-0 right-0 sm:mx-0 py-2 sm:my-0 lg:mx-28 sm:px-5 sm:py-0 lg:px-4 md:mx-32 px-4 md:mt-4 bg-white shadow-lg z-50">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="logo">
            <Image
              src="/images/iad_logo.png"
              width={150}  // Ensure logo size is fixed
              height={50}  // Consistent height
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
            <li
              key={item.label}
              className="relative w-max text-dark cursor-pointer"
            >
              <button
                className="nav-link hover:text-primary text-base font-medium flex items-center space-x-2"
                onClick={(e) => {
                  handleClick(e);
                  toggleMegaMenu(index);
                }}
              >
                {item.label}
              </button>
              {item.megaMenu && openMegaMenu === index && (
                <div
                  className={`mega-menu-${index} absolute right-0 mt-8 bg-white shadow-xl border  z-10 p-6 grid grid-cols-1 place-items-center gap-6 min-w-max w-max`}
                >
                  <div className="col-span-1">
                    <h2 className="text-lg font-medium mb text-[#252B37]">{item.label}</h2>
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
            <button className="bg-primaryDark text-white px-4 py-2 transition-transform transform hover:scale-105">
              Enquire Now
            </button>
          </li>
        </ul>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="mobile-menu fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-end overflow-y-auto">
          <div className="w-full bg-white p-6 space-y-6 shadow-xl">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-3xl text-black">
                <MdOutlineCloseFullscreen size={20} />
              </button>
            </div>
            <ul className=" px-5">
              {menuItems.map((item, index) => (
                <li key={item.label}>
                  <button
                    className="text-md text-black mb-2 text-dark w-full flex justify-between items-center gap-1 text-left"
                    onClick={(e) => {
                      handleClick(e);
                      toggleMegaMenu(index);
                    }}
                  >
                    {item.label} <GoChevronDown />
                  </button>
                  {item.megaMenu && openMegaMenu === index && (
                    <div
                      className={`mega-menu-${index} p-4 pt-2 space-y-2 border-l`}
                    >
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
                <button className="w-full py-3 mt-10 bg-primaryDark text-white text-sm">
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
