import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Kyc = () => {
  const [kycExists, setKycExists] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [kycData, setKycData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const fetchKycData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://m1blog.aaragroups.com/kyc-api/",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data?.response_code === 200 && response.data.data) {
        const data = response.data.data;
        setKycExists(true);
        setKycData(data);
        setEditMode(false);

        formik.setValues({
          aadhaarNumber: data.adhar_num || "",
          panNumber: data.pan_num || "",
          aadhaarFront: null,
          aadhaarBack: null,
          panCardPic: null,
        });
      } else {
        setKycExists(false);
      }
    } catch (err) {
      toast.error("Failed to fetch KYC data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKycData();
  }, []);

  const formik = useFormik({
    initialValues: {
      aadhaarNumber: "",
      panNumber: "",
      aadhaarFront: null,
      aadhaarBack: null,
      panCardPic: null,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      aadhaarNumber: Yup.string().required("Aadhaar number is required"),
      panNumber: Yup.string().required("PAN number is required"),
      aadhaarFront: Yup.mixed().required("Aadhaar front image is required"),
      aadhaarBack: Yup.mixed().required("Aadhaar back image is required"),
      panCardPic: Yup.mixed().required("PAN card image is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      try {
        const formData = new FormData();
        formData.append("adhar_num", values.aadhaarNumber);
        formData.append("pan_num", values.panNumber);
        formData.append("adhar_front_image", values.aadhaarFront);
        formData.append("adhar_back_image", values.aadhaarBack);
        formData.append("pan_image", values.panCardPic);

        const response = await axios.post(
          "https://m1blog.aaragroups.com/kyc-api/",
          formData,
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          toast.success("Your KYC is successfully updated.");
          setKycExists(true);
          setEditMode(false);
          resetForm();
          await fetchKycData();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status === 400 &&
          error.response.data?.message
        ) {
          toast.warning(error.response.data.message);
        } else {
          toast.error(
            "Submission failed: " +
              (error.response?.data?.message || error.message)
          );
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="space-y-6 bg-orange-500 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">KYC Information</h2>
      <ToastContainer position="top-center" autoClose={3000} />
      {kycExists && !editMode ? (
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
              <strong>Aadhaar Front:</strong>
              <img
                src={kycData.adhar_front_image}
                alt="Aadhaar Front"
                className="w-40 h-auto border rounded mt-2"
              />
            </div>
          )}

          {kycData?.adhar_back_image && (
            <div>
              <strong>Aadhaar Back:</strong>
              <img
                src={kycData.adhar_back_image}
                alt="Aadhaar Back"
                className="w-40 h-auto border rounded mt-2"
              />
            </div>
          )}

          {kycData?.pan_image && (
            <div>
              <strong>PAN Card:</strong>
              <img
                src={kycData.pan_image}
                alt="PAN Card"
                className="w-40 h-auto border rounded mt-2"
              />
            </div>
          )}

          {!kycData?.is_verified_by_admin && (
            <button
              className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded"
              onClick={() => setEditMode(true)}
            >
              Update KYC
            </button>
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Kyc;
