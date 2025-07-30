import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/logoswami.png";
import axios from "axios";
const Fifth = () => {
  const navigate = useNavigate();
  const [homeContent, setHomeContent] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchHomeContent = async () => {
    try {
      const res = await axios.get(
        "https://m1blog.aaragroups.com/blog/content-writer-api/",
        {
          headers: {
            Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
          },
        }
      );

      const homeItem = res.data.data.find(
        (item) => item.title?.toLowerCase() === "home page"
      );

      const contentData = homeItem?.content?.["गुरुदेव नवीनतम सत्संग"];

      setHomeContent(contentData || "");
    } catch (err) {
      console.error("Error fetching home content:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeContent();
  }, []);

  return (
    <div>
      <section className="bg-[#fefee9] py-10 px-4">
        {/* Heading */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto mb-4 w-16 h-16 lg:w-30 lg:h-30 hover:scale-105 transition-transform duration-500 ease-in-out  border-5 border-orange-500 rounded-full"
          />
          <h2
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/allvidios");
            }}
            className="text-3xl lg:text-4xl font-semibold text-gray-600 cursor-pointer hover:text-red-600 hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
          >
            वीडियो देखें
          </h2>
        </div>

        {/* Video and Description */}
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left: YouTube Video Embed */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/qmV7RQzQdoc?list=PL4XC7HAy0WTDdrRDXXW9H9WPKXBhaGi_I"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Right: Text Details */}
          <div className="text-gray-600 space-y-4">
            <div className="text-md lg:text-2xl md:text-lg text-black mt-6 max-w-4xl mx-auto font-medium leading-relaxed hover:scale-105 transition-transform duration-500 ease-in-out">
              {loading ? (
                <p>Loading...</p>
              ) : homeContent ? (
                <div dangerouslySetInnerHTML={{ __html: homeContent }} />
              ) : (
                <p className="text-red-500">Content not found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fifth;
