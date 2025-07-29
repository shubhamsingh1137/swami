import React, { useEffect, useState } from "react";
import axios from "axios";
import Vidioimage from "./Vidioimage";
import logo from "../assets/Images/logoswami.png";

const Gallery = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("Select All");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); 

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

        const data = res.data.data;
        const allImages = Object.values(data).flat();

        const folderList = [
          { title: "Select All", images: allImages },
          ...Object.entries(data).map(([key, images]) => ({
            title: key,
            images,
          })),
        ];

        setFolders(folderList);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const displayedImages =
    folders.find((f) => f.title === selectedFolder)?.images || [];

  return (
    <>
      
     

      {/* Buttons + Gallery */}
      <div className="p-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {folders.map((folder) => (
            <button
              key={folder.title}
              onClick={() => setSelectedFolder(folder.title)}
              className={`px-4 py-2 rounded-full text-white font-semibold ${
                selectedFolder === folder.title
                  ? "bg-orange-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                  : "bg-gray-500"
              }`}
            >
              {folder.title}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="flex items-center justify-center space-y-5">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-5 justify-center">
              {displayedImages.map((img) => (
                <img
                  key={img.id}
                  src={img.image}
                  alt={img.title || "Gallery Image"}
                  onClick={() => setSelectedImage(img.image)} // 👈 Set clicked image
                  className="w-80 h-80 object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              ))}
            </div>
          )}
        </div>

        {/* Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)} 
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-4xl max-h-[90%] object-contain p-4 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} 
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-4xl font-bold"
            >
              &times;
            </button>
          </div>
        )}

        {/* Video Section */}
        <Vidioimage group="gallary" />
      </div>
    </>
  );
};

export default Gallery;
