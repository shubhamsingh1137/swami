import React, { useEffect, useState } from "react";
import axios from "axios";

// Convert YouTube links to embed format
const getYouTubeEmbedUrl = (url) => {
  const regex =
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
};

const Vidioimage = ({ group = "Home Page" }) => {
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch videos
  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://m1blog.aaragroups.com/blog/video-url-api/?is_website=True",
        {
          headers: {
            Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
          },
        }
      );
      const videoData = response.data?.data || {};
      const matchingVideoKey = Object.keys(videoData).find(
        (key) => key.toLowerCase() === group.toLowerCase()
      );
      setVideos(matchingVideoKey ? videoData[matchingVideoKey] : []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // 🔹 Fetch images
  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://m1blog.aaragroups.com/blog/gallery-image-api/?is_website=true",
        {
          headers: {
            Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
          },
        }
      );

      const imageGroups = response.data?.data || {};
      const matchingImageKey = Object.keys(imageGroups).find(
        (key) => key.toLowerCase() === group.toLowerCase()
      );
      setImages(matchingImageKey ? imageGroups[matchingImageKey] : []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([fetchVideos(), fetchImages()]);
      setLoading(false);
    };

    fetchAll();
  }, [group]);

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  return (
    <div className="p-6 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {videos.map((video, index) => {
          const embedUrl = getYouTubeEmbedUrl(video.url);

          return (
            <div
              key={video.id}
              className="shadow-2xl rounded-2xl p-4 bg-white hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <h3 className="font-bold text-xl mb-2 text-gray-800">
                {video.title}
              </h3>

              {/* 🔹 Image gallery above video */}
              {images.length > 0 && (
                <div className="flex gap-3 overflow-x-auto mb-4">
                  {images.map((img, i) => (
                    <img
                      key={img.id || i}
                      src={img.image}
                      alt={img.title || `Image ${i + 1}`}
                      className="w-40 h-24 object-cover rounded-lg flex-shrink-0 "
                    />
                  ))}
                </div>
              )}

              {/* 🔹 YouTube Video */}
              <div className="aspect-video">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    className="w-full h-full rounded"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <p className="text-sm text-red-600">Invalid YouTube URL</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vidioimage;
