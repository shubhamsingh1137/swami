import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Gallery", path: "/gallary" },
    { label: "Donate", path: "/donate" },
    { label: "Event", path: "/event" },
    { label: "E-Books", path: "/ebooks" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-orange-500 text-white flex justify-between items-center gap-4 px-4 py-2 text-sm md:text-base lg:text-lg font-bold shadow-2xl shadow-orange-800">
        <p>Email: swamiabhyanand@gmail.com</p>
        <p>Call Now! 8881810100</p>
      </div>

      {/* Main Nav */}
      <div className="bg-yellow-50 px-4 py-4 flex flex-col lg:flex-row lg:items-center justify-between lg:justify-around relative">
        {/* Logo */}
        <div className=" ">
          <img
            src="https://swamiabhyanand.com/images/pic1.png"
            alt="Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className="lg:hidden absolute top-8 right-4 z-50 border border-black p-1 rounded">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX size={30} className="text-black" />
            ) : (
              <HiMenuAlt3 size={30} className="text-black" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-5 lg:gap-10 text-gray-700 font-medium text-lg lg:text-xl transition-all duration-300 ease-in-out z-40 bg-yellow-50 w-full lg:w-auto absolute lg:static top-full left-0 px-6 py-4 lg:py-0 shadow-md lg:shadow-none`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer hover:text-orange-500 ${
                pathname === item.path && "text-orange-700 font-semibold"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
