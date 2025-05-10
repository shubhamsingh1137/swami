import React from "react";

const Seventh = () => {
  return (
    <div className="lg:flex lg:space-x-2 lg:justify-center">
      <div className="w-130 h-60 border-2 border-white bg-[#FE9342] mt-10 ml-5">
        <div className="flex justify-center items-center mt-12">
          <img
            className="text-white"
            src="https://swamiabhyanand.com/images/about-icon1.png"
          ></img>
        </div>
        <div className="flex justify-center items-center mt-8 font-semibold text-white text-3xl">
          <p>ABOUT</p>
        </div>
        <div className="flex justify-center items-center mt-8 font-normal text-white text-3xl">
          <p>About Swami Abhyanand Ji</p>
        </div>
      </div>
      <div className="w-130 h-60 border-2 border-white bg-[#C84407] mt-10 ml-5">
        <div className="flex justify-center items-center mt-12">
          <img
            className="text-white"
            src="https://swamiabhyanand.com/images/media-icon2.png"
          ></img>
        </div>
        <div className="flex justify-center items-center mt-8 font-semibold text-white text-3xl">
          <p>EVENTS</p>
        </div>
        <div className="flex justify-center items-center mt-8 font-normal text-white text-3xl">
          <p>Swami Abhyanand Ji Events</p>
        </div>
      </div>
      <div className="w-130 h-60 border-2 border-white bg-[#FE9342] mt-10 ml-5">
        <div className="flex justify-center items-center mt-12">
          <img
            className="text-white"
            src="https://swamiabhyanand.com/images/blog-icon3.png"
          ></img>
        </div>
        <div className="flex justify-center items-center mt-8 font-semibold text-white text-3xl">
          <p>BLOG</p>
        </div>
        <div className="flex justify-center items-center mt-8 font-normal text-white text-3xl">
          <p>Swami Abhyanand Ji Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
