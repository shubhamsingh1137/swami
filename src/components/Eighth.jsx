import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaMailBulkSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/logoswami.png";
import swamiPic9 from "../assets/Images/swami_pic9.png";
const Eighth = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center items-stretch gap-4 mt-2  ">
      <div className="flex-1 lg:min-w-[450px] lg:max-w-[880px] hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer bg-white shadow-2xl shadow-orange-400 p-5">
        <div className="flex justify-center mt-4">
          <img
            src={logo}
            alt="Logo"
            className="size-25 border-5 border-orange-500 rounded-full"
          />
        </div>
        <div className="text-center font-bold mt-2 ">
          <p>आचार्य महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी</p>
        </div>
        <div className="text-center font-bold mt-3  leading-relaxed">
          <p>
            ॥श्री गुरूवे नमः॥ (परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द
            सरस्वती जी महराज) कुलं पवित्रं जननी कृतार्था वसुन्धरा पुण्यवती च
            तेन। अपारसंवित्सुखसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेतः॥
            (स्कंन्दपुराणम्)
          </p>
        </div>
      </div>

      {["LUCKNOW", "MEERUT", "SITAPUR", "HARIDWAR"].map((city, i) => (
        <div
          key={i}
          className="flex-1 lg:min-w-[216px] hover:scale-105 transition-transform duration-500 ease-in-out  lg:max-w-[216px] bg-white shadow-2xl shadow-orange-400 text-black font-semibold p-5 flex flex-col justify-between"
        >
          <div className="text-center font-semibold text-xl">{city} ASHRAM</div>
          <div className="flex justify-center items-center mt-2 gap-2">
            <FaPhoneAlt className="text-orange-500" />
            <p>+91-9956578080</p>
          </div>
          <div className="flex justify-center items-center mt-2 gap-2">
            <LiaMailBulkSolid className="text-orange-500 size-5" />
            <p>info@swamiabhayanand.com</p>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <button
              onClick={() => navigate("/event")}
              className="w-40 h-12 bg-orange-900 text-white rounded hover:scale-105 transition-transform duration-300"
            >
              CLICK HERE
            </button>
            <img src={swamiPic9} alt="Ashram" className="w-20 h-20 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eighth;
