import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Vidioimage from "./Vidioimage";
import logo from "../assets/Images/logoswami.png";

const Donate = () => {
  const [donationData, setDonationData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const baseURL = "https://m1blog.aaragroups.com";
  const token = "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(`${baseURL}/blog/content-writer-api/`, {
          headers: { Authorization: token },
        });
        const donationItem = res.data.data.find(
          (item) => item.title?.toLowerCase() === "donation"
        );
        setDonationData(donationItem?.content || {});
      } catch (err) {
        console.error("Error fetching donation data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  const handleDonateClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/payment");
    } else {
      setShowOtpDialog(true);
    }
  };

  const handleSendOtp = async () => {
    const fullPhone = `${countryCode}${mobile}`;
    if (mobile.length < 10) {
      toast.error("Enter a valid mobile number");
      return;
    }
    try {
      const response = await axios.post(
        `${baseURL}/send-otp/`,
        { phone: fullPhone },
        { headers: { Authorization: token } }
      );
      if (response.data.response_code === 200) {
        toast.success("OTP Sent Successfully");
        setOtpSent(true);
        setOtp("");
      } else {
        toast.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Something went wrong while sending OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/user-sign-up-or-signin-api/`,
        {
          phone: `${countryCode}${mobile}`,
          otp: otp,
        },
        { headers: { Authorization: token } }
      );

      if (response.data.response_code === 200) {
        toast.success("OTP Verified Successfully");
        localStorage.setItem("token", response?.data?.key);
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("storage"));
        setShowOtpDialog(false);
        navigate("/payment");
      } else {
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong during verification"
      );
    }
  };

  return (
    <div className="bg-white relative">
      {/* Logo */}
      <div className="flex justify-center pt-5">
        <img
          src={logo}
          alt="logo"
          className="h-16 sm:h-20 lg:h-30 w-auto mb-2 border-5 border-orange-500 rounded-full hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Page Heading */}
      <div className="text-center mt-2">
        <h1 className="text-center text-3xl lg:text-4xl font-bold hover:scale-105 transition-transform duration-500 ease-in-out">
          Donate
        </h1>
      </div>

      {/* Main Section */}
      <div className="bg-[#fcfce9] py-16 px-4 md:px-10 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Swami Logo"
              className="w-[250px] md:w-[300px] lg:w-[500px] shadow-xl rounded"
            />
          </div>

          {/* Right Section */}
          <div>
            {loading ? (
              <p className="text-xl text-gray-600 text-center md:text-left">
                Loading...
              </p>
            ) : donationData ? (
              <>
                <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4 hover:scale-105 transition-transform duration-500 ease-in-out">
                  🙏 वेदांत के सेवाकार्यों में दें अपना सहयोग
                </h2>
                <div
                  className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4 hover:scale-105 transition-transform duration-500 ease-in-out"
                  dangerouslySetInnerHTML={{
                    __html:
                      donationData[
                        "🙏 वेदांत के सेवाकार्यों में दें अपना सहयोग"
                      ],
                  }}
                />
              </>
            ) : (
              <p className="text-red-500">Donation data not available.</p>
            )}
          </div>
        </div>

        {/* Section 2 */}
        {donationData?.["❤️ कैसे करें दान?"] && (
          <div className="mt-20 max-w-5xl mx-auto hover:scale-105 transition-transform duration-500 ease-in-out">
            <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4 text-center md:text-left">
              ❤️ कैसे करें दान?
            </h2>
            <div
              className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4 hover:scale-105 transition-transform duration-500 ease-in-out"
              dangerouslySetInnerHTML={{
                __html: donationData["❤️ कैसे करें दान?"],
              }}
            />
            <div className="flex justify-center md:justify-start mt-6">
              <button
                onClick={handleDonateClick}
                className="text-lg md:text-xl px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Video / Image Section */}
      <Vidioimage group="donate" />

      {/* OTP Dialog */}
      {showOtpDialog && (
        <div className="fixed inset-0  flex items-center justify-center z-[999]">
          <div className="bg-white w-[400px] md:w-[500px] rounded-lg shadow-xl p-6 relative">
            <button
              className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-600"
              onClick={() => setShowOtpDialog(false)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold text-center mb-4 text-orange-600">
              Login to Donate
            </h3>

            {!otpSent ? (
              <>
                <div className="flex mb-4">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="border rounded px-2 mr-2"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile Number"
                    className="border px-4 py-2 rounded w-full"
                  />
                </div>
                <button
                  onClick={handleSendOtp}
                  className="bg-orange-500 hover:bg-orange-600 text-white py-2 w-full rounded text-lg font-semibold"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <p className="text-green-600 mb-2">
                  OTP sent to {countryCode} {mobile}
                </p>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="border px-4 py-2 rounded w-full mb-4"
                />
                <button
                  onClick={handleVerifyOtp}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 w-full rounded text-lg font-semibold"
                >
                  Verify OTP
                </button>
                <button
                  onClick={() => {
                    setOtpSent(false);
                    setOtp("");
                  }}
                  className="text-sm text-blue-600 mt-2 underline"
                >
                  Edit Mobile Number
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Donate;
