import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/Images/logoswami.png";

const Third = () => {
  const [guruContent, setGuruContent] = useState("");

  useEffect(() => {
    const fetchGuruContent = async () => {
      try {
        const res = await axios.get(
          "https://m1blog.aaragroups.com/blog/content-writer-api/",
          {
            headers: {
              Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
            },
          }
        );

        const homePageData = res.data.data.find(
          (item) => item.title?.toLowerCase() === "home page"
        );

        const key = "गुरुदेव  के बारे में";
        const content = homePageData?.content?.[key];

        if (content) {
          setGuruContent(content);
        }
      } catch (error) {
        console.error("Error fetching Gurudev content:", error);
      }
    };

    fetchGuruContent();
  }, []);

  return (
    <div className="bg-[#fefee9] text-gray-800 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <div
          className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-justify text-gray-800"
          dangerouslySetInnerHTML={{ __html: guruContent }}
        />
      </div>
    </div>
  );
};

export default Third;
