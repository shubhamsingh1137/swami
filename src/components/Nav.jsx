import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

  // ✅ Verify OTP
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
        window.dispatchEvent(new Event("storage")); // notify App
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

  // ✅ Handle logout via storage update
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

  // ✅ Initialize state on mount
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
            src="https://swamiabhyanand.com/images/pic1.png"
            alt="Logo"
            className="h-20 w-auto object-contain"
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

          {/* Profile or Initial */}
          <div
            className="relative"
            onMouseEnter={() => setShowLogin(true)}
            onMouseLeave={() => setShowLogin(false)}
          >
            {userInitial ? (
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">
                {userInitial}
              </div>
            ) : (
              <CgProfile className="size-7 hover:text-orange-500 cursor-pointer" />
            )}

            {showLogin && !isVerified && (
              <div className="absolute top-8 right-0 w-[650px] bg-white rounded-lg shadow-2xl z-50 flex">
                {/* Left Image */}
                <div className="w-1/2 p-4 bg-gray-100 flex flex-col justify-center items-center">
                  <img
                    src="https://swamiabhyanand.com/images/_DSC2502.JPG"
                    alt="Swami"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Right Form */}
                <div className="w-full p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Welcome
                  </h2>
                  <p className="text-xl text-gray-600 mb-3">Sign in</p>

                  {!otpSent || editMode ? (
                    <>
                      <div className="flex">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="border rounded  mb-3 w-40"
                        >
                          <option value="+91">🇮🇳 (+91) India</option>
                          <option value="+1">🇺🇸 (+1) USA</option>
                          <option value="+44">🇬🇧 (+44) UK</option>
                          <option value="+61">🇦🇺 (+61) Australia</option>
                          <option value="+81">🇯🇵 (+81) Japan</option>
                          <option value="+49">🇩🇪 (+49) Germany</option>
                          <option value="+86">🇨🇳 (+86) China</option>
                          <option value="+971">🇦🇪 (+971) UAE</option>
                          <option value="+880">🇧🇩 (+880) Bangladesh</option>
                          <option value="+92">🇵🇰 (+92) Pakistan</option>
                          <option value="+33">🇫🇷 (+33) France</option>
                          <option value="+39">🇮🇹 (+39) Italy</option>
                          <option value="+34">🇪🇸 (+34) Spain</option>
                          <option value="+7">🇷🇺 (+7) Russia</option>
                          <option value="+82">🇰🇷 (+82) South Korea</option>
                          <option value="+966">🇸🇦 (+966) Saudi Arabia</option>
                          <option value="+20">🇪🇬 (+20) Egypt</option>
                          <option value="+27">🇿🇦 (+27) South Africa</option>
                          <option value="+234">🇳🇬 (+234) Nigeria</option>
                          <option value="+55">🇧🇷 (+55) Brazil</option>
                          <option value="+351">🇵🇹 (+351) Portugal</option>
                          <option value="+48">🇵🇱 (+48) Poland</option>
                        </select>
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="border px-6 py-2 rounded mb-3 w-full"
                        />
                      </div>
                      <button
                        onClick={handleSendOtp}
                        className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
                      >
                        Submit
                      </button>
                    </>
                  ) : !isVerified ? (
                    <>
                      <p className="text-green-600 font-semibold mb-2">
                        OTP sent to {countryCode} {mobile}
                      </p>
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="border px-3 py-2 rounded mb-3"
                      />
                      <button
                        onClick={handleVerifyOtp}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
                      >
                        Verify OTP
                      </button>
                      <button
                        onClick={() => setEditMode(true)}
                        className="mt-2 text-sm text-blue-500 underline"
                      >
                        Edit Mobile Number
                      </button>
                    </>
                  ) : (
                    <p className="text-green-700 font-bold text-lg">
                      Mobile Number Verified ✅
                    </p>
                  )}

                  <p className="text-xs text-gray-500 mt-4">
                    By signing in, you confirm you've accepted our{" "}
                    <span className="text-blue-500 underline cursor-pointer">
                      Privacy & Policy
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
