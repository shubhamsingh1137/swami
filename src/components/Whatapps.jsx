import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Whatapps = () => {
  return (
    <div>
      <div className="fixed bottom-20 right-1 ">
        <div className="bg-green-500 p-2 rounded-r-xl cursor-pointer hover:bg-green-600 shadow-2xl shadow-green-800">
          <a
            href="https://www.whatsapp.com" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <IoLogoWhatsapp className="text-white text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whatapps;
