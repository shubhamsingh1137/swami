// LogoutModal.jsx
import React from "react";

const LogoutModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
    <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Are you sure you want to logout?
      </h3>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onConfirm}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Yes, Logout
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default LogoutModal;
