import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUser,
  FaIdCard,
  FaSignOutAlt,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";

import Kyc from "./Kyc";
import Profile from "./Profile";
import Eventdashboard from "./Eventdashboard";
import Setting from "./Setting";
import Paymenthistory from "./Paymenthistory";
import logo from "../assets/Images/logoswami.png";

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

    // Set active tab if state is passed (like from Edit button)
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

  const MobileNavButton = ({ tab, icon }) => (
    <button
      onClick={() => {
        if (tab === "logout") {
          setShowLogoutConfirm(true);
        } else {
          setActiveTab(tab);
        }
      }}
      className={`flex flex-col items-center justify-center px-2 py-2 flex-1 ${
        activeTab === tab
          ? "text-orange-500"
          : "text-gray-500 hover:text-orange-600"
      }`}
    >
      {icon}
      <span className="text-xs">
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </span>
    </button>
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-orange-400 text-gray-800">
        {/* Sidebar for Desktop */}
        <div className="hidden lg:flex w-72 bg-orange-500 text-gray-800 flex-col justify-between py-6 shadow-5xl">
          {/* Top Profile Info */}
          <div className="px-6">
            <div className="text-center mb-6">
              <img
                src={logo}
                alt="Profile"
                className="w-20 h-20 rounded-full lg:ml-20"
              />
              <div>
                <h3 className="font-bold text-lg">
                  स्वामी अभयानन्द सरस्वती जी महाराज
                </h3>
                <p className="text-[15px] mt-5 text-gray-800 underline">
                  swamiabhyanand@gmail.com
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
              <NavButton tab="profile" icon={<FaUser />} label="My Profile" />
              <NavButton tab="kyc" icon={<FaIdCard />} label="KYC" />
              <NavButton
                tab="Payment History"
                icon={<FaIdCard />}
                label="Payment History"
              />
              <NavButton
                tab="eventdashboard"
                icon={<FaClipboardList />}
                label="Dashboard"
              />
              <NavButton tab="settings" icon={<FaCog />} label="Settings" />
            </div>
          </div>

          {/* Logout Button */}
          <div className="px-6">
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center gap-3 mt-6 text-red-300 hover:text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 overflow-y-auto pb-20 lg:pb-6">
          {activeTab === "profile" && <Profile />}
          {activeTab === "kyc" && <Kyc />}
          {activeTab === "Payment History" && <Paymenthistory />}
          {activeTab === "eventdashboard" && <Eventdashboard />}
          {activeTab === "settings" && <Setting />}
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-300 flex justify-around items-center h-16 shadow-lg">
          <MobileNavButton tab="profile" icon={<FaUser size={20} />} />
          <MobileNavButton tab="kyc" icon={<FaIdCard size={20} />} />
          <MobileNavButton
            tab="Payment History"
            icon={<FaClipboardList size={20} />}
          />
          <MobileNavButton
            tab="eventdashboard"
            icon={<FaRegChartBar size={20} />}
          />
          <MobileNavButton tab="settings" icon={<FaCog size={20} />} />
          <MobileNavButton tab="logout" icon={<FaSignOutAlt size={20} />} />
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
