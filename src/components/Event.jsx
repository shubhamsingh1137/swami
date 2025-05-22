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
      <div className="flex items-center justify-center">
        <div className="bg-yellow-50 px-4 py-8 min-h-screen shadow-2xl shadow-gray-600 w-full max-w-[1400px]">
          {/* Filter Section */}
          <div className="w-full mb-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full md:flex-1 px-6 py-4 border border-white bg-white rounded placeholder:text-xl text-base"
              />
              <button className="px-6 py-3 border text-base md:text-xl border-orange-500 text-orange-500 font-bold rounded hover:bg-orange-100">
                FIND EVENTS
              </button>
              <div className="flex space-x-4 text-sm md:text-lg font-semibold text-gray-600">
                <button className="hover:text-orange-600">List</button>
                <button className="hover:text-orange-600">Month</button>
                <button className="hover:text-orange-600">Day</button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="w-full">
            <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">
              Latest Upcoming Events
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-4 text-base md:text-2xl">
              <AiOutlineLeft />
              <FaAngleRight />
              <button className="border px-4 py-2 font-semibold">Today</button>
              <button className="bg-gray-100 px-4 py-2 text-blue-400 font-bold hover:scale-105 transition">
                NOW ONWARDS
              </button>
            </div>

            <div className="text-xl md:text-3xl font-semibold text-center mt-16 mb-5">
              Latest Past Events
            </div>

            {/* Event Cards */}
            {[...Array(3)].map((_, i) => {
              const eventData = [
                {
                  title: "सदगुरुदेव प्राकट्य दिवस",
                  date: "2023-07-15",
                  location: "लखनऊ",
                  speaker: "स्वामी अभयानंद सरस्वती जी",
                  ashram: "शौनक कुटीर आश्रम",
                  image:
                    "https://swamiabhyanand.com/uploads/WhatsApp%20Image%202023-07-14%20at%2012.29.37%20PM.jpeg",
                },
                {
                  title: "गुरु पूर्णिमा 2023",
                  date: "2023-07-03",
                  location: "लखनऊ",
                  speaker:
                    "अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद सरस्वती जी",
                  ashram: "श्री शौनक आर्ष विद्या प्रन्यास",
                  image:
                    "https://swamiabhyanand.com/uploads/Screenshot%202023-07-02%20at%204.06.17%20PM.png",
                },
                {
                  title: "गीता ज्ञान यज्ञ समारोह",
                  date: "2023-05-17",
                  location: "गाजियाबाद",
                  speaker: "स्वामी अभयानन्द सरस्वती जी महाराज",
                  ashram: "मीरा संकीर्तन मण्डली वसुंधरा गाजियाबाद",
                  image:
                    "https://swamiabhyanand.com/uploads/1CC20545-79EE-4343-9B31-3B2FF6FBD15D.png",
                },
              ];

              const { title, date, location, speaker, ashram, image } =
                eventData[i];

              return (
                <div
                  key={i}
                  className="w-full mx-auto mt-10 shadow-2xl shadow-gray-600 rounded overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row-reverse">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-80">
                      <img
                        src={image}
                        alt="Event"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 p-6 space-y-4 text-base md:text-xl">
                      <p className="text-2xl md:text-3xl font-extrabold text-black">
                        {title}
                      </p>

                      <div className="flex items-start gap-3">
                        <FaCalendarAlt className="mt-1 text-orange-400" />
                        <p>{date}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="mt-1 text-orange-400" />
                        <p>{location}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaMicrophone className="mt-1 text-orange-400" />
                        <p className="underline">{speaker}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <TfiHeadphoneAlt className="mt-1 text-orange-400" />
                        <p>{ashram}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <TbHandClick className="mt-1 text-orange-400" />
                        <p className="font-semibold hover:underline cursor-pointer">
                          Know More
                        </p>
                      </div>

                      {/* Share */}
                      <div className="pt-6">
                        <p className="text-xl md:text-2xl font-bold mb-3">
                          Share This Event with Others
                        </p>
                        <div className="flex text-orange-500 gap-4 text-2xl">
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
