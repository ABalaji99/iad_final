import Link from "next/link";
import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

const ScrollButton = ({ title, link }) => {
  return (
    <Link
      href={link}
      className="opacity-80 flex text-base flex-col items-center absolute bottom-10 sm:left-1/2 md:left-[47%]  -translate-x-1/2 text-center text-white z-10 animate-bounce"
      aria-label={`Scroll to ${title}`}
    >
      <span>{title}</span>
      <RiArrowDownWideFill size={24} className="mt-2 opacity-80" />
    </Link>
  );
};

export default ScrollButton;
