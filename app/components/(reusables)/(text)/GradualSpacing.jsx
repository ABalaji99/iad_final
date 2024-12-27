"use client";

import { useEffect } from "react";

export default function GradualSpacing({ text, className }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".gradual-spacing-letter");

    elements.forEach((element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("fade-in");
          }
        },
        { threshold: 0.5 } // Adjust threshold for when the animation should trigger
      );

      observer.observe(element);
    });
  }, []);

  return (
    <div className="flex justify-center space-x-1">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`gradual-spacing-letter opacity-0 transform text-left  transition-all duration-500 ${className}`}
          style={{ transitionDelay: `${index * 10}ms` }} // Adds delay for each letter
        >
          {char === "" ? <span>&nbsp;</span> : char}
        </span>
      ))}
    </div>
  );
}
