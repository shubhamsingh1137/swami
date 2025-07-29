import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaIdCard,
  FaDonate,
  FaCog,
  FaSignOutAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { motion } from "framer-motion";

const Sidebar = ({ activeTab, setActiveTab, setShowLogoutConfirm }) => {
  const NavButton = ({ tab, icon, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 w-full text-left ${
        activeTab === tab
          ? "bg-blue-600 text-white hover:scale-105 transition-transform duration-500 ease-in-out"
          : "text-black hover:bg-blue-700 hover:text-white hover:scale-105 transition-transform duration-500 ease-in-out"
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <div className="hidden lg:flex w-93 h-screen bg-gradient-to-br from-orange-400 via-yellow-200 to-pink-300 text-gray-800 flex-col justify-between py-6 shadow-5xl">
      <div className="px-6">
        <div className="text-center mb-6">
          <Link to="/" className="group inline-block relative">
            <div className="relative w-30 h-30 rounded-full overflow-hidden border-4 border-orange-500 group-hover:border-orange-600 transition duration-300 shadow-md hover:shadow-xl">
              <img
                src="/logoswami.png"
                alt="Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
          <h3 className="font-bold text-lg mt-4 hover:scale-105 transition-transform duration-500 ease-in-out">
            स्वामी अभयानन्द सरस्वती जी महाराज
          </h3>
          <div className="mt-5 space-y-2 text-gray-800 text-[15px]">
            <p className="flex items-center gap-2 hover:scale-105 transition-transform duration-500 ease-in-out">
              <FaEnvelope className="text-blue-600" /> swamiabhyanand@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:scale-105 transition-transform duration-500 ease-in-out">
              <FaPhone className="text-green-600" /> +91 8881810100
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <NavButton
            tab="profile"
            icon={<FaUser className="text-red-700" />}
            label={<span className=" font-bold">My Profile</span>}
          />
          <NavButton
            tab="kyc"
            icon={<FaIdCard className="text-blue-700" />}
            label={<span className=" font-bold">KYC Information</span>}
          />
          <NavButton
            tab="donation"
            icon={<FaDonate className="text-green-700" />}
            label={<span className=" font-bold">Donation History</span>}
          />
          <NavButton
            tab="eventdashboard"
            icon={<MdDashboard className="text-yellow-500" />}
            label={<span className=" font-bold">Dashboard</span>}
          />
          <NavButton
            tab="settings"
            icon={<FaCog className="text-pink-700" />}
            label={<span className=" font-bold">Setting</span>}
          />
        </div>
      </div>

      <div className="px-6">
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="flex items-center gap-3 mt-6 text-gray-800 font-bold hover:text-white px-4 py-2 rounded-lg hover:bg-red-500 hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          <FaSignOutAlt className="text-orange-700" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
