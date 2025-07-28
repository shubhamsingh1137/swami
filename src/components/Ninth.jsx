import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

const Ninth = () => {
  return (
    <div className="flex justify-center bg-orange-500 px-10 lg:py-10 mt-5">
      <div className="w-full max-w-6xl mt-15  flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-5 ">
        {/* Footer Text */}
        <div className="text-center lg:text-left text-white font-extrabold text-sm sm:text-lg lg:text-4xl leading-snug">
          <p>©2022 परम् पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री</p>
          <p>अभयानंद सरस्वती जी | ALL RIGHTS RESERVED</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-y-15 space-x-5 text-white text-3xl mb-5 ">
          <FaFacebookF className="hover:text-gray-200 transition duration-200" />
          <FaTwitter className="hover:text-gray-200 transition duration-200" />
          <FaLinkedinIn className="hover:text-gray-200 transition duration-200" />
          <LuMapPinned className="hover:text-gray-200 transition duration-200" />
          <FaGoogle className="hover:text-gray-200 transition duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Ninth;
