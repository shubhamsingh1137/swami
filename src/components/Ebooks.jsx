import React from "react";
import Nav from "./Nav";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";
import LatestEvents from "./Latest_event";

const image =
  "https://dkl18tmi4r0t8.cloudfront.net/flipbook/202505/01/assets/images/404.webp?v=1827";

const Ebooks = () => {
  const images = Array(6).fill(image);

  return (
    <div>
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png"></img>
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>E-Books</p>
      </div>
      <LatestEvents />
      <div className="min-h-screen bg-[#f9fcd1] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                src={img}
                alt={`image-${index + 1}`}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
        <Seventh />
        <Eighth />
        <Ninth />
      </div>
    </div>
  );
};

export default Ebooks;
