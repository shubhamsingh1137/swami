import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Whatapps = () => {
  return (
    <div>
      <div className="fixed top-1/2 right-0 ">
        <div className="bg-green-500 p-3 rounded-r-xl cursor-pointer hover:bg-green-600 shadow-2xl shadow-green-800">
          <IoLogoWhatsapp className="text-white text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default Whatapps;
