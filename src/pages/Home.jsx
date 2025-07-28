import React, { useState } from "react";
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Sixth from "../components/Sixth";
import Seventh from "../components/Seventh";
import Eighth from "../components/Eighth";
import Ninth from "../components/Ninth";
import Latest_event from "../components/Latest_event";
import Image_slider from "../components/Image_slider";
import Whatapps from "../components/Whatapps";
import Vidioimage from "../components/Vidioimage";
import MobileNav from "../components/Dashboard/MobileNav";
import Profile from "../components/Profile";
import Kyc from "../components/Kyc/Kyc";
import Paymenthistory from "../components/Paymenthistory";
import Eventdashboard from "../components/Eventdashboard";
import Setting from "../components/Setting";

// Import Dashboard Tabs

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="relative min-h-screen pb-16 overflow-x-hidden">
      {/* Show Home Sections only if activeTab is 'home' */}
      {activeTab === "home" && (
        <>
          <First />
          <Second />
          <Third />
          <Fourth />
          <Latest_event />
          <Fifth />
          <Sixth />
          <Vidioimage />
          <Whatapps />
        </>
      )}

      {/* Conditionally Render Dashboard Tabs */}
      {isLoggedIn && (
        <>
          {activeTab === "profile" && <Profile />}
          {activeTab === "kyc" && <Kyc />}
          {activeTab === "donation" && <Paymenthistory />}
          {activeTab === "eventdashboard" && <Eventdashboard />}
          {activeTab === "settings" && <Setting />}

          <MobileNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setShowLogoutConfirm={setShowLogoutConfirm}
          />
        </>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 backdrop-blur-sm  flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <p className="mb-4 text-lg font-semibold">Logout?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  window.location.href = "/";
                }}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
