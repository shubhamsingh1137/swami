import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { use } from "react";

const Second = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#FEFDE5] w-full py-10 px-4 text-center">
        <img
          src="https://swamiabhyanand.com/images/pic1.png"
          alt="Symbol"
          className="mx-auto mb-4 w-12 h-12 lg:w-30 lg:h-30"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600">
          परम पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
        </h1>

        <p className="text-md lg:text-3xl md:text-lg text-black mt-6 max-w-4xl mx-auto font-semibold leading-relaxed">
          ‘आचार्य मां विजानीयात’ गुरु को मेरा रूप ही जानो अर्थात गुरु और भगवान
          में कोई भेद नहीं है। जो गुरु-वचनों में दृढ़ विश्वास रखता है, गुरुदेव
          जिसपर प्रसन्न रहते हैं, उसे कोई विघ्न नहीं घेरते। गुरु माता-पिता-पति
          सब हैं, उनके बिना संसार में कहीं गति नहीं। गुरु सर्वज्ञेश्वर हैं और
          बाँच्छाकल्पद्रृक्ष हैं।
        </p>

        <div className="mt-6">
          <button
            onClick={() => navigate("/about")}
            className="border border-red-500 text-red-500 px-8 py-4 cursor-pointer rounded lg:text-2xl hover:bg-red-500 hover:text-white transition"
          >
            Know More
          </button>
        </div>

        <div className="mt-10">
          <img
            src="https://swamiabhyanand.com/images/pic1.png" // Replace with actual image
            alt="Symbol"
            className="mx-auto mb-2 w-10 h-10 lg:w-30 lg:h-30"
          />
          <button>
            {" "}
            <h2
              onClick={() => navigate("/about")}
              className="text-3xl lg:text-4xl font-semibold text-gray-600 cursor-pointer"
            >
              हमारे बारे में
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
