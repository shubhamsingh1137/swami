import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaMailBulkSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import LatestEvents from "./Latest_event";
import Nav from "./Nav";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";
const Blog = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <LatestEvents />
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png"></img>
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>Blog</p>
      </div>
      <div className="flex gap-5 mt-10 pl-10">
        <img
          className="h-40"
          src="https://swamiabhyanand.com/uploads/stsang_banner2.jpg"
        ></img>
        <div>
          <p className="font-semibold text-4xl text-gray-800">Blog - 1</p>
          <div className=" flex gap-3 text-2xl text-gray-500 mt-5">
            <FaCalendarAlt />
            <p>January 5, 2023 </p>
            <FaMapMarkerAlt />
            <p>Meerut</p>
            <FaFolderOpen />
          </div>
          <div className="flex gap-3 text-2xl text-gray-500 mt-5 ">
            <IoChatbubbles />
            <p>(0)</p>
          </div>
          <div>
            <p className="mt-10 font-semibold text-3xl text-gray-800">
              Share This Blog with Others
            </p>
            <div className="flex gap-3 text-2xl text-gray-600 mt-5">
              <FaWhatsappSquare />
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
            <div className="mt-10 text-2xl text-gray-500">
              <p>New Content ...</p>
            </div>
            <div className=" w-35 h-13 border-2 border-red-600 mt-10 text-2xl text-gray-500">
              <p className="flex items-center justify-center">Read More</p>
            </div>
          </div>
        </div>
        {/* 2nd img/ */}
        <div>
          <img
            className="h-40 w-70"
            src="https://swamiabhyanand.com/uploads/swami_satsang_banner1.jpg"
          ></img>
        </div>
        <div>
          <p className="font-semibold text-4xl text-gray-800">Blog - 2</p>
          <div className=" flex gap-3 text-2xl text-gray-500 mt-5">
            <FaCalendarAlt />
            <p>January 5, 2023 </p>
            <FaMapMarkerAlt />
            <p> Haridwar</p>
            <FaFolderOpen />
          </div>
          <div className="flex gap-3 text-2xl text-gray-500 mt-5 ">
            <IoChatbubbles />
            <p>(0)</p>
          </div>

          <div>
            <p className="mt-10 font-semibold text-3xl text-gray-800">
              Share This Blog with Others
            </p>
            <div className="flex gap-3 text-2xl text-gray-600 mt-5">
              <FaWhatsappSquare />
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
            <div className="text-xl mt-5">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-gray-800 leading-relaxed text-justify">
                <p className="mb-4 text-lg font-semibold text-center text-gray-900">
                  उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः दैवं हि दैवमिति कापुरुषा
                  वदंति।
                </p>
                <p className="mb-2">
                  दैवं निहत्य कुरु पौरुषं आत्मशक्त्या यत्ने कृते यदि न सिध्यति न
                  कोऽत्र दोषः।
                </p>
                <p className="mt-4">
                  उद्योगी ( मेहनती ) तथा साहसी लोगों को ही लक्ष्मी प्राप्त होती
                  है। यह तो निकम्मे लोग हैं जो कहते रहते हैं कि भाग्य में होगा
                  तो मिल कर रहेगा। भाग्य को मारो गोली, जितनी तुम्हारे पास
                  योग्यता और शक्ति है, अपना उद्यम ( मेहनत ) करते रहो, यदि
                  प्रयत्न करने पर भी सफलता नहीं मिलती है तो इसमें तुम्हारा कोई
                  दोष नहीं।
                </p>
              </div>
              <div className=" w-35 h-13 border-2 border-red-600 mt-10 text-2xl text-gray-500">
                <p className="flex items-center justify-center">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-right mt-10 ml-10">
        <div className="">
          <img
            className="h-40 w-60"
            src="https://swamiabhyanand.com/uploads/DSC_9301.JPG"
          ></img>
        </div>
        <div>
          <p className="font-semibold text-4xl text-gray-800">Blog - 3</p>
          <div className=" flex gap-3 text-2xl text-gray-500 mt-5">
            <FaCalendarAlt />
            <p>January 5, 2023 </p>
            <FaMapMarkerAlt />
            <p> Sitapur</p>
            <FaFolderOpen />
          </div>
          <div className="flex gap-3 text-2xl text-gray-500 mt-5 ">
            <IoChatbubbles />
            <p>(0)</p>
          </div>
          <div>
            <p className="mt-10 font-semibold text-3xl text-gray-800">
              Share This Blog with Others
            </p>
            <div className="flex gap-3 text-2xl text-gray-600 mt-5">
              <FaWhatsappSquare />
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
            <div className="text-xl mt-5">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-gray-800 leading-relaxed text-justify">
                <p className="mb-4 text-lg font-semibold text-center text-gray-900">
                  उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः दैवं हि दैवमिति कापुरुषा
                  वदंति।
                </p>
                <p className="mb-2">
                  दैवं निहत्य कुरु पौरुषं आत्मशक्त्या यत्ने कृते यदि न सिध्यति न
                  कोऽत्र दोषः।
                </p>
                <p className="mt-4">
                  उद्योगी ( मेहनती ) तथा साहसी लोगों को ही लक्ष्मी प्राप्त होती
                  है। यह तो निकम्मे लोग हैं जो कहते रहते हैं कि भाग्य में होगा
                  तो मिल कर रहेगा। भाग्य को मारो गोली, जितनी तुम्हारे पास
                  योग्यता और शक्ति है, अपना उद्यम ( मेहनत ) करते रहो, यदि
                  प्रयत्न करने पर भी सफलता नहीं मिलती है तो इसमें तुम्हारा कोई
                  दोष नहीं।
                </p>
              </div>
              <div className=" w-35 h-13 border-2 border-red-600 mt-10 text-2xl text-gray-500">
                <p className="flex items-center justify-center">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Seventh />
      <Eighth />
      <Ninth />
    </div>
  );
};

export default Blog;
