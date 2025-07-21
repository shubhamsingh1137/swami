import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import KycForm from "./KycForm";
import KycView from "./KycView";
import { useKycFormik } from "./UseKycFormik";
import { fetchKycDataAPI, submitKycAPI } from "./KycApi";

const Kyc = () => {
  const [kycExists, setKycExists] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [kycData, setKycData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const formik = useKycFormik(onSubmit);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetchKycDataAPI(localStorage.getItem("token"));
      if (response.data?.response_code === 200) {
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
    } catch {
      toast.error("Failed to fetch KYC data.");
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(values, { resetForm }) {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("adhar_num", values.aadhaarNumber);
      formData.append("pan_num", values.panNumber);
      formData.append("adhar_front_image", values.aadhaarFront);
      formData.append("adhar_back_image", values.aadhaarBack);
      formData.append("pan_image", values.panCardPic);

      const response = await submitKycAPI(
        formData,
        localStorage.getItem("token")
      );

      const { response_code, message } = response.data;

      if (response_code === 200) {
        toast.success(message || "KYC submitted.");
        resetForm();
        setEditMode(false);
        setKycExists(true);
        fetchData();
      } else {
        if (
          message?.toLowerCase().includes("already submitted") ||
          response_code === 400
        ) {
          toast.info(message || "KYC already submitted.");
          setEditMode(false);
          setKycExists(true);
          fetchData();
        } else {
          toast.warning(message || "Something went wrong.");
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "KYC submission failed.");
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-orange-600 font-semibold text-lg">
        Loading KYC data...
      </div>
    );

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-orange-400 via-orange-200 to-orange-300 px-4 sm:px-6 py-10">
      <div className="w-full max-w-4xl space-y-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-700 underline underline-offset-4">
          KYC Information
        </h2>

        <div className="bg-orange-300 p-4 sm:p-6 rounded-lg shadow-md">
          {kycExists && !editMode ? (
            <KycView kycData={kycData} onEdit={() => setEditMode(true)} />
          ) : (
            <KycForm formik={formik} submitting={submitting} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Kyc;
