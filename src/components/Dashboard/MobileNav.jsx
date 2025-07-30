import React from "react";
import {
  FaUser,
  FaIdCard,
  FaDonate,
  FaSignOutAlt,
  FaCog,
  FaHome,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ activeTab, setActiveTab, setShowLogoutConfirm }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) return null;

  const MobileNavButton = ({ tab, icon, label }) => {
    const isActive = activeTab === tab;

    const handleClick = () => {
      if (tab === "logout") {
        setShowLogoutConfirm(true);
      } else if (tab === "home") {
        console.log("navigate to home");
        navigate("/");
        setActiveTab("home");
      } else {
        setActiveTab(tab);
      }
    };

    return (
      <button
        onClick={handleClick}
        className={`flex flex-col items-center justify-center px-1 py-1 flex-1 transition-all duration-200 group ${
          isActive ? "bg-yellow-100 rounded-xl" : ""
        }`}
      >
        <div
          className={`mb-1 ${
            isActive
              ? "text-yellow-700"
              : "text-orange-600 group-hover:text-red-600"
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-[10px] font-semibold ${
            isActive
              ? "text-yellow-800"
              : "text-gray-500 group-hover:text-gray-800"
          }`}
        >
          {label}
        </span>
      </button>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-br from-orange-400 via-yellow-200 to-pink-300 border-t border-gray-300 flex justify-between items-center h-16 shadow-lg px-1">
      <MobileNavButton tab="home" icon={<FaHome size={18} />} label="Home" />
      <MobileNavButton
        tab="profile"
        icon={<FaUser size={18} />}
        label="Profile"
      />
      <MobileNavButton tab="kyc" icon={<FaIdCard size={18} />} label="KYC" />
      <MobileNavButton
        tab="donation"
        icon={<FaDonate size={18} />}
        label="Donate"
      />
      <MobileNavButton
        tab="eventdashboard"
        icon={<MdDashboard size={18} />}
        label="Dashboard"
      />
      <MobileNavButton
        tab="settings"
        icon={<FaCog size={18} />}
        label="Setting"
      />
      <MobileNavButton
        tab="logout"
        icon={<FaSignOutAlt size={18} />}
        label="Logout"
      />
    </div>
  );
};

export default MobileNav;
