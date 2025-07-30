import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  FaUser,
  FaIdCard,
  FaSignOutAlt,
  FaDonate,
  FaEnvelope,
  FaPhone,
  FaCog,
} from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import Profile from "./Profile";
import Eventdashboard from "./Eventdashboard";
import Setting from "./Setting";
import Paymenthistory from "./Paymenthistory";
import logo from "../assets/Images/logoswami.png";
import Kyc from "./Kyc/Kyc";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("profile");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/");
    }

    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [navigate, location.state]);

  const handleLogoutConfirm = () => {
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("storage"));
    navigate("/", { replace: true });
  };

  const NavButton = ({ tab, icon, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 w-full text-left ${
        activeTab === tab
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-blue-700 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );

  const MobileNavButton = ({ tab, icon, label }) => {
    const isActive = activeTab === tab;

    return (
      <button
        onClick={() => {
          if (tab === "logout") {
            setShowLogoutConfirm(true);
          } else {
            setActiveTab(tab);
          }
        }}
        className="flex flex-col items-center justify-center px-2 py-2 flex-1 group transition-all duration-200"
      >
        {/* Icon: Always red */}
        <div className="mb-1 text-red-600">{icon}</div>

        {/* Text: Dynamic color */}
        <span
          className={`text-[10px] font-semibold text-center leading-tight transition-colors duration-200 ${
            isActive
              ? "text-yellow-800"
              : "text-gray-500 group-hover:text-gray-700"
          }`}
        >
          {label || tab.charAt(0).toUpperCase() + tab.slice(1)}
        </span>
      </button>
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 text-gray-800">
        {/* Sidebar for Desktop */}
        <div className="hidden lg:flex w-72 bg-gradient-to-br from-orange-400 via-yellow-200 to-pink-300 text-gray-800 flex-col justify-between py-6 shadow-5xl">
          <div className="px-6">
            <div className="text-center mb-6">
              <Link to="/" className="group inline-block relative">
                <div className="relative w-30 h-30 rounded-full overflow-hidden border-4 border-orange-500 group-hover:border-orange-600 transition duration-300 shadow-md hover:shadow-xl">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div>
                <h3 className="font-bold text-lg mt-4">
                  स्वामी अभयानन्द सरस्वती जी महाराज
                </h3>
                <div className="mt-5 space-y-2 text-gray-800">
                  <p className="flex items-center gap-2 text-[15px]">
                    <FaEnvelope className="text-blue-600" />
                    <span className="underline">swamiabhyanand@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2 text-[15px]">
                    <FaPhone className="text-green-600" />
                    <span className="underline">+91 8881810100</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-2">
              <NavButton
                tab="profile"
                icon={<FaUser className="text-red-700" />}
                label={
                  <span className="text-yellow-900 font-bold">My Profile</span>
                }
              />
              <NavButton
                tab="kyc"
                icon={<FaIdCard className="text-red-700" />}
                label={
                  <span className="text-yellow-900 font-bold">
                    KYC Information
                  </span>
                }
              />
              <NavButton
                tab="donation"
                icon={<FaDonate className="text-red-700" />}
                label={
                  <span className="text-yellow-900 font-bold">
                    Donation History
                  </span>
                }
              />
              <NavButton
                tab="eventdashboard"
                icon={<MdDashboard className="text-red-700" />}
                label={
                  <span className="text-yellow-900 font-bold">Dashboard</span>
                }
              />
              <NavButton
                tab="settings"
                icon={<FaCog className="text-red-700" />}
                label={
                  <span className="text-yellow-900 font-bold">Setting</span>
                }
              />
            </div>
          </div>

          {/* Logout Button */}
          <div className="px-6">
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center gap-3 mt-6 text-gray-800 font-bold hover:text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              <FaSignOutAlt className="text-red-700" /> Logout
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 overflow-y-auto pb-20 lg:pb-6">
          {activeTab === "profile" && <Profile />}
          {activeTab === "kyc" && <Kyc />}
          {activeTab === "donation" && <Paymenthistory />}
          {activeTab === "eventdashboard" && <Eventdashboard />}
          {activeTab === "settings" && <Setting />}
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-br from-orange-400 via-yellow-200 to-pink-300 border-t border-gray-300 flex justify-around items-center h-16 shadow-lg">
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
            label="Donation"
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
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Are you sure you want to logout?
            </h3>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleLogoutConfirm}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
