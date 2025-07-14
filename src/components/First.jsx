import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import swamiPic5 from "../assets/Images/swami_pic5.jpg";
const First = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchapi = async () => {
    try {
      const response = await axios.get(
        "https://m1blog.aaragroups.com/blog/Slider-api/",
        {
          headers: {
            Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
          },
        }
      );
      setData(response?.data?.data || []);
    } catch (error) {
      console.error("Fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  useEffect(() => {
    if (currentIndex >= data.length) {
      setCurrentIndex(0);
    }
  }, [data.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <CircularProgress size={60} />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Slider Section */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <img
          src={data[currentIndex]?.image}
          alt={data[currentIndex]?.title || `Slide ${currentIndex}`}
          className="w-full h-full object-cover transition duration-500"
        />

        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 rounded-full z-10"
        >
          ❮
        </div>

        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 rounded-full z-10"
        >
          ❯
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Static Image Section */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={swamiPic5}
          alt="Swamiji"
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-0 left-0 w-full text-center text-white text-lg md:text-2xl lg:text-4xl font-semibold px-4 py-3">
          परम पूज्य आचार्य महामंडलेश्वर...
        </p>
      </div>
    </div>
  );
};

export default First;
