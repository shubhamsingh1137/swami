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

        const key = "गुरुदेव  के बारे में"; // Do spaces matter
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
    <div className="bg-[#fefee9] text-gray-800 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        <div
          className="text-sm lg:text-xl leading-relaxed text-justify space-y-4"
          dangerouslySetInnerHTML={{ __html: guruContent }}
        />
      </div>
    </div>
  );
};

export default Third;
