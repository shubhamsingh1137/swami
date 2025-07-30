import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../assets/Images/logoswami.png";
import Vidioimage from "./Vidioimage";

// Loader with percentage label
const CircularProgressWithLabel = ({ value }) => (
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
      <Typography variant="caption" component="div" color="textSecondary">
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

const About = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulated loader
  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 50);
      return () => clearInterval(timer);
    }
  }, [loading]);

  // Fetch slider images
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
      console.error("Slider fetch failed:", error);
    }
  };

  // Fetch About content
  const fetchAboutContent = async () => {
    try {
      const res = await axios.get(
        "https://m1blog.aaragroups.com/blog/content-writer-api/",
        {
          headers: {
            Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
          },
        }
      );
      const aboutItem = res.data.data.find(
        (item) => item.title?.toLowerCase() === "about us"
      );
      const key = "स्वामीजी जी का सामाजिक जीवन";
      const html = aboutItem?.content?.[key] || "";
      setHtmlContent(html);
    } catch (err) {
      console.error("Error fetching about us content:", err);
    }
  };

  useEffect(() => {
    Promise.all([fetchapi(), fetchAboutContent()]).finally(() =>
      setTimeout(() => setLoading(false), 1000)
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#fefee9] text-gray-800">
      <div className="relative w-full">
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <CircularProgressWithLabel value={progress} />
          </div>
        ) : (
          <div className="relative w-full h-[calc(100vh-160px)] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src={data[currentIndex]?.image}
              alt={data[currentIndex]?.title || `Slide ${currentIndex}`}
              className="w-full h-full object-cover transition duration-500"
            />

            {/* Arrows */}
            <div
              onClick={prevSlide}
              className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 text-2xl sm:text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 sm:p-3 rounded-full z-10"
            >
              ❮
            </div>
            <div
              onClick={nextSlide}
              className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 text-2xl sm:text-3xl text-white bg-black bg-opacity-30 hover:bg-opacity-50 cursor-pointer p-2 sm:p-3 rounded-full z-10"
            >
              ❯
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {data.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4  text-sm sm:text-base md:text-lg leading-relaxed hover:scale-105 transition-transform duration-500 ease-in-out">
        <div
          className="text-gray-800"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>

      {/* Video Section */}
      <div className=" px-4">
        <Vidioimage group="About" />
      </div>
    </div>
  );
};

export default About;
