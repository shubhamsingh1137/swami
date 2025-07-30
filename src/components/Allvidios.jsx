import React, { useEffect, useState } from "react";
import axios from "axios";

// ✅ Helper function to convert YouTube URL to embed format
const getYouTubeEmbedUrl = (url) => {
  const regex =
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
};

const AllVideos = () => {
  const [videos, setVideos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        setVideos(response.data.data || {});
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  return (
    <div className=" space-y-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 space-x-3  ">
      {Object.keys(videos).map((group) => (
        <div key={group} className="">
          <div className="space-y-5">
            {videos[group].map((video) => {
              const embedUrl = getYouTubeEmbedUrl(video.url);
              console.log("Video URL:", video.url); // Debugging original URL
              console.log("Embed URL:", embedUrl); // Debugging converted URL

              return (
                <div
                  key={video.id}
                  className="shadow-md rounded-lg p-4 border bg-white"
                >
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
                      <p className="text-sm text-red-600">
                        Invalid YouTube URL
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllVideos;
