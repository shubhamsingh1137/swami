import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Loader Component
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

const Ebooks = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const itemsPerPage = 2;

  // Simulate progress bar increasing while loading
  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((oldProgress) =>
          oldProgress >= 100 ? 100 : oldProgress + 10
        );
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
      setTimeout(() => setLoading(false), 1000); // slight delay to show loader
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="flex justify-center items-center gap-10 mt-10">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>Gallery</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgressWithLabel value={progress} />
        </div>
      ) : (
        <div className="min-h-screen bg-[#f9fcd1] p-12 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            {paginatedData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 hover:scale-110 transition duration-500 cursor-pointer"
              >
                <img
                  src={item?.images}
                  alt={`Book Cover ${index + 1}`}
                  className="rounded-lg w-150 h-150 shadow-2xl shadow-orange-500"
                />
              </div>
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
        </div>
      )}
    </div>
  );
};

export default Ebooks;
