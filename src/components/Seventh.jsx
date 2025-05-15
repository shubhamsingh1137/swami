import React from "react";

const Seventh = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-10">
      {/* ABOUT Card */}
      <div className="flex-1 h-60 border-2 border-white bg-[#FE9342] m-2 hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center mt-6">
          <img
            src="https://swamiabhyanand.com/images/about-icon1.png"
            alt="About Icon"
          />
        </div>
        <div className="flex justify-center items-center mt-4 font-semibold text-white text-2xl lg:text-3xl">
          <p>ABOUT</p>
        </div>
        <div className="flex justify-center items-center mt-2 font-normal text-white text-xl lg:text-2xl text-center px-2">
          <p>About Swami Abhyanand Ji</p>
        </div>
      </div>

      {/* EVENTS Card */}
      <div className="flex-1 h-60 border-2 border-white bg-[#C84407] m-2 hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center mt-6">
          <img
            src="https://swamiabhyanand.com/images/media-icon2.png"
            alt="Events Icon"
          />
        </div>
        <div className="flex justify-center items-center mt-4 font-semibold text-white text-2xl lg:text-3xl">
          <p>EVENTS</p>
        </div>
        <div className="flex justify-center items-center mt-2 font-normal text-white text-xl lg:text-2xl text-center px-2">
          <p>Swami Abhyanand Ji Events</p>
        </div>
      </div>

      {/* BLOG Card */}
      <div className="flex-1 h-60 border-2 border-white bg-[#FE9342] m-2 hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center mt-6">
          <img
            src="https://swamiabhyanand.com/images/blog-icon3.png"
            alt="Blog Icon"
          />
        </div>
        <div className="flex justify-center items-center mt-4 font-semibold text-white text-2xl lg:text-3xl">
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
