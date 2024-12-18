"use client";

import { Poppins, Pathway_Gothic_One } from "next/font/google";
import { useEffect, useState } from "react";
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

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period (e.g., for data fetching or hydration)
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loader
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="32x32" />
      </head>
      <body
        className={`${poppins.variable} ${pathwayGothicOne.variable} bg-themeBG antialiased`}
      >
        <Navbar />
        {loading ? <Loader /> : children}
        <Footer/>
         <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/47678342.js"></script> 


      </body>
    </html>
  );
}
