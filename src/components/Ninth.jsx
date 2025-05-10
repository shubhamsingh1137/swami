import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

const Ninth = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-full lg:w-400 h-40 bg-orange-500 lg:flex lg:justify-center lg:items-center lg:space-x-30">
        <div className="lg:text-4xl font-extrabold text-white">
          <p>©2022 परम् पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री</p>
          <p className="ml-12">अभयानंद सरस्वती जी | ALL RIGHTS RESERVED</p>
        </div>
        <div className="text-white flex lg:space-x-5">
          <FaFacebookF className="lg:size-8" />
          <FaTwitter className="lg:size-8" />
          <FaLinkedinIn className="lg:size-8" />
          <LuMapPinned className="lg:size-8" />
          <FaGoogle className="lg:size-8" />
        </div>
      </div>
    </div>
  );
};

export default Ninth;
