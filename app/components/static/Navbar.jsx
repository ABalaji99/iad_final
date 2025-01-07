"use client";
import { FaCloud, FaRobot, FaLeaf, FaShieldAlt, FaUserAlt, FaStethoscope, FaFlag } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
  const [isNavbarVisible, setNavbarVisible] = useState(true); // Track navbar visibility
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

    // Only add event listener on the client side
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hover behavior for the mega menu
  const handleMouseEnter = (menu) => {
    clearTimeout(timerRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  // Image observer to apply animations when the image is in view
  const inView = useIntersectionObserver((isInView) => setImageVisible(isInView));

  // Hydration fix: Make sure state values are only initialized once on the client side
  useEffect(() => {
    setImageVisible(false); // Ensures image visibility isn't set during SSR
  }, []);

  return (
    <nav
      className={`fixed top-0 px-12 py-0 left-0 right-0 z-50 transition-all duration-300    ${!isNavbarVisible ? "translate-y-[-200%]" : "translate-y-0"} ${isScrolled ? "bg-gradient-to-tr from-white to-[#ffffff7b]" : "bg-white"}`}
    >
      <div className={`container mx-auto flex items-center justify-between p-4 ${isScrolled ? "" : ""}`}>
        {/* Logo */}
        <Link href="/"><Image src="/images/iad_logo.png" priority width={200} height={200} alt="iappsdata logo" /></Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {["About", "Services", "Industries", "Insights", "Careers"].map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              className="relative group cursor-pointer"
            >
              <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                <span className={`text-md ${isScrolled ? "text-black" : "text-black"} text-[1.02rem] font-[500] relative`}>
                  {item}
                  {/* Modern Border-bottom animation */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          ))}
          <li className="relative group cursor-pointer">
            <Link href="/contact">
              <span className={`text-md ${isScrolled ? "text-black" : "text-black"} text-[1rem] font-[500] relative`}>
                Contact
                {/* Modern Border-bottom animation */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>

        {/* Mega Menus */}
        {activeMenu && (
          <div
            onMouseEnter={() => clearTimeout(timerRef.current)}
            onMouseLeave={handleMouseLeave}
            className={`absolute left-0 top-full w-full bg-white text-black shadow-lg overflow-hidden transition-all duration-500 transform ${activeMenu ? "translate-y-0" : "translate-y-10"} opacity-100`}
          >
            <div className="grid grid-cols-3 gap-4 px-20 max-w-full w-full mx-auto overflow-auto max-h-[80vh]">
              {/* Column 1: Info about the Tab */}
              <div className=" border-r-2 border-[#898989] px-6">
                <h4 className="font-semibold mb-2">{activeMenu} Overview</h4>
                <div className="text-md">
                  {activeMenu === "About" && (
                    <p className="text-md">
                      At iAppsData, we believe in empowering businesses through technology. Our company is driven by a strong commitment to innovation, integrity, and customer-centric solutions. Learn more about our mission to provide transformative services that make a difference in the digital landscape. Discover how our core values guide everything we do and the impact we have on the world.
                    </p>
                  )}

                  {activeMenu === "Services" && (
                    <p className="text-md">
                      Explore the wide range of services we offer to meet your business's unique needs. From cutting-edge Digital Transformation & Cloud Solutions to robust AI & Data Analytics, we provide tailored solutions designed to drive growth and enhance efficiency. Our expert team is here to help you leverage the latest technologies to create sustainable success in a rapidly changing digital environment.
                    </p>
                  )}

                  {activeMenu === "Industries" && (
                    <p className="text-md">
                      Discover the industries we serve and the comprehensive solutions we offer to help businesses navigate their most complex challenges. Whether you're in healthcare, finance, energy, or any other sector, we provide industry-specific expertise and innovative solutions that ensure you stay ahead of the curve. Our deep understanding of each industry's unique needs allows us to deliver results that truly matter.
                    </p>
                  )}

                  {activeMenu === "Insights" && (
                    <p className="text-md">
                      Stay updated with the latest trends, news, and insights from our experts who are at the forefront of technology and business transformation. Our insights cover everything from emerging technologies to best practices, offering you valuable knowledge that can help you make informed decisions and stay competitive in an ever-evolving market. Let us be your trusted resource for all things digital.
                    </p>
                  )}

                  {activeMenu === "Careers" && (
                    <p className="text-md">
                      Join our team and become a part of a dynamic, forward-thinking organization that values talent, creativity, and collaboration. At iAppsData, we foster a culture of growth, innovation, and continuous learning. If you're passionate about technology and looking to make an impact in a fast-paced, high-energy environment, explore the career opportunities we offer and take the next step in your professional journey.
                    </p>
                  )}
                </div>
              </div>

              {/* Column 2: Service Items */}
              <div className=" border-r-2 border-[#898989]">
                <h4 className="font-semibold mb-2">Overview</h4>
                <ul className="space-y-2">
                  {activeMenu === "Services" && (
                    <>
                      <li><Link href="/services/digital-transformation-and-cloud-solutions">Digital Transformation & Cloud Solutions</Link></li>
                      <li><Link href="/services/ai-and-data-analytics">AI & Data Analytics</Link></li>
                      <li><Link href="/services/sustainability-and-energy-solutions">Sustainability & Energy Solutions</Link></li>
                      <li><Link href="/services/cybersecurity-and-data-privacy">Cybersecurity & Data Privacy</Link></li>
                      <li><Link href="/services/staffing">Staffing</Link></li>
                      <li><Link href="/services/healthcare-solutions-and-services">Healthcare Solutions & Services</Link></li>
                      <li><Link href="/services/government-solutions">Government Solutions</Link></li>
                    </>
                  )}

                  {activeMenu === "Industries" && (
                    <>
                      <li><Link href="/industries/healthcare">Healthcare</Link></li>
                      <li><Link href="/industries/financial-services">Financial Services</Link></li>
                      <li><Link href="/industries/energy">Energy</Link></li>
                      <li><Link href="/industries/government">Government</Link></li>
                      <li><Link href="/industries/retail">Retail</Link></li>
                      <li><Link href="/industries/manufacturing">Manufacturing</Link></li>
                    </>
                  )}

                  {activeMenu === "Insights" && (
                    <>
                      <li><Link href="/insights/latest-news">Latest News</Link></li>
                      <li><Link href="/insights/trends">Trends</Link></li>
                      <li><Link href="/insights/case-studies">Case Studies</Link></li>
                      <li><Link href="/insights/research">Research</Link></li>
                    </>
                  )}
                </ul>
              </div>

              {/* Column 3: Image */}
              <div className="py-5">
                <Image
                  className={`w-[400px] object-cover ${isImageVisible ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'}`}
                  src="/images/landing-image.jpg"
                  alt="Landing Image"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
