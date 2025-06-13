import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const Gallery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [zoomImage, setZoomImage] = useState(null); // ← modal state

  const itemsPerPage = 2;

  useEffect(() => {
    const simulateProgress = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 90 ? 90 : prevProgress + 10
      );
    }, 200);

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

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const staticImages = [
    ...Array(2).fill("https://swamiabhyanand.com/uploads/MEERUT_ASHRAM4.JPG"),
    ...Array(2).fill(
      "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg"
    ),
  ];

  const combinedImages = [...data.map((item) => item.images), ...staticImages];

  const displayedImages = showAll
    ? combinedImages
    : combinedImages.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-center items-center gap-10 mt-10">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>Gallery</p>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgressWithLabel value={progress} />
        </div>
      ) : (
        <>
          {/* Image Grid */}
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-5xl px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {displayedImages.map((img, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-2xl shadow-orange-500 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setZoomImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {!showAll && (
                <div className="flex justify-center mt-10">
                  <Pagination
                    count={Math.ceil(combinedImages.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                  />
                </div>
              )}

              {/* Load More */}
              {!showAll && (
                <div className="flex items-center justify-center mt-10 cursor-pointer">
                  <button
                    className="w-40 h-12 text-xl text-white bg-orange-400 hover:bg-orange-500 rounded-md shadow"
                    onClick={handleLoadMore}
                  >
                    LOAD MORE
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Fullscreen Zoom Image Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-xl transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
