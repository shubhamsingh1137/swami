import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  FaAngleRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMicrophone,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";

// Loader with label component
const CircularProgressWithLabel = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} size={80} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const Event = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulateProgress = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? 90 : prev + 10));
    }, 150);

    const fetchapi = async () => {
      try {
        const response = await axios.post(
          "https://m1blog.aaragroups.com/blog/store-based-blog-list-api/",
          { store_id: 1 }
        );
        setData(response?.data?.blog_list || []);
        setProgress(100);
      } catch (error) {
        console.error("fetch failed error", error);
      } finally {
        clearInterval(simulateProgress);
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchapi();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

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

          {/* Loader */}
          {loading ? (
            <div className="flex justify-center items-center h-[300px]">
              <CircularProgressWithLabel value={progress} />
            </div>
          ) : (
            <>
              {/* Event Section */}
              <div className="w-full">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">
                  Latest Upcoming Events
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mt-4 text-base md:text-2xl">
                  <button className="border px-4 py-2 font-semibold">
                    Today
                  </button>
                  <button className="bg-gray-100 px-4 py-2 text-blue-400 font-bold hover:scale-105 transition">
                    NOW ONWARDS
                  </button>
                </div>

                <div className="text-xl md:text-3xl font-semibold text-center mt-16 mb-5">
                  Latest Past Events
                </div>

                {/* Event Cards */}
                {paginatedData.length > 0 ? (
                  paginatedData.map((event, index) => (
                    <div
                      key={index}
                      className="w-full mx-auto mt-10 shadow-2xl shadow-gray-600 rounded overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row-reverse">
                        {/* Image */}
                        <div className="w-full lg:w-1/2 h-64 sm:h-80">
                          <img
                            src={event.images}
                            alt="Event"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 p-6 space-y-4 text-base md:text-xl">
                          <p className="text-2xl md:text-3xl font-extrabold text-black">
                            {event.title}
                          </p>

                          <div className="flex items-start gap-3">
                            <FaCalendarAlt className="mt-1 text-orange-400" />
                            <p>{event.date_created}</p>
                          </div>

                          <div className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-orange-400" />
                            <p>{event.location || " लखनऊ"}</p>
                          </div>

                          <div className="flex items-start gap-3">
                            <FaMicrophone className="mt-1 text-orange-400" />
                            <p className="underline">{event.author || "N/A"}</p>
                          </div>

                          <div className="flex items-start gap-3">
                            <TfiHeadphoneAlt className="mt-1 text-orange-400" />
                            <p>{event.ashram || "स्वामी अभयानंद सरस्वती जी"}</p>
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
                  ))
                ) : (
                  <p className="text-center text-gray-500 text-lg mt-10">
                    No events found.
                  </p>
                )}

                {/* Pagination */}
                {data.length > itemsPerPage && (
                  <div className="flex justify-center mt-10">
                    <Pagination
                      count={Math.ceil(data.length / itemsPerPage)}
                      page={page}
                      onChange={handleChange}
                      color="primary"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
