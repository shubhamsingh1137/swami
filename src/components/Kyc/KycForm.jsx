import React from "react";

const KycForm = ({ formik, submitting }) => (
  <form onSubmit={formik.handleSubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        name="aadhaarNumber"
        placeholder="Aadhaar Number"
        className="border p-2 rounded w-full"
        onChange={formik.handleChange}
        value={formik.values.aadhaarNumber}
      />
      <input
        type="text"
        name="panNumber"
        placeholder="PAN Number"
        className="border p-2 rounded w-full"
        onChange={formik.handleChange}
        value={formik.values.panNumber}
      />
      <input
        type="file"
        name="aadhaarFront"
        accept="image/*"
        className="border p-2 rounded w-full"
        onChange={(e) =>
          formik.setFieldValue("aadhaarFront", e.currentTarget.files[0])
        }
      />
      <input
        type="file"
        name="aadhaarBack"
        accept="image/*"
        className="border p-2 rounded w-full"
        onChange={(e) =>
          formik.setFieldValue("aadhaarBack", e.currentTarget.files[0])
        }
      />
      <input
        type="file"
        name="panCardPic"
        accept="image/*"
        className="border p-2 rounded w-full"
        onChange={(e) =>
          formik.setFieldValue("panCardPic", e.currentTarget.files[0])
        }
      />
    </div>
    <button
      type="submit"
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      disabled={submitting}
    >
      {submitting ? "Submitting..." : "Submit"}
    </button>
  </form>
);

export default KycForm;
