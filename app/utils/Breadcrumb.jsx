"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname(); // Get the current route
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="bg-gray-100 py-3 px-4 rounded-md text-sm" aria-label="Breadcrumb">
      <ol className="flex space-x-2 text-gray-600">
        <li>
          <Link href="/" className="text-primary font-medium hover:underline">
            Home
          </Link>
          {pathSegments.length > 0 && <span className="mx-2">/</span>}
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <li key={path}>
              {isLast ? (
                <span className="text-gray-500">{formatSegment(segment)}</span>
              ) : (
                <>
                  <Link href={path} className="text-primary font-medium hover:underline">
                    {formatSegment(segment)}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Helper function to format breadcrumb segment (e.g., "ai-data-analytics" => "AI & Data Analytics")
function formatSegment(segment) {
  return segment
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
}
