import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../assets/Images/logoswami.png";
import Vidioimage from "./Vidioimage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Loader component
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

// Slider Arrows
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
  const [sliderData, setSliderData] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Update progress loader
  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 100);
      return () => clearInterval(timer);
    }
  }, [loading]);

  // Fetch slider images
  const fetchSliderData = async () => {
    try {
      const response = await axios.post(
        "https://m1blog.aaragroups.com/blog/store-based-blog-list-api/",
        { store_id: 14 }
      );
      setSliderData(response?.data?.blog_list || []);
    } catch (error) {
      console.error("Slider fetch failed", error);
    }
  };

  // Fetch HTML content from "about us"
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
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchSliderData();
    fetchAboutContent();
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div className="bg-[#fefee9] text-gray-800 py-8">
      {/* Title */}
      <div className="text-center text-3xl lg:text-4xl font-bold mb-6">
        हमारे बारे में
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center mt-2">
        <img src={logo} alt="logo" className="h-20 w-auto" />
      </div>

      {/* Slider */}
      <div className="relative mt-10 px-4 lg:px-20">
        {loading ? (
          <div className="flex justify-center items-center h-72">
            <CircularProgressWithLabel value={progress} />
          </div>
        ) : (
          <Slider {...settings}>
            {sliderData.map((item, index) => (
              <div key={index} className="px-2">
                <img
                  src={item.images}
                  alt={`slide-${index}`}
                  className="rounded-xl w-full h-[550px] object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Dynamic HTML content */}
      <div className="max-w-6xl mx-auto px-4 mt-10 text-base lg:text-lg leading-relaxed">
        <div
          className="text-gray-800"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>

      {/* Video Section */}
      <div className="mt-10">
        <Vidioimage group="About" />
      </div>
    </div>
  );
};

export default About;
