"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

// Adding Intersection Observer
const useIntersectionObserver = (callback) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(true);
      } else {
        callback(false);
      }
    });

    const element = document.querySelector('.observed-image');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [callback]);

  return inView;
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timerRef = useRef(null);
  const lastScrollY = useRef(0);

  // Hydration fix: Use effect hook to handle scroll and visibility state only on the client side
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);

      // Hide navbar when scrolling down more than 20vh
      if (currentScrollY > window.innerHeight * 0.8) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }

      // Show navbar again when scrolling up
      if (currentScrollY < lastScrollY.current) {
        setNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Image observer to apply animations when the image is in view
  const inView = useIntersectionObserver((isInView) => setImageVisible(isInView));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isNavbarVisible ? "translate-y-[-200%]" : "translate-y-0"} ${isScrolled ? "bg-gradient-to-tr from-white to-[#ffffff7b]" : "bg-white"}`}
    >
      <div className={`container mx-auto flex items-center justify-between p-4 ${isScrolled ? "" : ""}`}>
        {/* Logo */}
        <Link href="/">
          <Image src="/images/iad_logo.png" priority width={200} height={200} alt="iappsdata logo" />
        </Link>

        {/* Navigation Links for Desktop and Tablet */}
        <div className="hidden md:flex space-x-8">
          {["About", "Services", "Industries", "Insights", "Careers"].map((item, index) => (
            <li key={index} onMouseEnter={() => setActiveMenu(item)} onMouseLeave={() => setActiveMenu(null)} className="relative group cursor-pointer">
              <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                <span className="text-md text-black text-[1.02rem] font-[500] relative">
                  {item}
                  {/* Modern Border-bottom animation */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          ))}
          <li className="relative group cursor-pointer">
            <Link href="/contact">
              <span className="text-md text-black text-[1rem] font-[500] relative">
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center mt-16 space-y-8">
          {["About", "Services", "Industries", "Insights", "Careers", "Contact"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
