import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

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

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress size={60} />
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Carousel Section */}
        <div className="w-full lg:w-180 relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={data[currentIndex]?.image}
            alt={data[currentIndex]?.title || `Slide ${currentIndex}`}
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover transition duration-500"
          />

          {/* Left Arrow */}
          <div
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-orange-600 cursor-pointer  bg-opacity-60 p-2 rounded-full z-20"
          >
            ❮
          </div>

          {/* Right Arrow */}
          <div
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-orange-600 cursor-pointer  bg-opacity-60 p-2 rounded-full z-20"
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
        <div className="relative w-full lg:w-[580px] lg:ml-18 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://swamiabhyanand.com/images/_DSC2502.JPG"
            alt="Swamiji"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
          />
          <p className="absolute bottom-0 left-0 w-full text-center text-white text-lg md:text-2xl lg:text-4xl font-semibold bg-opacity-40 px-4 py-3">
            परम पूज्य आचार्य महामंडलेश्वर...
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
