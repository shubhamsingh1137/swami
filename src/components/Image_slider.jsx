import React, { useState } from "react";

const images = [
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9301.JPG",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9867.JPG",
  "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit2.jpg",
  // Add more image paths
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLast = currentIndex === images.length - 1;
    setCurrentIndex(isLast ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto object-cover transition duration-500"
      />

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
        onClick={prevSlide}
      >
        ❮
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white cursor-pointer bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
        onClick={nextSlide}
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
  );
};

export default ImageSlider;
