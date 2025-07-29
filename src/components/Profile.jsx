import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-edit"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://m1blog.aaragroups.com/user-sign-up-or-signin-api/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          if (res.data?.data) {
            const d = res.data.data;
            setProfileData({
              firstName: d.first_name || "",
              lastName: d.last_name || "",
              email: d.email || "",
              phone: d.phone || "",
              gender: d.gender || "",
              state: d.state || "",
              country: d.country || "",
              description: d.address || "",
            });
          }
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, []);

  const handleEditNavigate = () => {
    navigate("/dashboard", { state: { tab: "settings" } });
  };

  if (!profileData) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4 text-gray-600 text-lg">
        Loading profile data...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex justify-center p-4 sm:p-6  ">
      <div className="w-full max-w-4xl space-y-8 lg:mx-40">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-700 underline underline-offset-4 hover:scale-105 transition-transform duration-500 ease-in-out">
          My Profile
        </h1>

        {/* Profile Header */}
        <div className="bg-orange-300 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="flex items-center gap-4 ">
            <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-bold uppercase">
              {profileData.firstName?.charAt(0)}
              {profileData.lastName?.charAt(0)}
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-800">
                {profileData.firstName} {profileData.lastName}
              </div>
              <div className="text-gray-700">{profileData.email}</div>
            </div>
          </div>
          <button
            onClick={handleEditNavigate}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <EditIcon />
            <span>Edit</span>
          </button>
        </div>

        {/* About Section */}
        <div className="bg-orange-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">About</h2>
            <button
              onClick={handleEditNavigate}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <EditIcon />
              <span>Edit</span>
            </button>
          </div>
          <p className="text-gray-700">
            {profileData.description || "No description provided."}
          </p>
        </div>

        {/* Personal Details */}
        <div className="bg-orange-300 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-500 ease-in-out mb-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Personal Details
            </h2>
            <button
              onClick={handleEditNavigate}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <EditIcon />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-800 text-sm">
            <div>
              <span className="font-medium">First Name</span>
              <div>{profileData.firstName}</div>
            </div>
            <div>
              <span className="font-medium">Last Name</span>
              <div>{profileData.lastName}</div>
            </div>
            <div>
              <span className="font-medium">Email</span>
              <div>{profileData.email}</div>
            </div>
            <div>
              <span className="font-medium">Phone</span>
              <div>{profileData.phone}</div>
            </div>
            <div>
              <span className="font-medium">Gender</span>
              <div>{profileData.gender}</div>
            </div>
            <div>
              <span className="font-medium">Country</span>
              <div>{profileData.country}</div>
            </div>
            <div>
              <span className="font-medium">State</span>
              <div>{profileData.state}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
