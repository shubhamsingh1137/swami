import React, { useEffect, useState } from "react";

// Main App component to render the Profile
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter">
      <Profile />
    </div>
  );
}

// Lucide React icon for Edit (assuming it's loaded via CDN or available)
// For demonstration, we'll use inline SVGs for icons.
// In a real React app, you would typically import { Edit } from 'lucide-react';
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
  // Initialize profileData state to null, so we can show a loading/no data message
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Attempt to retrieve profile data from localStorage
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      try {
        // Parse the stored JSON string back into an object
        setProfileData(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing profile data from localStorage:", error);
        // Handle corrupted data or clear it if necessary
        localStorage.removeItem("profileData");
        setProfileData(null); // Reset to null if data is corrupted
      }
    }
    // If no data is found in localStorage, no default data is set.
    // profileData will remain null, leading to the loading/no data message being displayed.
  }, []); // Empty dependency array means this effect runs once on component mount

  // Display a message if profileData is still null (e.g., while loading or if no data is found)
  if (!profileData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter text-gray-400">
        Loading profile data or no data found...
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl space-y-6">
      {/* My Profile Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

      {/* Profile Header Card */}
      <div className="bg-orange-500 rounded-xl shadow-lg p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Profile Picture Placeholder */}
          <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold">
            {profileData.firstName.charAt(0)}
            {profileData.lastName.charAt(0)}
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-800">
              {profileData.firstName} {profileData.lastName}
            </div>
            <div className="text-gray-800">{profileData.email}</div>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200">
          <EditIcon />
          <span>Edit</span>
        </button>
      </div>

      {/* About Section Card */}
      <div className="bg-orange-500 rounded-xl shadow-lg p-6 ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">About</h2>
          <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200">
            <EditIcon />
            <span>Edit</span>
          </button>
        </div>
        <p className="text-gray-800">{profileData.description}</p>
      </div>

      {/* Personal Details Section Card */}
      <div className="bg-orange-500 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Personal Details
          </h2>
          <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200">
            <EditIcon />
            <span>Edit</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800">
          {/* First Name */}
          <div>
            <div className="text-sm font-medium text-gray-800">First Name</div>
            <div className="text-gray-800">{profileData.firstName}</div>
          </div>
          {/* Last Name */}
          <div>
            <div className="text-sm font-medium text-gray-800">Last Name</div>
            <div className="text-gray-800">{profileData.lastName}</div>
          </div>
          {/* Email */}
          <div>
            <div className="text-sm font-medium text-gray-800">Email</div>
            <div className="text-gray-800">{profileData.email}</div>
          </div>
          {/* Phone Number */}
          <div>
            <div className="text-sm font-medium text-gray-800">
              Phone Number
            </div>
            <div className="text-gray-800">{profileData.mobile}</div>
          </div>
          {/* Gender */}
          <div>
            <div className="text-sm font-medium text-gray-800">Gender</div>
            <div className="text-gray-800">{profileData.sex}</div>
          </div>
          {/* Date of Birth */}
          <div>
            <div className="text-sm font-medium text-gray-800">
              Date of Birth
            </div>
            <div className="text-gray-800">{profileData.dateOfBirth}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
