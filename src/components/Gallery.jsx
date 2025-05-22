import React from "react";
import Nav from "./Nav";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";
import LatestEvents from "./Latest_event";

const Gallery = () => {
  const numberOfImages = [1, 2, 3, 4, 5, 6]; // You can adjust the length as needed
  const imageUrl = "https://swamiabhyanand.com/uploads/DSC_9301.JPG"; // Replace with the actual URL of your image

  const numberOfImage = [1, 2, 3, 4, 5, 6]; // You can adjust the length as needed
  const imageUrls = "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM4.JPG"; // Replace with the actual URL of your image

  const Images = [1, 2, 3, 4, 5, 6]; // You can adjust the length as needed
  const Url =
    "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg"; // Replace with the actual URL of your image

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png"></img>
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>Gallery</p>
      </div>
      <div className="">
        {" "}
        <div className="flex justify-center items-center mt-10 ">
          <div className="w-full max-w-7xl px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8 ">
              {[
                "All",
                "LUCKNOW ASHRAM",
                "MEERUT ASHRAM",
                "HARIDWAR ASHRAM",
                "MAHOLI SITAPUR ASHRAM",
              ].map((label, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-white rounded-md shadow-[0_0_10px_5px_rgba(255,165,0,0.3)] text-lg lg:text-2xl cursor-pointer hover:scale-110 text-gray-800"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              {numberOfImages.map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-2xl shadow-orange-500 rounded-lg overflow-hidden"
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="w-full h-60 object-cover hover:scale-105"
                  />
                </div>
              ))}
              {numberOfImage.map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-2xl shadow-orange-500 rounded-lg overflow-hidden"
                >
                  <img
                    src={imageUrls}
                    alt={`Image ${index + 1}`}
                    className="w-full h-60 object-cover hover:scale-105"
                  />
                </div>
              ))}
              {Images.map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-2xl shadow-orange-500 rounded-lg overflow-hidden"
                >
                  <img
                    src={Url}
                    alt={`Image ${index + 1}`}
                    className="w-full h-60 object-cover hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex items-center justify-center mt-10 cursor-pointer">
              <button className="w-40 h-12 text-xl text-white bg-orange-400 hover:bg-orange-500 rounded-md shadow">
                LOAD MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
