import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import logo from "../assets/Images/logoswami.png";
import swamiPic5 from "../assets/Images/swami_pic5.jpg";
const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userInitial, setUserInitial] = useState(null);

  const baseURL = "https://m1blog.aaragroups.com";
  const token = "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1";

  const profileRef = useRef(null);

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
        setEditMode(false);
      } else {
        toast.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while sending OTP"
      );
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
        const name = response.data.data?.name || "U";
        setUserInitial(name.charAt(0).toUpperCase());
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("storage"));
        navigate("/dashboard");
      } else {
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid OTP or something went wrong"
      );
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const isLogged = localStorage.getItem("isLoggedIn") === "true";
      if (!isLogged) {
        setIsVerified(false);
        setUserInitial(null);
        setMobile("");
        setOtp("");
        setOtpSent(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    if (isLogged) {
      setIsVerified(true);
      setUserInitial("U");
    } else {
      setIsVerified(false);
      setUserInitial(null);
      setMobile("");
      setOtp("");
      setOtpSent(false);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Gallery", path: "/gallary" },
    { label: "Donate", path: "/donate" },
    { label: "Event", path: "/event" },
    { label: "E-Books", path: "/ebooks" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-orange-500 text-white flex justify-between items-center gap-4 px-4 py-2 text-sm md:text-base lg:text-lg font-bold shadow-2xl shadow-orange-800">
        <p>Email: swamiabhyanand@gmail.com</p>
        <p>Call Now! 8881810100</p>
      </div>

      {/* Main Nav */}
      <div className="bg-yellow-50 px-4 py-4 flex flex-col lg:flex-row lg:items-center justify-between lg:justify-around relative">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Swami Logo"
            className="mx-auto mb-4 w-16 h-16 lg:w-20 lg:h-20 hover:scale-105 transition-transform duration-500 ease-in-out  border-5 border-orange-500 rounded-full"
          />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="lg:hidden absolute top-8 right-4 z-50 border border-black p-1 rounded">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX size={30} className="text-black" />
            ) : (
              <HiMenuAlt3 size={30} className="text-black" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-5 lg:gap-10 text-gray-700 font-medium text-lg lg:text-xl transition-all duration-300 ease-in-out z-40 bg-yellow-50 w-full lg:w-auto absolute lg:static top-full left-0 px-6 py-4 lg:py-0 shadow-md lg:shadow-none`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer hover:text-orange-500 ${
                pathname === item.path && "text-orange-700 font-semibold"
              }`}
            >
              {item.label}
            </li>
          ))}

          {/* Profile Login Trigger */}
          <div className="relative" ref={profileRef}>
            <div
              onClick={() => {
                const isLogged = localStorage.getItem("isLoggedIn") === "true";
                if (isLogged) {
                  if (pathname !== "/dashboard") {
                    navigate("/dashboard");
                  }
                } else {
                  setShowLogin(!showLogin);
                }
              }}
            >
              {userInitial ? (
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold cursor-pointer">
                  {userInitial}
                </div>
              ) : (
                <CgProfile className="size-7 hover:text-orange-500 cursor-pointer" />
              )}
            </div>
            {showLogin && !isVerified && (
              <div className="absolute top-10 right-4 w-[520px] bg-white rounded-xl shadow-2xl z-50 flex overflow-hidden border border-gray-300">
                {/* Left Small Image */}
                <div className="w-1/3 bg-gray-100 flex items-center justify-center p-3">
                  <img
                    src={swamiPic5}
                    alt="Swami"
                    className="w-[150px] h-[240px] object-cover  border-4 border-orange-500 rounded-2xl shadow-md"
                  />
                </div>

                {/* Right Form */}
                <div className="w-2/3 p-6 space-y-4 flex flex-col justify-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Welcome</h2>
                    <p className="text-sm text-gray-500">
                      Sign in 
                    </p>
                  </div>

                  {!otpSent || editMode ? (
                    <>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="border rounded-md px-2 py-2 text-sm w-28"
                        >
                          <option value="+91">IN (+91)</option>
                          <option value="+1">US (+1)</option>
                          <option value="+44">UK (+44)</option>
                          <option value="+61">AU (+61)</option>
                          <option value="+81">JP (+81)</option>
                          <option value="+971">AE (+971)</option>
                        </select>

                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="flex-1 border px-3 py-2 rounded-md text-sm"
                        />
                      </div>

                      <button
                        onClick={handleSendOtp}
                        className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-md font-semibold"
                      >
                        Send OTP
                      </button>
                    </>
                  ) : !isVerified ? (
                    <>
                      <p className="text-green-600 text-sm">
                        OTP sent to{" "}
                        <strong>
                          {countryCode} {mobile}
                        </strong>
                      </p>
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="border px-4 py-2 rounded-md text-sm w-full"
                      />
                      <button
                        onClick={handleVerifyOtp}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold w-full"
                      >
                        Verify OTP
                      </button>
                      <button
                        onClick={() => setEditMode(true)}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Edit Mobile Number
                      </button>
                    </>
                  ) : (
                    <p className="text-green-700 font-bold text-lg">
                      Mobile Number Verified ✅
                    </p>
                  )}

                  <p className="text-xs text-gray-500">
                    By signing in, you accept our{" "}
                    <span className="text-blue-500 underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Nav;
