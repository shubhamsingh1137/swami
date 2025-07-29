import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Images/logoswami.png";

const Second = () => {
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

      const contentData =
        homeItem?.content?.[
          "परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज"
        ];

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
    <div className="bg-[#FEFDE5] w-full  text-center">
      <img
        src={logo}
        alt="Symbol"
        className="mx-auto mb-4 w-16 h-16 lg:w-30 lg:h-30 hover:scale-105 transition-transform duration-500 ease-in-out  border-5 border-orange-500 rounded-full"
      />

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl">
        परम पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
      </h1>

      <div className="text-md lg:text-2xl md:text-lg text-black mt-6 max-w-4xl mx-auto font-medium leading-relaxed hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl">
        {loading ? (
          <p>Loading...</p>
        ) : homeContent ? (
          <div dangerouslySetInnerHTML={{ __html: homeContent }} />
        ) : (
          <p className="text-red-500">Content not found.</p>
        )}
      </div>

      <div className="">
        <button
          onClick={() => navigate("/about")}
          className="border border-red-500 text-red-500 px-8 py-3  text-xl hover:bg-red-500 hover:text-white hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
        >
          Know More
        </button>
      </div>

      <div className="mt-12">
        <img
          src={logo}
          alt="logo"
          className="mx-auto mb-3 w-16 h-16 lg:w-30 lg:h-30 hover:scale-105 transition-transform duration-500 ease-in-out  border-5 border-orange-500 rounded-full"
        />
        <h2
          onClick={() => navigate("/about")}
          className="text-3xl lg:text-4xl font-semibold text-gray-600 cursor-pointer hover:text-red-600 hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
        >
          हमारे बारे में
        </h2>
      </div>
    </div>
  );
};

export default Second;
