import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFolderOpen,
  FaWhatsappSquare,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import LatestEvents from "./Latest_event";

const blogs = [
  {
    id: 1,
    title: "Blog - 1",
    img: "https://swamiabhyanand.com/uploads/stsang_banner2.jpg",
    date: "January 5, 2023",
    location: "Meerut",
    quote: null,
    body: null,
  },
  {
    id: 2,
    title: "Blog - 2",
    img: "https://swamiabhyanand.com/uploads/swami_satsang_banner1.jpg",
    date: "January 5, 2023",
    location: "Haridwar",
    quote:
      "उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः दैवं हि दैवमिति कापुरुषा वदंति।",
    body: `दैवं निहत्य कुरु पौरुषं आत्मशक्त्या यत्ने कृते यदि न सिध्यति न कोऽत्र दोषः।
          उद्योगी तथा साहसी लोगों को ही लक्ष्मी प्राप्त होती है। यह तो निकम्मे लोग हैं जो कहते हैं कि भाग्य में होगा तो मिलेगा।`,
  },
  {
    id: 3,
    title: "Blog - 3",
    img: "https://swamiabhyanand.com/uploads/DSC_9301.JPG",
    date: "January 5, 2023",
    location: "Sitapur",
    quote:
      "उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः दैवं हि दैवमिति कापुरुषा वदंति।",
    body: `मेहनती और साहसी लोगों को ही लक्ष्मी मिलती है। भाग्य का रोना छोड़ कर अपनी कोशिश करते रहो। सफल न हो तब भी तुम्हारा कोई दोष नहीं है।`,
  },
  {
    id: 4,
    title: "Blog - 4",
    img: "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9867.JPG",
    date: "March 10, 2023",
    location: "Lucknow",
    quote:
      "उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः दैवं हि दैवमिति कापुरुषा वदंति।",
    body: `मेहनती और साहसी लोगों को ही लक्ष्मी मिलती है। भाग्य का रोना छोड़ कर अपनी कोशिश करते रहो। सफल न हो तब भी तुम्हारा कोई दोष नहीं है।`,
  },
];

const BlogCard = ({ title, img, date, location, quote, body }) => (
  <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
    <img
      src={img}
      alt={title}
      className="w-full aspect-video object-cover rounded-md"
    />
    <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
    <div className="flex flex-wrap lg:text-lg items-center gap-3 text-gray-500 text-sm">
      <FaCalendarAlt />
      <span>{date}</span>
      <FaMapMarkerAlt />
      <span>{location}</span>
      <FaFolderOpen />
    </div>
    <div className="flex items-center gap-2 lg:text-xl text-gray-500">
      <IoChatbubbles />
      <span>(0)</span>
    </div>

    <div>
      <p className="text-lg lg:text-xl font-semibold text-gray-700">
        Share This Blog with Others
      </p>
      <div className="flex gap-4 text-3xl text-gray-600 mt-2">
        <FaWhatsappSquare />
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>

    {quote && body && (
      <div className="mt-4 bg-gray-100 p-4 rounded text-gray-800">
        <p className="font-semibold text-center text-lg text-gray-900 mb-2">
          {quote}
        </p>
        <p className="text-justify leading-relaxed">{body}</p>
      </div>
    )}

    <div className="flex items-center justify-center mt-5">
      <button className=" text-center w-50 h-15 lg:text-2xl border-2 border-red-600 text-red-600 font-semibold py-2 rounded hover:bg-red-600 hover:text-white transition">
        Read More
      </button>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="px-4 py-10 bg-gray-100">
      <LatestEvents />

      <div className="flex justify-center mt-10">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="Logo"
          className="h-20"
        />
      </div>

      <h2 className="text-center text-4xl lg:text-6xl font-bold text-gray-800 mt-8">
        Blog
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
