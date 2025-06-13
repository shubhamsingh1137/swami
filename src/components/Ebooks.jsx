import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Box, Typography } from "@mui/material"; // Import Box and Typography

// Custom CircularProgressWithLabel component
const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} size={80} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const Ebooks = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchapi = async () => {
    setLoading(true);
    setProgress(0); // Reset progress when starting a new fetch
    try {
      const response = await axios.get(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
      );
      setData(response?.data?.docs?.slice(0, 12));
    } catch (error) {
      console.error("error in fetched data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Animate loader progress
  useEffect(() => {
    if (loading) {
      let value = 0;
      const interval = setInterval(() => {
        value += 10;
        if (value > 100) {
          clearInterval(interval);
          setProgress(100); // Ensure it reaches 100%
        } else {
          setProgress(value);
        }
      }, 100);
      return () => clearInterval(interval); // Cleanup interval on unmount or if loading changes
    } else {
      setProgress(100); // Set to 100% immediately once loading is false
    }
  }, [loading]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentBooks = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f9fcd1]">
        <CircularProgressWithLabel value={progress} />{" "}
        {/* Use the custom component */}
      </div>
    );
  }

  return (
    <div className="bg-[#f9fcd1] min-h-screen flex flex-col items-center px-4">
      {/* Header */}
      <div className="flex flex-col items-center py-10">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="Logo"
          className="h-20 mb-4"
        />
        <h1 className="text-4xl lg:text-6xl font-semibold text-black">
          E-Books
        </h1>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-8">
        {currentBooks.map((book, index) => {
          const cover = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : "https://via.placeholder.com/200x300.png?text=No+Cover";

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cover}
                alt={book.title}
                className="h-80 w-auto object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-bold text-center">{book.title}</h2>
              <p className="text-sm text-gray-600 text-center">
                {book.author_name?.[0] || "Unknown Author"}
              </p>
            </div>
          );
        })}
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-2 flex-wrap justify-center mb-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-8 h-8 rounded-full text-sm font-semibold ${
              currentPage === index
                ? "bg-orange-500 text-white"
                : "bg-white text-black border border-orange-300 hover:bg-orange-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ebooks;
