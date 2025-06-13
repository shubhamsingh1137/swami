import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Loader Component
const CircularProgressWithLabel = ({ value }) => (
  <Box position="relative" display="inline-flex">
    <CircularProgress variant="determinate" value={value} size={80} />
    <Box
      top={0}
      left={0}
      bottom={0}
      right={0}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="caption" component="div" color="textSecondary">
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 100);
      return () => clearInterval(timer);
    }
  }, [loading]);

  const fetchapi = async () => {
    try {
      const response = await axios.post(
        "https://m1blog.aaragroups.com/blog/store-based-blog-list-api/",
        { store_id: 1 }
      );
      // Ensure data.blog_list is an array before setting
      setData(response?.data?.blog_list || []);
    } catch (error) {
      console.error("fetch failed error", error);
    } finally {
      // Small delay to allow progress bar to show, then set loading to false
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-bold text-black">
        <p>हमारे बारे में</p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="logo"
        />
      </div>

      {/* Loader or Slider */}
      <div className="relative mt-10 px-4 lg:px-20">
        {loading ? (
          <div className="flex justify-center items-center h-72">
            <CircularProgressWithLabel value={progress} />
          </div>
        ) : (
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="px-2">
                <img
                  src={item.images}
                  alt={`slider-${index}`}
                  className="rounded-xl h-65 w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Additional Content - Added this section */}
      <div className="flex items-center justify-center mt-10 lg:text-2xl text-black font-semibold">
        <p>॥श्री गुरूवे नमः॥</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-5 text-base lg:text-xl text-gray-700 mx-5 lg:mx-20 leading-relaxed">
        <p>
          संत श्री अभयानंद जी महाराज का जन्म उत्तर प्रदेश के एक छोटे से गाँव में
          हुआ था। उन्होंने छोटी उम्र से ही आध्यात्मिकता और ज्ञान की प्यास के
          संकेत दिखाए। उन्होंने गहन तपस्या और ध्यान में वर्षों बिताए, विभिन्न
          शास्त्रों का अध्ययन किया और आध्यात्मिक गुरुओं से शिक्षा प्राप्त की।
          उनकी शिक्षाएं वेदों, उपनिषदों और अन्य प्राचीन भारतीय ग्रंथों के
          सिद्धांतों में गहराई से निहित हैं। वे आत्म-साक्षात्कार, दिव्य प्रेम और
          अहिंसा के महत्व पर जोर देते हैं।
        </p>
        <p className="mt-5">
          महाराजश्री श्री शंकराचार्य, श्री रामानुजाचार्य, श्री माधवाचार्य, श्री
          निम्बार्काचार्य एवं श्री वल्लभाचार्य आदि पाँच प्रमुख आचार्य परम्पराओं
          एवं श्री कृष्ण प्रणामी, श्री स्वामी नारायण, श्री राधावल्लभ, श्री
          कबीरपंथी, श्री दादू पंथी, श्री वल्लभ आदि विभिन्न पंथों की शिक्षाओं को
          सम्मिलित करते हुए सभी परम्पराओं में सामंजस्य स्थापित करते हैं। सनातन
          धर्म की अनेक मान्यताओं में एकता और सामंजस्य स्थापित करने में
          महाराजश्री का अतुलनीय योगदान रहा है। वर्तमान समय में महाराजश्री की
          अद्वितीय जीवन यात्रा एक आध्यात्मिक जागृति है।
        </p>
        <p className="mt-5">
          महाराजश्री ने केवल आध्यात्मिक उपदेश ही नहीं दिए, बल्कि समाज सेवा के
          कार्य भी किए हैं। उन्होंने शिक्षा, स्वास्थ्य और पर्यावरण संरक्षण के
          क्षेत्र में कई पहल की हैं। उनके मार्गदर्शन में कई आश्रम और संस्थान
          स्थापित किए गए हैं, जो वंचितों की सेवा करते हैं और आध्यात्मिक मूल्यों
          को बढ़ावा देते हैं। महाराजश्री का जीवन और उनकी शिक्षाएं हमें यह याद
          दिलाती हैं कि सच्ची आध्यात्मिक प्रगति आंतरिक शांति, निस्वार्थ सेवा और
          सभी जीवित प्राणियों के प्रति प्रेम में निहित है।
        </p>
      </div>

      <div className="flex justify-center items-center text-center mt-10 mb-10 text-base lg:text-xl text-gray-700 mx-5 lg:mx-20 leading-relaxed">
        <p>
          महाराजश्री का दर्शन न केवल भारतीय संस्कृति की गहन आध्यात्मिक परंपराओं
          में गहराई से निहित है, बल्कि आधुनिक समय की चुनौतियों के लिए भी
          प्रासंगिक है। उनकी शिक्षाएं हमें आंतरिक शांति, निस्वार्थ सेवा और सभी
          जीवित प्राणियों के प्रति प्रेम प्राप्त करने के लिए प्रेरित करती हैं।
        </p>
      </div>
    </div>
  );
};

export default About;
