'use client';

import React, { useState } from 'react';
import { IoChevronDownSharp } from "react-icons/io5";
import Image from 'next/image';

export default function FAQ({ head, subhead, api, imageSrc }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="w-full px-4 py-12 md:px-10 lg:px-20 bg-white">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Left Side: FAQ Content */}
                <div className="w-full lg:w-3/5">
                    {/* Heading */}
                    {/* <div className="mb-8">
                        <h2 className="text-lg md:text-xl font-semibold text-[#0A77AC] mb-2">{head}</h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{subhead}</p>
                    </div> */}

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {api.map((item, index) => (
                            <div
                                key={index}
                                className="border-t border-gray-200 overflow-hidden"
                            >
                                {/* Question */}
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center cursor-pointer py-4 text-[#101332] font-semibold text-lg transition-colors"
                                >
                                    <span>{item.question}</span>
                                    <IoChevronDownSharp
                                        className={`w-6 h-6 text-[#0A77AC] transform transition-transform duration-300 ${
                                            activeIndex === index ? "rotate-180" : ""
                                        }`}
                                    />
                                </div>

                                {/* Answer */}
                                <div
                                    className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                                        activeIndex === index ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-2/5 flex justify-center">
                    <Image
                        src='/images/banner/faq.png'
                        alt="FAQ Illustration"
                        width={400}
                        height={400}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
