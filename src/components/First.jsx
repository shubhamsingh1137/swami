import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const First = () => {
  const [data, setData] = useState([]);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
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

  // Auto slide for left image (every 4 seconds)
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval1);
  }, [data]);

  // Auto slide for right image (every 6 seconds)
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentIndex2((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval2);
  }, [data]);

  const prevSlide1 = () => {
    setCurrentIndex1((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide1 = () => {
    setCurrentIndex1((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide2 = () => {
    setCurrentIndex2((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide2 = () => {
    setCurrentIndex2((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const goToSlide1 = (index) => setCurrentIndex1(index);
  const goToSlide2 = (index) => setCurrentIndex2(index);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <CircularProgress size={60} />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#FEFDE5] lg:mb-40 mb-10">
      {/* Left Slider */}
      <div className="relative mt-2 w-full lg:h-190 md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <img
          src={data[currentIndex1]?.image}
          alt={data[currentIndex1]?.title || `Slide ${currentIndex1}`}
          className="w-full h-full object-cover transition duration-500"
        />

        <div
          onClick={prevSlide1}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 rounded-full z-10"
        >
          ❮
        </div>

        <div
          onClick={nextSlide1}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 rounded-full z-10"
        >
          ❯
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide1(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex1 ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Slider */}
      <div className="relative mt-2 w-full lg:h-190 md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <img
          src={data[currentIndex2]?.image}
          alt={data[currentIndex2]?.title || `Slide ${currentIndex2}`}
          className="w-full h-full object-cover transition duration-500"
        />

        <div
          onClick={prevSlide2}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 rounded-full z-10"
        >
          ❮
        </div>

        <div
          onClick={nextSlide2}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 rounded-full z-10"
        >
          ❯
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide2(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex2 ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <p className="absolute bottom-5 left-0 w-full text-center text-white text-lg md:text-2xl lg:text-4xl font-semibold px-4 py-3">
          परम पूज्य आचार्य महामंडलेश्वर...
        </p>
      </div>
    </div>
  );
};

export default First;
