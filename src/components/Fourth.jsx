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
      <section className="bg-[#fefee9] py-10 px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src={logo}
            alt="Blog Logo"
            className="w-16 h-16 lg:w-30 lg:h-30 mb-2"
          />
          <h2 className="text-2xl lg:text-5xl font-semibold text-gray-600">
            Latest From Our Blog
          </h2>
        </div>

        <div className="max-w-10xl  grid md:grid-cols-2 gap-15 ">
          <div className="w-full">
            <img
              src={swamiPic6}
              alt="Blog"
              className="w-full lg:h-140  rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-10">
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
              <div key={i} className="flex items-center space-x-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 lg:w-20 lg:h-20"
                />
                <span className="text-lg lg:text-2xl lg:font-bold font-medium text-black">
                  {item.title}
                </span>
              </div>
            ))}

            <div className="pt-6 lg:-ml-180 flex items-center justify-center  ">
              <button
                onClick={() => navigate("/blog")}
                className="border lg:text-3xl cursor-pointer border-red-500 text-red-600 px-6 py-2 rounded-md hover:bg-red-600 hover:text-white transition"
              >
                Read All
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fourth;
