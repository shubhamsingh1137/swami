import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFolderOpen,
  FaWhatsappSquare,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import LatestEvents from "./Latest_event";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Imageformat } from "../Utilis/Imageformat/Index";
import { useNavigate } from "react-router-dom";
import Vidioimage from "./Vidioimage";
import logo from "../assets/Images/logoswami.png";
// Circular loader with label
function CircularProgressWithLabel({ value }) {
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
        <Typography variant="caption" component="div" color="textSecondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

// Blog Card component
const BlogCard = ({
  title,
  date_created,
  location,
  quote,
  body,
  images,
  id,
  navigate,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
    <img
      src={images}
      alt={title}
      className="w-full aspect-video object-cover rounded-md hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <h3 className="text-2xl font-semibold text-gray-800 hover:scale-105 transition-transform duration-500 ease-in-out">
      {title}
    </h3>

    <div className="flex flex-wrap lg:text-xl items-center gap-3 text-gray-500 text-sm hover:scale-105 transition-transform duration-500 ease-in-out">
      <FaCalendarAlt />
      <span>{new Date(date_created).toLocaleDateString("hi-IN")}</span>
    </div>

    <div className="flex text-xl items-center gap-2 text-gray-500 hover:scale-105 transition-transform duration-500 ease-in-out">
      <IoChatbubbles />
      <span>(0)</span>
    </div>

    <div className="hover:scale-105 transition-transform duration-500 ease-in-out">
      <p className="text-2xl font-semibold text-gray-700">
        Share This Blog with Others
      </p>
      <div className="flex gap-3 text-4xl mt-5 text-gray-600 ">
        <FaWhatsappSquare />
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>

    {quote && body && (
      <div className="mt-4 bg-gray-100 p-4 rounded text-gray-800">
        <p className="font-semibold text-center text-base text-gray-900 mb-2">
          {quote}
        </p>
        <p className="text-justify leading-relaxed text-sm">{body}</p>
      </div>
    )}

    <div className="flex items-center justify-center mt-5">
      <button
        onClick={() => navigate(`/newblog/${id}`)}
        className="text-center w-40 h-12 text-base border-2 border-red-600 text-red-600 font-semibold py-2  hover:bg-red-600 hover:text-white hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
      >
        Read More
      </button>
    </div>
  </div>
);

// Main Blog component
const Blog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const itemsPerPage = 2;
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 100);
      return () => clearInterval(timer);
    }
  }, [loading]);

  const fetchapi = async () => {
    try {
      const response = await axios.post(
        "https://m1blog.aaragroups.com/blog/store-based-blog-list-api/",
        { store_id: 14 }
      );
      setData(response?.data?.blog_list || []);
    } catch (error) {
      console.error("fetch failed error", error);
    } finally {
      setTimeout(() => setLoading(false), 1200);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedBlogs = data.slice(startIndex, startIndex + itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="px-4 py-10 bg-gray-100 min-h-screen">
      <LatestEvents />
      <div className="flex justify-center">
        <img
          src={logo}
          alt="Logo"
          className="h-16 sm:h-20 lg:h-30 w-auto mb-2 border-5 border-orange-500 rounded-full hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-500 ease-in-out">
        Blog
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgressWithLabel value={progress} />
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            {paginatedBlogs?.map((blog) => (
              <BlogCard key={blog?.id} {...blog} navigate={navigate} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Pagination
              count={Math.ceil(data.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </>
      )}
      <Vidioimage group="blog" />
    </div>
  );
};

export default Blog;
