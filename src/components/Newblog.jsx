import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTags,
  FaRegCommentDots,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const Newblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.post(
          "https://m1blog.aaragroups.com/blog/store-based-blog-list-api/",
          { store_id: 14 }
        );
        const matchedBlog = res?.data?.blog_list?.find(
          (item) => item.id === parseInt(id)
        );
        setBlog(matchedBlog);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading)
    return <div className="text-center py-20 text-lg">Loading...</div>;
  if (!blog)
    return (
      <div className="text-center py-20 text-red-600">Blog not found.</div>
    );

  return (
    <div className="">
      <div className="flex justify-center  hover:scale-105 transition-transform duration-500 ease-in-out ">
        <img
          src={blog.images}
          alt={blog.title}
          className="rounded-2xl shadow-md max-w-5xl w-[900px] h-[500px] "
        />
      </div>

      {/* Blog Metadata */}
      <div className="max-w-4xl mx-auto mt-6 text-sm lg:text-2xl text-gray-700  items-center gap-4">
        <p className="font-bold text-3xl mb-2 text-black  hover:scale-110 transition-transform duration-500 ease-in-out">
          {blog.title}
        </p>
        <div className="flex items-center text-xl mb-2 gap-1  hover:scale-102 transition-transform duration-500 ease-in-out">
          <FaCalendarAlt className="text-orange-500" />
          <span>{new Date(blog.date_created).toLocaleDateString("hi-IN")}</span>
        </div>
        <div className="flex items-center gap-1 text-xl  hover:scale-102 transition-transform duration-500 ease-in-out">
          <FaMapMarkerAlt className="text-orange-500" />
          <span>{blog.category || "N/A"}</span>
        </div>
        <div className="flex items-center text-xl gap-1 mt-2  hover:scale-102 transition-transform duration-500 ease-in-out">
          <FaTags className="text-orange-500" />
          <span>{blog.tags || "General"}</span>
        </div>
        <div className="flex items-center gap-1 mt-2 text-xl  hover:scale-102 transition-transform duration-500 ease-in-out">
          <FaRegCommentDots className="text-orange-500" />
          <span>(0)</span>
        </div>
      </div>

      {/* Social Share */}

      <div className="max-w-4xl mx-auto mt-6">
        <div className="border-t-2 mb-3 "></div>
        <p className="font-semibold text-3xl mb-5 hover:scale-110 transition-transform duration-500 ease-in-out">
          Share This Blog with Others
        </p>
        <div className="flex gap-3 text-4xl mt-5 text-orange-500 ">
          <a
            href="https://www.facebook.com/swamiabhyanandsaraswati/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-180 transition-transform duration-500 ease-in-out"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/swamiabhayanandsaraswati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-180 transition-transform duration-500 ease-in-outr"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/ShriShaunak/status/1552512925071355904"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-180 transition-transform duration-500 ease-in-out"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/swami-abayananda-saraswathi-0549327a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-180 transition-transform duration-500 ease-in-out"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto mt-6 text-[15px] text-justify leading-relaxed text-gray-800">
        {blog.quote && (
          <p className="font-semibold text-lg mb-4 text-gray-900 italic">
            {blog.quote}
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: blog.body }} />
      </div>
    </div>
  );
};

export default Newblog;
