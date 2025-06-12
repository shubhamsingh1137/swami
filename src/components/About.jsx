import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Loader Component
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

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
      }, 100);
      return () => clearInterval(timer);
    }
  }, [loading]);

  const fetchapi = async () => {
    try {
      const response = await axios.post(
        "https://m1blog.aaragroups.com/blog/store-based-blog-list-api/",
        { store_id: 1 }
      );
      setData(response?.data?.blog_list || []);
    } catch (error) {
      console.error("fetch failed error", error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-bold text-black">
        <p>हमारे बारे में</p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="logo"
        />
      </div>

      {/* Loader or Slider */}
      <div className="relative mt-10 px-4 lg:px-20">
        {loading ? (
          <div className="flex justify-center items-center h-72">
            <CircularProgressWithLabel value={progress} />
          </div>
        ) : (
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="px-2">
                <img
                  src={item.images}
                  alt={`slider-${index}`}
                  className="rounded-xl h-65 w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Additional Content */}
      <div className="flex items-center justify-center mt-10 lg:text-2xl text-black font-semibold">
        <p>॥श्री गुरूवे नमः॥</p>
      </div>
      {/* [Rest of your text content remains unchanged...] */}
    </div>
  );
};

export default About;
