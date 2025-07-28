import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swamiPic7 from "../assets/Images/swami_pic7.png";
import sanskritPic from "../assets/Images/sanskrit1_pic8.jpg";
import axios from "axios";

const Sixth = () => {
  const navigate = useNavigate();
  const [homeContent1, setHomeContent1] = useState("");
  const [homeContent2, setHomeContent2] = useState("");
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

      const contentData = homeItem?.content?.["स्वामी अभयानंद गौशाला समिति"];
      const contentData1 =
        homeItem?.content?.["स्वामी अभयानंद संस्कृत विद्यालय"];

      setHomeContent1(contentData || "");
      setHomeContent2(contentData1 || "");
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
    <div className="flex flex-col lg:flex-row p-4 lg:p-10 bg-gray-50 gap-10">
      {/* Box 1: गौशाला */}
      <div className="w-full lg:w-1/2 border-2 border-white shadow-2xl shadow-gray-900 p-5 rounded-lg bg-white flex flex-col justify-between">
        <div className="flex items-center justify-center mb-5">
          <img
            src={swamiPic7}
            alt="Swami Gaushala"
            className="w-full h-50 md:w-full md:h-80 lg:w-full lg:h-80 object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
          />
        </div>

        <div className="text-center lg:-mt-40">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight hover:scale-105 transition-transform duration-500 ease-in-out">
            स्वामी अभयानंद गौशाला समिति
          </h2>
        </div>

        <div className="text-md lg:text-2xl md:text-lg lg:-mt-20 text-black mt-6 max-w-4xl mx-auto font-medium leading-relaxed hover:scale-105 transition-transform duration-500 ease-in-out">
          {loading ? (
            <p>Loading...</p>
          ) : homeContent1 ? (
            <div dangerouslySetInnerHTML={{ __html: homeContent1 }} />
          ) : (
            <p className="text-red-500">Content not found.</p>
          )}
        </div>

        <div className="flex justify-center mt-8 lg:mt-12">
          <button
            onClick={() => navigate("/about")}
            className="text-orange-500 px-6 py-3 border-2 border-orange-500 text-base md:text-lg hover:text-white hover:bg-orange-200 hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
          >
            और पढ़ें
          </button>
        </div>
      </div>

      {/* Box 2: संस्कृत विद्यालय */}
      <div className="w-full lg:w-1/2 border-2 border-white shadow-2xl shadow-gray-900 p-5 rounded-lg bg-white flex flex-col justify-between">
        <div className="flex items-center justify-center mb-5">
          <img
            src={sanskritPic}
            alt="Sanskrit Vidyalaya"
            className="w-full h-50 md:w-full md:h-80 lg:w-full lg:h-80 object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight hover:scale-105 transition-transform duration-500 ease-in-out">
            स्वामी अभयानंद संस्कृत विद्यालय
          </h2>
        </div>

        <div className="text-md lg:text-2xl md:text-lg text-black mt-6 max-w-4xl mx-auto font-medium leading-relaxed hover:scale-105 transition-transform duration-500 ease-in-out">
          {loading ? (
            <p>Loading...</p>
          ) : homeContent2 ? (
            <div dangerouslySetInnerHTML={{ __html: homeContent2 }} />
          ) : (
            <p className="text-red-500">Content not found.</p>
          )}
        </div>

        <div className="flex justify-center mt-8 lg:mt-12">
          <button
            onClick={() => navigate("/about")}
            className="text-orange-500 px-6 py-3 border-2 border-orange-500 text-base md:text-lg hover:text-white hover:bg-orange-200 hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
          >
            और पढ़ें
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
