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
    <div className="bg-[#f7f7dc] min-h-screen text-[#222] px-4 py-10">
      {/* Blog Header */}
      <div className="flex flex-col items-center">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="Logo"
          className="h-20 mb-2"
        />
        <h1 className="text-5xl font-bold">Blog</h1>
      </div>

      {/* Blog Image */}
      <div className="flex justify-center mt-10">
        <img
          src={blog.images}
          alt={blog.title}
          className="rounded shadow-md max-w-full w-[700px]"
        />
      </div>

      {/* Blog Metadata */}
      <div className="max-w-3xl mx-auto mt-6 text-sm lg:text-2xl text-gray-700  items-center gap-4">
        <p className="font-bold text-2xl mb-2 text-black">{blog.title}</p>
        <div className="flex items-center text-xl mb-2 gap-1">
          <FaCalendarAlt className="text-orange-500" />
          <span>{new Date(blog.date_created).toLocaleDateString("hi-IN")}</span>
        </div>
        <div className="flex items-center gap-1 text-xl ">
          <FaMapMarkerAlt className="text-orange-500" />
          <span>{blog.category || "N/A"}</span>
        </div>
        <div className="flex items-center text-xl gap-1 mt-2">
          <FaTags className="text-orange-500" />
          <span>{blog.tags || "General"}</span>
        </div>
        <div className="flex items-center gap-1 mt-2 text-xl">
          <FaRegCommentDots className="text-orange-500" />
          <span>(0)</span>
        </div>
      </div>

      {/* Social Share */}
      <div className="max-w-3xl mx-auto mt-6">
        <p className="font-semibold text-4xl mb-5">
          Share This Blog with Others
        </p>
        <div className="flex gap-2 mt-2 text-4xl text-gray-600">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-600 cursor-pointer" />
          <FaTwitter className="hover:text-sky-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
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
