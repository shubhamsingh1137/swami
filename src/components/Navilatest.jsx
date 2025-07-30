import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMicrophone,
  FaShareAlt,
  FaLinkedin,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Imageformat } from "../Utilis/Imageformat/Index";
import logo from "../assets/Images/logoswami.png";
const Navilatest = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          "https://m1blog.aaragroups.com/blog/api/event_list_api/",
          {
            params: { store_id: 14 },
            headers: {
              Token: "55cf7e557b527cb3f44de530cc98ca14dea80dd1",
            },
          }
        );

        const events = response?.data?.data || [];
        const selected = events.find((e) => String(e.id) === id);
        setEvent(selected);
      } catch (error) {
        console.error("Failed to fetch event", error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-orange-500 font-semibold">
          Loading Event...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4">
      {/* Banner */}
      <div className="flex justify-center mb-6">
        <img
          src={
            event.images ||
            "https://swamiabhyanand.com/uploads/1CC20545-79EE-4343-9B31-3B2FF6FBD15D.png"
          }
          alt="Event Banner"
          className="w-full max-w-6xl lg:h-200 rounded-lg shadow-lg"
        />
      </div>

      {/* Event Details */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          {event.Title || "कार्यक्रम"}
        </h2>

        <div className="flex items-center text-xl font-semibold text-gray-700 mb-5">
          <FaCalendarAlt className="mr-2 text-orange-500" />
          <span>
            {event.date} to {event.created_at?.slice(0, 10)}
          </span>
        </div>

        <div className="flex items-center text-xl font-semibold text-gray-700 mb-5">
          <FaMapMarkerAlt className="mr-2 text-orange-500" />
          <span>{event.location || "स्थान नहीं मिला"}</span>
        </div>

        <div className="flex items-center text-xl font-semibold text-gray-700 mb-4">
          <FaMicrophone className="mr-2 text-orange-500" />
          <span>
            {event.speaker ||
              "आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज"}
          </span>
        </div>

        {/* Social Icons */}
        <div className="border-t pt-4 mt-4">
          <p className="text-gray-600  text-2xl  mb-5 font-semibold">
            Share This Event with Others
          </p>
          <div className="flex gap-4 text-orange-500 text-2xl">
            <FaShareAlt />
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/swamiabhyanandsaraswati/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/swamiabhayanandsaraswati"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/ShriShaunak/status/1552512925071355904"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/swami-abayananda-saraswathi-0549327a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-gray-800 font-semibold mt-10 ml-10 text-xl">
            संपर्क सूत्र : 7982855378, 7703877425, 8178826341, 9818076037 ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navilatest;
