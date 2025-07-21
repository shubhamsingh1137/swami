import React, { useEffect, useState } from "react";
import axios from "axios";
import Vidioimage from "./Vidioimage";
import logo from "../assets/Images/logoswami.png";
const Gallery = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("Select All");
  const [loading, setLoading] = useState(true);

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
      <div className="flex justify-center items-center mb-2">
        <img
          src={logo}
          alt="logo"
          className="h-16 sm:h-20 lg:h-30 w-auto mb-2 border-5 border-orange-500 rounded-full hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="text-center text-3xl lg:text-4xl font-bold mb-6">
        Gallery
      </div>{" "}
      <div className="p-4">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {folders.map((folder) => (
            <button
              key={folder.title}
              onClick={() => setSelectedFolder(folder.title)}
              className={`px-4 py-2 rounded-full text-white font-semibold ${
                selectedFolder === folder.title
                  ? "bg-orange-500 hover:scale-105 transition-transform duration-500 ease-in-out"
                  : "bg-gray-500"
              }`}
            >
              {folder.title}
            </button>
          ))}
        </div>
        {/* Images */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedImages.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={img.title}
                className="rounded shadow hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            ))}
          </div>
        )}
        <Vidioimage group="gallary" />
      </div>
    </>
  );
};

export default Gallery;
