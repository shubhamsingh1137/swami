// VidioImageWithContinuousScroll.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
};

const AutoScrollStrip = ({ images, direction = "ltr", speed = 0.5 }) => {
  const ref = useRef();
  const posRef = useRef(0);
  const rafRef = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el || images.length === 0) return;

    const maxScroll = el.scrollWidth / 2;

    const step = () => {
      let pos = posRef.current;
      if (direction === "ltr") {
        pos += speed;
        if (pos >= maxScroll) pos = 0;
      } else {
        pos -= speed;
        if (pos <= 0) pos = maxScroll;
      }
      el.scrollLeft = pos;
      posRef.current = pos;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, images, speed]);

  return (
    <div ref={ref} className="flex gap-3 overflow-hidden mb-4">
      {[...images, ...images].map((img, idx) => (
        <img
          key={`${img.id || idx}-${idx}`}
          src={img.image}
          alt={img.title || `Image ${idx + 1}`}
          className="w-40 h-24 object-cover rounded-lg flex-shrink-0"
        />
      ))}
    </div>
  );
};

const Vidioimage = ({ group = "Home Page" }) => {
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [vRes, iRes] = await Promise.all([
          axios.get(
            "https://m1blog.aaragroups.com/blog/video-url-api/?is_website=True",
            {
              headers: {
                Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
              },
            }
          ),
          axios.get(
            "https://m1blog.aaragroups.com/blog/gallery-image-api/?is_website=true",
            {
              headers: {
                Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
              },
            }
          ),
        ]);
        const vData = vRes.data?.data || {};
        const iData = iRes.data?.data || {};
        const vKey = Object.keys(vData).find(
          (k) => k.toLowerCase() === group.toLowerCase()
        );
        const iKey = Object.keys(iData).find(
          (k) => k.toLowerCase() === group.toLowerCase()
        );
        setVideos(vKey ? vData[vKey] : []);
        setImages(iKey ? iData[iKey] : []);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchAll();
  }, [group]);

  if (loading) return <p className="text-center my-10 text-lg">Loading...</p>;

  return (
    <div className="p-6 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((video, idx) => (
          <div
            key={video.id}
            className="shadow-2xl rounded-2xl p-4 bg-white hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <AutoScrollStrip
              images={images}
              direction={idx === 0 ? "ltr" : "ltr"}
              speed={0.5}
            />
            <div className="aspect-video">
              {getYouTubeEmbedUrl(video.url) ? (
                <iframe
                  src={getYouTubeEmbedUrl(video.url)}
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
        ))}
      </div>
    </div>
  );
};

export default Vidioimage;
