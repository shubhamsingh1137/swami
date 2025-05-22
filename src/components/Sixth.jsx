import React from "react";

const Sixth = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-center">
      <div className="lg:w-170 lg:h-290 border-2 border-gray-900 lg:ml-20 shadow-2xl shadow-gray-900 mb-10 lg:mt-10 ">
        <div className="flex items-center justify-center mt-10">
          <div>
            <img
              className="w-140 h-90  transition duration-300  hover:scale-105"
              src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/pic5.png"
            ></img>
          </div>
        </div>
        <div className="flex justify-center text-3xl lg:text-5xl mt-10 font-semibold">
          <p>स्वामी अभयानंद गौशाला</p>
        </div>
        <div className="flex justify-center text-3xl lg:text-5xl mt-5 font-semibold">
          <p>समिति</p>
        </div>
        <div className="flex items-center mt-15 text-3xl ml-5 text-gray-700">
          <p>
            गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी
            कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा
            के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को
            पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः
            हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।
          </p>
        </div>
        <div className="flex justify-center items-center lg:mt-20 ">
          <button className="text-orange-500 w-35 h-20 border-2 border-orange-500 text-3xl hover:text-white hover:bg-orange-200 cursor-pointer">
            और पढ़ें
          </button>
        </div>
      </div>
      <div className="lg:w-170 lg:h-290 border-2 border-gray-900 ml-20 shadow-2xl shadow-gray-900 ">
        <div className="flex items-center justify-center mt-10">
          <div>
            <img
              className="w-140 h-90 rounded-2xl transition duration-300  hover:scale-105"
              src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg"
            ></img>
          </div>
        </div>
        <div className="flex justify-center text-3xl lg:text-5xl mt-10 font-semibold">
          <p>स्वामी अभयानंद संस्कृत</p>
        </div>
        <div className="flex justify-center text-3xl lg:text-5xl mt-5 font-semibold">
          <p>विद्यालय</p>
        </div>
        <div className="flex items-center mt-15 text-3xl ml-5 text-gray-700">
          <p>
            स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी
            वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते
            है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया
            जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति
            किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन
            प्रत्येक रविवार।
          </p>
        </div>
        <div className="flex justify-center items-center mt-20">
          <button className="text-orange-500 w-35 h-20 border-2 border-orange-500 text-3xl hover:text-white hover:bg-orange-200 cursor-pointer">
            और पढ़ें
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
