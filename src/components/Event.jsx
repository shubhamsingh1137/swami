import React from "react";
import Nav from "./Nav";

import { AiOutlineLeft } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";
import LatestEvents from "./Latest_event";

const Event = () => {
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center">
        <div className="bg-yellow-50 px-4 py-8 min-h-screen lg:h-500 shadow-2xl shadow-gray-600 lg:w-400 ">
          {/* Top Filter Section */}
          <div className="max-w-6xl mx-auto mb-6">
            <div className="flex  md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 ">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full md:flex-1 px-10 py-5 border border-white bg-white rounded placeholder:text-2xl"
              />
              <button className="px-6 py-2 border lg:ml-10 lg:text-3xl border-orange-500 text-orange-500 font-bold rounded hover:bg-orange-100">
                FIND EVENTS
              </button>
              <div className="flex space-x-10 text-sm lg:text-3xl font-semibold text-gray-600 lg:ml-10">
                <button className="hover:text-orange-600">List</button>
                <button className="hover:text-orange-600">Month</button>
                <button className="hover:text-orange-600">Day</button>
              </div>
            </div>
            <LatestEvents />
          </div>
          {/* Upcoming Events */}
          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-2xl lg:text-5xl font-semibold text-center mb-6">
              Latest Upcoming Events
            </h2>
            <div className="flex justify-start space-x-4 mt-10 lg:text-4xl">
              <AiOutlineLeft />
              <FaAngleRight />
              <button className="border px-4 py-2 font-semibold">Today</button>
              <button className="bg-gray-100 px-4 py-2 text-2xl text-blue-400 font-bold hover:scale-105">
                NOW ONWARDS
              </button>
            </div>
            <div className="lg:text-5xl font-semibold flex justify-center mt-20 mb-5">
              <p>Latest Past Events</p>
            </div>
            {/* card1 */}{" "}
            <div className="max-w-6xl mx-auto mt-10 shadow-2xl shadow-gray-600 rounded overflow-hidden">
              <div className="flex flex-col lg:flex-row-reverse">
                {/* Right: Image Box */}
                <div className="w-full lg:w-1/2 h-80 mr-5 mt-5">
                  <img
                    src="https://swamiabhyanand.com/uploads/WhatsApp%20Image%202023-07-14%20at%2012.29.37%20PM.jpeg"
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Left: Event Content */}
                <div className="w-full lg:w-1/2 p-6 space-y-4">
                  <p className="text-3xl lg:text-4xl font-extrabold text-black">
                    सदगुरुदेव प्राकट्य दिवस
                  </p>

                  <div className="text-2xl flex items-start gap-3">
                    <FaCalendarAlt className="mt-1 text-orange-400" />
                    <p>2023-07-15</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-orange-400" />
                    <p>लखनऊ</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <FaMicrophone className="mt-1 text-orange-400" />
                    <p className="underline">स्वामी अभयानंद सरस्वती जी</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <TfiHeadphoneAlt className="mt-1 text-orange-400" />
                    <p>शौनक कुटीर आश्रम</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <TbHandClick className="mt-1 text-orange-400" />
                    <p className="font-semibold hover:underline cursor-pointer">
                      Know More
                    </p>
                  </div>

                  {/* Share Section */}
                  <div className="pt-6">
                    <p className="text-2xl lg:text-3xl font-bold mb-3">
                      Share This Event with Others
                    </p>
                    <div className="flex text-2xl text-orange-500 gap-4">
                      <FaWhatsapp />
                      <FaFacebook />
                      <FaInstagram />
                      <FaTwitter />
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="max-w-6xl mx-auto mt-10 shadow-2xl shadow-gray-600 rounded overflow-hidden">
              <div className="flex flex-col lg:flex-row-reverse">
                {/* Right: Image Box */}
                <div className="w-full lg:w-1/2 h-80 mr-5 mt-5">
                  <img
                    src="https://swamiabhyanand.com/uploads/Screenshot%202023-07-02%20at%204.06.17%20PM.png"
                    alt="Event"
                    className="w-150 h-110 object-cover"
                  />
                </div>

                {/* Left: Event Content */}
                <div className="w-full lg:w-1/2 p-6 space-y-4">
                  <p className="text-3xl lg:text-4xl font-extrabold text-black">
                    गुरु पूर्णिमा 2023
                  </p>

                  <div className="text-2xl flex items-start gap-3">
                    <FaCalendarAlt className="mt-1 text-orange-400" />
                    <p>2023-07-03</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-orange-400" />
                    <p>लखनऊ</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <FaMicrophone className="mt-1 text-orange-400" />
                    <p className="underline">
                      {" "}
                      अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद
                      सरस्वती जी
                    </p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <TfiHeadphoneAlt className="mt-1 text-orange-400" />
                    <p>श्री शौनक आर्ष विद्या प्रन्यास</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <TbHandClick className="mt-1 text-orange-400" />
                    <p className="font-semibold hover:underline cursor-pointer">
                      Know More
                    </p>
                  </div>

                  {/* Share Section */}
                  <div className="pt-6">
                    <p className="text-2xl lg:text-3xl font-bold mb-3">
                      Share This Event with Others
                    </p>
                    <div className="flex text-2xl text-orange-500 gap-4">
                      <FaWhatsapp />
                      <FaFacebook />
                      <FaInstagram />
                      <FaTwitter />
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="max-w-6xl mx-auto mt-10 shadow-2xl shadow-gray-600 rounded overflow-hidden">
              <div className="flex flex-col lg:flex-row-reverse">
                {/* Right: Image Box */}
                <div className="w-full lg:w-1/2 h-80 mr-5 mt-5">
                  <img
                    src="https://swamiabhyanand.com/uploads/1CC20545-79EE-4343-9B31-3B2FF6FBD15D.png"
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Left: Event Content */}
                <div className="w-full lg:w-1/2 p-6 space-y-4">
                  <p className="text-3xl lg:text-4xl font-extrabold text-black">
                    गीता ज्ञान यज्ञ समारोह
                  </p>

                  <div className="text-2xl flex items-start gap-3">
                    <FaCalendarAlt className="mt-1 text-orange-400" />
                    <p>2023-05-17</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-orange-400" />
                    <p> गाजियाबाद</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <FaMicrophone className="mt-1 text-orange-400" />
                    <p className="underline">
                      {" "}
                      स्वामी अभयानन्द सरस्वती जी महाराज
                    </p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <TfiHeadphoneAlt className="mt-1 text-orange-400" />
                    <p>मीरा संकीर्तन मण्डली वसुंधरा गाजियाबाद</p>
                  </div>

                  <div className="text-2xl flex items-start gap-3">
                    <TbHandClick className="mt-1 text-orange-400" />
                    <p className="font-semibold hover:underline cursor-pointer">
                      Know More
                    </p>
                  </div>

                  {/* Share Section */}
                  <div className="pt-6">
                    <p className="text-2xl lg:text-3xl font-bold mb-3">
                      Share This Event with Others
                    </p>
                    <div className="flex text-2xl text-orange-500 gap-4">
                      <FaWhatsapp />
                      <FaFacebook />
                      <FaInstagram />
                      <FaTwitter />
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Seventh />
      <Eighth />
      <Ninth />
    </div>
  );
};

export default Event;
