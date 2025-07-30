import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/logoswami.png";
import bagwatarti from "../assets/Images/bhagwat arti_pic.png";
import goshala from "../assets/Images/goshala_pic.png";
import sanskritvidhaylya from "../assets/Images/sanskrit vidyalay_pic.png";
import pustkalya from "../assets/Images/pustkalay_pic3.png";
import satsang from "../assets/Images/satsang_pic.png";
import swamiPic6 from "../assets/Images/swami_pic6.jpg";
const Fourth = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-[#fefee9] px-4">
        <div className="flex flex-col items-center text-center mb-10 ">
          <img
            src={logo}
            alt="Blog Logo"
            className="mx-auto mb-4 w-16 h-16 lg:w-30 lg:h-30 hover:scale-105 transition-transform duration-500 ease-in-out  border-5 border-orange-500 rounded-full"
          />
          <h2
            onClick={() => navigate("/blog")}
            className="text-3xl lg:text-4xl font-semibold text-gray-600 cursor-pointer hover:text-red-600 hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
          >
            हमारे ब्लॉग की नवीनतम जानकारी
          </h2>
        </div>

        <div className="max-w-10xl  grid md:grid-cols-2 gap-15 ">
          <div className="w-full">
            <img
              src={swamiPic6}
              alt="Blog"
              className="w-full lg:h-140 shadow-md hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
            />
          </div>

          <div className="space-y-10 ">
            {[
              {
                icon: goshala,
                title: "गौशाला",
              },
              {
                icon: sanskritvidhaylya,
                title: "संस्कृत विद्यालय",
              },
              {
                icon: pustkalya,
                title: "पुस्तकालय",
              },
              {
                icon: satsang,
                title: "सत्संग",
              },
              {
                icon: bagwatarti,
                title: "भगवत आरती",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 lg:w-20 lg:h-20"
                />
                <span className="text-lg lg:text-2xl lg:font-bold font-medium text-[#706962]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fourth;
