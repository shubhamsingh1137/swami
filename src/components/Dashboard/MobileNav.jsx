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

  const MobileNavButton = ({ tab, icon, label }) => {
    const isActive = activeTab === tab;

    const handleClick = () => {
      if (tab === "logout") {
        setShowLogoutConfirm(true);
      } else if (tab === "home") {
        navigate("/");
      } else {
        setActiveTab(tab);
      }
    };

    return (
      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-center px-2 py-2 flex-1 group transition-all duration-200"
      >
        <div className="mb-1 text-red-600">{icon}</div>
        <span
          className={`text-[10px] font-semibold ${
            isActive
              ? "text-yellow-800"
              : "text-gray-500 group-hover:text-gray-700"
          }`}
        >
          {label}
        </span>
      </button>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-br from-orange-400 via-yellow-200 to-pink-300 border-t border-gray-300 flex justify-around items-center h-16 shadow-lg">
      <MobileNavButton tab="home" icon={<FaHome size={20} />} label="Home" />
      <MobileNavButton
        tab="profile"
        icon={<FaUser size={20} />}
        label="Profile"
      />
      <MobileNavButton
        tab="kyc"
        icon={<FaIdCard size={20} />}
        label="KYC Info"
      />
      <MobileNavButton
        tab="donation"
        icon={<FaDonate size={20} />}
        label="Donation History"
      />
      <MobileNavButton
        tab="eventdashboard"
        icon={<MdDashboard size={20} />}
        label="Dashboard"
      />
      <MobileNavButton
        tab="settings"
        icon={<FaCog size={20} />}
        label="Setting"
      />
      <MobileNavButton
        tab="logout"
        icon={<FaSignOutAlt size={20} />}
        label="Logout"
      />
    </div>
  );
};

export default MobileNav;
