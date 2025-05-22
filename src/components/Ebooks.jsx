import React from "react";

const Ebooks = () => {
  const images = [
    "https://covers.openlibrary.org/b/id/11299418-M.jpg",
    "https://covers.openlibrary.org/b/id/14575704-M.jpg",
    "https://covers.openlibrary.org/b/id/14315089-M.jpg",
    "https://covers.openlibrary.org/b/id/12655628-M.jpg",
    "https://covers.openlibrary.org/b/id/14857853-M.jpg",
    "https://covers.openlibrary.org/b/id/33327-M.jpg",
    "https://covers.openlibrary.org/b/id/6878658-M.jpg",
    "https://covers.openlibrary.org/b/id/11943367-M.jpg",
    "https://covers.openlibrary.org/b/id/8250709-M.jpg",
    "https://covers.openlibrary.org/b/id/14859556-M.jpg",
    "https://covers.openlibrary.org/b/id/4288188-M.jpg",
    "https://covers.openlibrary.org/b/id/8072340-M.jpg",
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png"></img>
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>Gallery</p>
      </div>
      <div className="min-h-screen bg-[#f9fcd1] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2  hover:scale-110 cursor-pointer"
            >
              <img
                src={img}
                alt={`Book Cover ${index + 1}`}
                className="rounded-lg  w-150 h-150 shadow-2xl shadow-orange-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ebooks;
