import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";

const Ninth = () => {
  return (
    <footer className="bg-orange-500 px-4 sm:px-8 py-8 mt-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Footer Text */}
        <div className="text-center lg:text-left text-white font-semibold text-sm sm:text-base lg:text-xl leading-snug">
          <p>©2022 परम् पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री</p>
          <p>अभयानंद सरस्वती जी | ALL RIGHTS RESERVED</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 text-white text-2xl sm:text-3xl">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/swamiabhyanandsaraswati/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-gray-200 transition duration-200 cursor-pointer" />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/ShriShaunak/status/1552512925071355904"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-gray-200 transition duration-200 cursor-pointer" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/swami-abayananda-saraswathi-0549327a/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-gray-200 transition duration-200 cursor-pointer" />
          </a>

          {/* Google Maps Location */}
          <a
            href="https://www.google.com/search?q=swami+abhayanand+saraswati+location+lucknow+uttar+pradesh&oq=swami+abhayanand+saraswati+location+lucknow&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigAdIBCjE3MTkyajBqMTWoAgiwAgHxBTdV68cBDpmx8QU3VevHAQ6ZsQ&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuMapPinned className="hover:text-gray-200 transition duration-200 cursor-pointer" />
          </a>

          {/* Email (Gmail) */}
          <a href="https://swamiabhyanand.com/">
            <FaGoogle className="hover:text-gray-200 transition duration-200 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Ninth;
