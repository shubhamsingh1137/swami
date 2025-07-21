import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import LogoutModal from "./LogoutModal";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("profile");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") navigate("/");

    if (location.state?.tab) setActiveTab(location.state.tab);
  }, [navigate, location.state]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("storage"));
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 text-gray-800">
        {/* Sidebar fixed height and scrollable right section */}
        <div className="lg:w-1/5 sticky top-0 h-screen hidden lg:block bg-white shadow-md">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setShowLogoutConfirm={setShowLogoutConfirm}
          />
        </div>

        {/* Main Content scrolls independently */}
        <div className="w-full lg:w-4/5 overflow-y-auto h-screen px-2 ">
          <DashboardContent activeTab={activeTab} />
        </div>

        {/* Mobile Navigation */}
        <MobileNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowLogoutConfirm={setShowLogoutConfirm}
        />
      </div>

      {showLogoutConfirm && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutConfirm(false)}
        />
      )}
    </>
  );
};

export default Dashboard;
