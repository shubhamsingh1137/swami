import React, { use } from "react";
import { useNavigate } from "react-router-dom";

const Fifth = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="bg-[#fefee9] py-10 px-4">
        {/* Heading */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://swamiabhyanand.com/images/pic1.png"
            alt="Logo"
            className="w-14 h-14 lg:w-30 lg:h-30 mb-2"
          />
          <h2 className="text-2xl lg:text-5xl font-semibold text-gray-600">
            वीडियो देखें
          </h2>
        </div>

        {/* Video and Description */}
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left: YouTube Video Embed */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/VIDEO_ID" // Replace with your YouTube video ID
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Right: Text Details */}
          <div className="text-gray-600 space-y-4">
            <h3 className="text-xl lg:text-4xl font-bold text-black">
              श्रीमद्भगवद गीता अध्याय-9 | भाग-7
            </h3>
            <p className="text-base lg:text-3xl leading-relaxed">
              श्रीमद्भगवद्गीता अध्याय- 9 (राजविद्याराजगुह्ययोग), भाग -7, अनंत
              श्री विभूषित महामण्डलेश्वर स्वामी अभयानंद सरस्वती जी महाराज (श्री
              पंचायती अखाड़ा महानिर्वाणी) “ अध्यक्ष ” अखिल भारतीय संत समिति
              उत्तर प्रदेश स्वामी अभयानन्द वेद पाठशाला, पपनामऊ, अनेउरा कला,
              फैज़ाबाद रोड, (लखनऊ )
            </p>
          </div>
        </div>

        {/* Watch All Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/allvidios");
            }}
            className="border lg:text-3xl cursor-pointer border-red-500 text-red-600 px-6 py-2 rounded-md hover:bg-red-600 hover:text-white transition"
          >
            सभी वीडियो देखें
          </button>
        </div>
      </section>
    </div>
  );
};

export default Fifth;
