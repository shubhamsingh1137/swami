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
          if (res.data && res.data.data) {
            const data = res.data.data;
            setProfileData({
              firstName: data.first_name || "",
              lastName: data.last_name || "",
              email: data.email || "",
              phone: data.phone || "",
              gender: data.gender || "",
              state: data.state || "",
              country: data.country || "",
              description: data.address || "",
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
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter text-gray-400">
        Loading profile data...
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

      {/* Profile Header Card */}
      <div className="bg-orange-500 rounded-xl shadow-lg p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold">
            {profileData.firstName?.charAt(0)}
            {profileData.lastName?.charAt(0)}
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-800">
              {profileData.firstName} {profileData.lastName}
            </div>
            <div className="text-gray-800">{profileData.email}</div>
          </div>
        </div>
        <button
          onClick={handleEditNavigate}
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200"
        >
          <EditIcon />
          <span>Edit</span>
        </button>
      </div>

      {/* About Section */}
      <div className="bg-orange-500 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">About</h2>
          <button
            onClick={handleEditNavigate}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400"
          >
            <EditIcon />
            <span>Edit</span>
          </button>
        </div>
        <p className="text-gray-800">
          {profileData.description || "No description provided."}
        </p>
      </div>

      {/* Personal Details */}
      <div className="bg-orange-500 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Personal Details
          </h2>
          <button
            onClick={handleEditNavigate}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400"
          >
            <EditIcon />
            <span>Edit</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800">
          <div>
            <div className="text-sm font-medium">First Name</div>
            <div>{profileData.firstName}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Last Name</div>
            <div>{profileData.lastName}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Email</div>
            <div>{profileData.email}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Phone</div>
            <div>{profileData.phone}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Gender</div>
            <div>{profileData.gender}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Country</div>
            <div>{profileData.country}</div>
          </div>
          <div>
            <div className="text-sm font-medium">State</div>
            <div>{profileData.state}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
