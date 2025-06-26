import React from "react";
import { useNavigate } from "react-router-dom";

const Sixth = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  lg:flex-row lg:items-center justify-center p-4 lg:p-10 bg-gray-50">
      {" "}
      <div className="w-full max-w-sm lg:max-w-lg border-2 border-white shadow-2xl shadow-gray-900 mb-10 lg:mb-0 lg:mr-10 p-5 rounded-lg bg-white">
        {" "}
        <div className="flex items-center justify-center mt-5 mb-5 lg:mt-10">
          {" "}
          <div>
            <img
              className="w-32 h-20 md:w-40 md:h-24 lg:w-110 lg:h-80 transition duration-300 hover:scale-105" // Smaller image on mobile, slightly larger on medium screens
              src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/pic5.png"
              alt="Gaushala" // Added alt text for accessibility
            ></img>
          </div>
        </div>
        <div className="text-xl md:text-3xl lg:text-4xl mt-5 font-semibold text-center leading-tight">
          {" "}
          {/* Responsive text size, text-center, leading-tight */}
          <p>स्वामी अभयानंद गौशाला</p>
        </div>
        <div className="text-xl md:text-3xl lg:text-4xl mt-2 font-semibold text-center leading-tight">
          {" "}
          {/* Responsive text size, text-center, leading-tight */}
          <p>समिति</p>
        </div>
        <div className="mt-8 text-sm md:text-base lg:text-2xl text-gray-700 text-justify">
          {" "}
          {/* Responsive text size, text-justify */}
          <p>
            गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी
            कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा
            के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को
            पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः
            हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।
          </p>
        </div>
        <div className="flex justify-center items-center mt-8 lg:mt-12">
          {" "}
          {/* Adjusted margin-top */}
          <button
            onClick={() => navigate("/about")}
            className="text-orange-500 px-6 py-3 border-2 border-orange-500 text-base md:text-lg hover:text-white hover:bg-orange-200 cursor-pointer transition duration-300 rounded-md"
          >
            {" "}
            {/* Responsive button text, padding, rounded corners, transition */}
            और पढ़ें
          </button>
        </div>
      </div>
      {/* Box 2: Swami Abhyanand Sanskrit Vidyalaya */}
      <div className="w-full max-w-sm lg:max-w-lg border-2 border-white shadow-2xl shadow-gray-900 p-5 rounded-lg bg-white">
        {" "}
        {/* Adjusted max-width, added padding, rounded corners, and background */}
        <div className="flex items-center justify-center mt-5 mb-5 lg:mt-10">
          {" "}
          {/* Adjusted margins */}
          <div>
            <img
              className="w-32 h-20 md:w-40 md:h-24 lg:w-110 lg:h-80 rounded-lg transition duration-300 hover:scale-105" // Smaller image on mobile, slightly larger on medium screens, rounded-lg
              src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg"
              alt="Sanskrit Vidyalaya" // Added alt text for accessibility
            ></img>
          </div>
        </div>
        <div className="text-xl md:text-3xl lg:text-4xl mt-5 font-semibold text-center leading-tight">
          {" "}
          {/* Responsive text size, text-center, leading-tight */}
          <p>स्वामी अभयानंद संस्कृत</p>
        </div>
        <div className="text-xl md:text-3xl lg:text-4xl mt-2 font-semibold text-center leading-tight">
          {" "}
          {/* Responsive text size, text-center, leading-tight */}
          <p>विद्यालय</p>
        </div>
        <div className="mt-8 text-sm md:text-base lg:text-2xl text-gray-700 text-justify">
          {" "}
          {/* Responsive text size, text-justify */}
          <p>
            स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी
            वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते
            है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया
            जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति
            किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन
            प्रत्येक रविवार।
          </p>
        </div>
        <div className="flex justify-center items-center mt-8 lg:mt-12">
          {" "}
          {/* Adjusted margin-top */}
          <button
            onClick={() => navigate("/about")}
            className="text-orange-500 px-6 py-3 border-2 border-orange-500 text-base md:text-lg hover:text-white hover:bg-orange-200 cursor-pointer transition duration-300 rounded-md"
          >
            {" "}
            {/* Responsive button text, padding, rounded corners, transition */}
            और पढ़ें
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
