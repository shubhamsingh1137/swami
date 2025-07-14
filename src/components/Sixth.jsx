import React from "react";
import { useNavigate } from "react-router-dom";
import swamiPic7 from "../assets/Images/swami_pic7.png";
import sanskritPic from "../assets/Images/sanskrit1_pic8.jpg";

const Sixth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-10 bg-gray-50 gap-10">
      {/* Box 1: गौशाला */}
      <div className="w-full lg:w-1/2 border-2 border-white shadow-2xl shadow-gray-900 p-5 rounded-lg bg-white flex flex-col justify-between">
        <div className="flex items-center justify-center mb-5">
          <img
            src={swamiPic7}
            alt="Swami Gaushala"
            className="w-full h-50 md:w-40 md:h-24 lg:w-full lg:h-80 object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            स्वामी अभयानंद गौशाला समिति
          </h2>
        </div>

        <p className="mt-6 text-sm md:text-base lg:text-2xl text-gray-700 text-justify">
          गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी
          कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा
          के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को
          पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः
          हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।
        </p>

        <div className="flex justify-center mt-8 lg:mt-12">
          <button
            onClick={() => navigate("/about")}
            className="text-orange-500 px-6 py-3 border-2 border-orange-500 text-base md:text-lg hover:text-white hover:bg-orange-200 rounded-md transition"
          >
            और पढ़ें
          </button>
        </div>
      </div>

      {/* Box 2: संस्कृत विद्यालय */}
      <div className="w-full lg:w-1/2 border-2 border-white shadow-2xl shadow-gray-900 p-5 rounded-lg bg-white flex flex-col justify-between">
        <div className="flex items-center justify-center mb-5">
          <img
            src={sanskritPic}
            alt="Sanskrit Vidyalaya"
            className="w-full h-50 md:w-40 md:h-24 lg:w-full lg:h-80 object-cover transition duration-300 hover:scale-105 rounded-lg"
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            स्वामी अभयानंद संस्कृत विद्यालय
          </h2>
        </div>

        <p className="mt-6 text-sm md:text-base lg:text-2xl text-gray-700 text-justify">
          स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी
          वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है।
          साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता
          है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी
          विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक
          रविवार।
        </p>

        <div className="flex justify-center mt-8 lg:mt-12">
          <button
            onClick={() => navigate("/about")}
            className="text-orange-500 px-6 py-3 border-2 border-orange-500 text-base md:text-lg hover:text-white hover:bg-orange-200 rounded-md transition"
          >
            और पढ़ें
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
