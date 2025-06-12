import React, { useEffect, useState } from "react";

import axios from "axios";

const images = [
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9301.JPG",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9867.JPG",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit2.jpg",
];

const First = () => {
  const [data, setData] = useState();
  const fetchapi = async () => {
    try {
      const response = await axios.post(
        "https://m1blog.aaragroups.com/blog/store-based-blog-list-api/",
        { store_id: 1 }
      );
      setData(response?.data?.data);
    } catch (error) {
      console.error("fetch failed error", error);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Carousel Section */}
        <div className="w-full lg:w-210 relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full  h-[300px] md:h-[400px] lg:h-[700px] object-cover transition duration-500"
          />

          {/* Left Arrow */}
          <div
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
          >
            ❮
          </div>

          {/* Right Arrow */}
          <div
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
          >
            ❯
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Static Image Section */}
        <div className="relative w-full lg:w-110 lg:ml-45 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://swamiabhyanand.com/images/_DSC2502.JPG"
            alt="Swamiji"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
          />
          <p className="absolute bottom-0 left-0 w-full text-center text-white text-lg md:text-2xl lg:text-4xl font-semibold bg-opacity-40 px-4 py-3">
            परम पूज्य आचार्य महामंडलेश्वर...
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
