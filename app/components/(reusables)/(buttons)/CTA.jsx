import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function CTA({ title, link }) {
  return (
    <Link
      href={link}
      className="uppercase flex justify-start gap-2 items-center"
    >
      {title} <FiExternalLink />
    </Link>
  );
}
