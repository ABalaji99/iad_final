import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export default function ServiceForm() {
    return (
        <section className="sm:py-10 lg:py-20 sm:px-6 md:px-16 lg:px-28 bg-Darkbg text-white">
            <div className="flex flex-wrap justify-between items-center bg-black p-6 sm:p-10 lg:p-14 gap-8">
                {/* Left Section */}
                <article className="sm:w-full md:w-1/2 lg:w-2/3 mb-8">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold">
                            Ready to transform your business?
                        </h2>
                        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-4">
                            We are here to Empower your Success
                        </h4>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-lg sm:text-xl font-medium pb-2 border-b w-max border-white">
                            Contact Us
                        </h4>
                        <p className="flex items-center mb-2 text-sm sm:text-base">
                            <IoLocationOutline className="mr-2 text-lg" /> 123 Business Street, Suite 456, Your City
                        </p>
                        <p className="flex items-center text-sm sm:text-base">
                            <CiMail className="mr-2 text-lg" /> contact@yourbusiness.com
                        </p>
                    </div>
                </article>

                {/* Form Section */}
                <form className="sm:w-full md:w-1/2 lg:w-1/3 bg-white p-6 shadow-md text-black">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">Get In Touch</h3>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="organization"
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Organization Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            id="service"
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select a Department</option>
                            <option value="digital-cloud">Digital Cloud Solutions</option>
                            <option value="custom-apps">Custom Applications</option>
                            <option value="ai-analytics">AI & Data Analytics</option>
                            <option value="staffing">Professional Staffing</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Describe your needs.."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-Darkbg text-white py-2 px-4 transition duration-300 hover:bg-gray-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
