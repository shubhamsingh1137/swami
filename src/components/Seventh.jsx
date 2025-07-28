import React from "react";
import { useNavigate } from "react-router-dom";
import aboutIcon1 from "../assets/Images/about-icon1.png";
import blogicon from "../assets/Images/blog-icon3.png";
import event from "../assets/Images/media-icon2.png";
const Seventh = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row w-full mt-10">
      <div className="flex-1 h-60 border-2 border-white bg-[#FE9342] m-2 hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center mt-6">
          <img src={aboutIcon1} alt="About Icon" />
        </div>
        <div
          onClick={() => navigate("/about")}
          className="flex justify-center items-center mt-4 font-semibold text-white text-2xl lg:text-3xl cursor-pointer"
        >
          <p>ABOUT</p>
        </div>
        <div className="flex justify-center items-center mt-2 font-normal text-white text-xl lg:text-2xl text-center px-2">
          <p>About Swami Abhyanand Ji</p>
        </div>
      </div>

      <div className="flex-1 h-60 border-2 border-white bg-[#C84407] m-2 hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center mt-6">
          <img src={event} alt="Events Icon" />
        </div>
        <div
          onClick={() => navigate("/event")}
          className="flex justify-center items-center mt-4 font-semibold text-white text-2xl lg:text-3xl cursor-pointer"
        >
          <p>EVENTS</p>
        </div>
        <div className="flex justify-center items-center mt-2 font-normal text-white text-xl lg:text-2xl text-center px-2 ">
          <p>Swami Abhyanand Ji Events</p>
        </div>
      </div>

      <div className="flex-1 h-60 border-2 border-white bg-[#FE9342] m-2 hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center mt-6">
          <img src={blogicon} alt="Blog Icon" />
        </div>
        <div
          onClick={() => navigate("/blog")}
          className="flex justify-center items-center mt-4 font-semibold text-white text-2xl lg:text-3xl cursor-pointer"
        >
          <p>BLOG</p>
        </div>
        <div className="flex justify-center items-center mt-2 font-normal text-white text-xl lg:text-2xl text-center px-2">
          <p>Swami Abhyanand Ji Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
