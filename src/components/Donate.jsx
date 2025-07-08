import React from "react";
import Nav from "./Nav";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";
import LatestEvents from "./Latest_event";
import Vidioimage from "./Vidioimage";

const Donate = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png"></img>
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>Donate</p>
      </div>

      <div className="">
        <div className="bg-[#fcfce9] py-12 px-10 md:px-8 mt-10">
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Left: Image */}
            <div className="">
              <img
                src="https://swamiabhyanand.com/images/pic1.png"
                alt="Swami Logo"
                className="w-[250px] md:w-[300px] lg:w-[950px] shadow-2xl shadow-gray-500 rounded-"
              />
            </div>
            {/* Right: Text Content */}
            <div className="text-center md:text-left">
              <div className="flex items-center lg:pl-25">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">
                  Raising Human Consciousness
                </h2>
              </div>
              <div className="flex items-center justify-center pl-10">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed lg:text-xl mt-5 ">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <div className="flex justify-center pl-16">
                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-realxed mb-6">
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
              </div>
              <div className="flex items-center justify-center lg:mt-10">
                <button className=" lg: text-2xl px-5 py-4 border cursor-pointer border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300 transform  hover:scale-105 rounded">
                  CLICK HERE
                </button>
              </div>
            </div>
            <div>
              <div className="text-center md:text-left">
                <div className="flex items-center lg:pl-30">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">
                    Raising Human Consciousness
                  </h2>
                </div>
                <div className="flex items-center justify-center pl-">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed lg:text-xl mt-5 ">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
                <div className="flex justify-center pl-">
                  <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-realxed mb-6">
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                    dapibus leo.
                  </p>
                </div>
                <div className="flex items-center justify-center lg:mt-10">
                  <button className=" lg: text-2xl px-5 py-4 border cursor-pointer border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300 hover:scale-105 rounded">
                    CLICK HERE
                  </button>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="">
                <img
                  src="https://swamiabhyanand.com/images/pic1.png"
                  alt="Swami Logo"
                  className="w-[250px] md:w-[300px] lg:w-[950px] shadow-2xl shadow-gray-500 rounded-"
                />
              </div>
            </div>
          </div>
        </div>
        <Vidioimage group="donate" />
      </div>
    </div>
  );
};

export default Donate;
