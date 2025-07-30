import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(10);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 10 : prev + 10));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(
          "https://m1blog.aaragroups.com/blog/gallery-image-api/?is_website=true",
          {
            headers: {
              Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
            },
          }
        );
        const images = res.data.data?.Gallery || [];
        setGalleryImages(images);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <CircularProgressWithLabel value={progress} />
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={img.id || index}
            className="rounded overflow-hidden shadow-md cursor-pointer hover:scale-105 transform transition"
            onClick={() => setSelectedImage(img.image)}
          >
            <img
              src={img.image}
              alt={img.title || `Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-0 right-4 text-red-800 text-3xl font-bold z-50"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
