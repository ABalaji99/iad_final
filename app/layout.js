"use client";

import { Poppins, Pathway_Gothic_One } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive Scroll styles
import "./globals.css";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Configure Pathway Gothic One font
const pathwayGothicOne = Pathway_Gothic_One({
  subsets: ["latin"],
  weight: ["400"], // Pathway Gothic One supports only 400 weight
  variable: "--font-pathway-gothic-one",
});

// Loader component
function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255);
          z-index: 9999;
        }
        .loader {
          width: 50px;
          height: 50px;
          border: 6px solid #f3f3f3;
          border-top: 6px solid #0a77ac; /* Primary theme color */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// Cursor component with click effect
function LazyCursor() {
  const cursorRef = useRef(null);
  const [isBroken, setIsBroken] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.1; // Adjust smoothness speed

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate the cursor to "lag" behind the mouse position
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    };

    // Handle click to toggle "broken" cursor
    const handleClick = () => {
      setIsBroken(true);
      setTimeout(() => setIsBroken(false), 500); // Reset after 500ms
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-12 h-12 pointer-events-none z-50 transform -translate-x-4 -translate-y-4 transition-transform duration-200 ${"bg-primary bg-opacity-8 border-4 border-primary opacity-80 rounded-full"}`}
    />
  );
}

// RootLayout component
export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Locomotive Scroll with extreme smoothness settings
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
      smoothMobile: true,
      lerp: 0.1, // Super smooth interpolation (the lower the value, the smoother)
      multiplier: 1.0, // Scroll multiplier to adjust the speed of the scrolling effect
      smartphone: {
        smooth: true,
        lerp: 0.1,
      },
      tablet: {
        smooth: true,
        lerp: 0.1,
      },
    });

    // Handle loader display duration
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loader

    // Cleanup Locomotive Scroll instance when component unmounts
    return () => {
      clearTimeout(timer);
      scroll.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="32x32" />
      </head>
      <body
        className={`${poppins.variable} ${pathwayGothicOne.variable} bg-themeBG antialiased`}
      >
        {/* Lazy cursor */}
        <LazyCursor />

        {/* Wrapping page content inside a scroll container */}
        <div id="scroll-container" data-scroll-container>
          <Navbar />
          {loading ? <Loader /> : children}
          <Footer />
        </div>

        {/* HubSpot script for analytics */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/47678342.js"
        ></script>

        <script src="https://unpkg.com/@barba/core"></script>
        <script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
      </body>
    </html>
  );
}
