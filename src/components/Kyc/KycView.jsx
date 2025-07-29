import React from "react";

const KycView = ({ kycData, onEdit }) => (
  <div className="bg-white p-4 rounded text-gray-800 space-y-4">
    <p>
      <strong>Aadhaar Number:</strong> {kycData?.adhar_num || "N/A"}
    </p>
    <p>
      <strong>PAN Number:</strong> {kycData?.pan_num || "N/A"}
    </p>
    <p>
      <strong>Verified By Admin:</strong>{" "}
      {kycData?.is_verified_by_admin ? (
        <span className="text-green-600 font-semibold">Yes ✅</span>
      ) : (
        <span className="text-red-600 font-semibold">No ❌</span>
      )}
    </p>

    {kycData?.adhar_front_image && (
      <div>
        <strong className="underline">Aadhaar Front:</strong>
        <div className="flex items-center justify-center">
          {" "}
          <img
            src={kycData.adhar_front_image}
            alt="Aadhaar Front"
            className="w-40 h-auto border rounded mt-2"
          />
        </div>
      </div>
    )}

    {kycData?.adhar_back_image && (
      <div>
        <strong>Aadhaar Back:</strong>
        <div className="flex items-center justify-center">
          {" "}
          <img
            src={kycData.adhar_back_image}
            alt="Aadhaar Back"
            className="w-40 h-auto border rounded mt-2"
          />
        </div>
      </div>
    )}

    {kycData?.pan_image && (
      <div>
        <strong>PAN Card:</strong>
        <div className="flex items-center justify-center">
          {" "}
          <img
            src={kycData.pan_image}
            alt="PAN Card"
            className="w-40 h-auto border rounded mt-2"
          />
        </div>
      </div>
    )}

    {!kycData?.is_verified_by_admin && (
      <button
        className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded"
        onClick={onEdit}
      >
        Update KYC
      </button>
    )}
  </div>
);

export default KycView;
