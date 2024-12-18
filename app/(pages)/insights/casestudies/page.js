"use client";

import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa6";
import SecHeader from "@/app/components/(reusables)/(headers)/SecHeader";
import casestudies from "@/app/api/(insights)/casestudies";



const categories = [
  { id: "all", label: "All" },
  { id: "cloud", label: "Digital Transformation & Cloud Solutions" },
  { id: "ai", label: "AI & Data Analytics" },
  { id: "sustainability", label: "Sustainability & Energy Solutions" },
  { id: "cybersecurity", label: "Cybersecurity & Data Privacy" },
  { id: "staffing", label: "Staffing" },
  { id: "healthcare", label: "Healthcare Solutions & Services" },
  { id: "government", label: "Government Solutions" },
];

const sortOptions = [
  { id: "az", label: "Sort by Title" },
 

  { id: "new_to_old", label: "New to Old" },
  { id: "old_to_new", label: "Old to New" },
];

const CaseStudiesPage = ({ filter = "all", showFilter = true }) => {
  const [filteredStudies, setFilteredStudies] = useState([]);
  const [sortOption, setSortOption] = useState("az");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    applyFiltersAndSorting(filter, sortOption);
  }, [filter, sortOption]);

  const applyFiltersAndSorting = (category, sortKey) => {
    setIsLoading(true); // Show loading state
    setTimeout(() => {
      let studies = casestudies;

      if (category !== "all") {
        studies = studies.filter((study) => study.category === category);
      }

      // Sorting logic
      if (sortKey === "az") {
        studies = [...studies].sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortKey === "za") {
        studies = [...studies].sort((a, b) => b.title.localeCompare(a.title));
      } else if (sortKey === "new_to_old") {
        studies = [...studies].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      } else if (sortKey === "old_to_new") {
        studies = [...studies].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      }

      setFilteredStudies(studies);
      setIsLoading(false); // Hide loading state
    }, 500); // Simulate loading delay
  };

  const handleFilter = (category) => {
    applyFiltersAndSorting(category, sortOption);
  };

  const handleSort = (sortKey) => {
    setSortOption(sortKey);
  };

  return (
    <section className="px-4 sm:px-8 md:px-20 py-36 sm:py-12 md:py-36 bg-themeBG">
      <SecHeader
        subhead="Discover how iAppsData has helped businesses across different industries achieve their goals through innovative solutions."
        head="Case Studies"
      />

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="relative">
          <select 
            onChange={(e) => handleFilter(e.target.value)}
            className="appearance-none px-5 py-3 border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary w-96"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <IoMdArrowDropdown className="text-gray-500" />
          </span>
        </div>

        <div className="relative">
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="appearance-none px-5 py-3 border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary w-96"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <IoMdArrowDropdown className="text-gray-500" />
          </span>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <p className="text-center text-gray-500">Loading case studies...</p>
      )}

      {/* Empty State */}
      {!isLoading && filteredStudies.length === 0 && (
        <div className="text-center text-gray-600">
          <p>No case studies found. Try changing the filters.</p>
        </div>
      )}

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="shadow-lg hover:shadow-2xl border border-gray-200 bg-white group transition-all duration-300 overflow-hidden"
          >
            <Image
              src={study.image || "/images/default.jpg"}
              alt={study.title}
              width={1000}
              height={1000}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-6">{study.description}</p>

              <p className="text-sm font-medium text-gray-700 mb-0">
                {study.service}
              </p>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {new Date(study.date).toLocaleDateString()} • 2 min read
                </p>
                <Link
                  href={study.link}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <FaRegFilePdf size={16} /> Download
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesPage;
