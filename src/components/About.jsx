import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaMailBulkSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMapPinned } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import LatestEvents from "./Latest_event";
import Nav from "./Nav";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";

// const images = [
//   "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
//   "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg",
//   "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9301.JPG",
//   "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9867.JPG",
//   "https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit2.jpg",
// ];

const About = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  // };

  // const goToSlide = (index) => {
  //   setCurrentIndex(index);
  // };
  return (
    <div>
      <div>
        <div>
          <Nav />
        </div>
        <LatestEvents />
        <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-bold text-black">
          <p>हमारे बारे में</p>
        </div>
        <div className="flex justify-center items-center mt-10">
          <img src="https://swamiabhyanand.com/images/cropped-logo.png"></img>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://swamiabhyanand.com/images/DSC06339.JPG"></img>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 lg:text-2xl text-black font-semibold">
        <p>॥श्री गुरूवे नमः॥</p>
      </div>
      <div className="flex items-center justify-center mt-10 lg:text-2xl text-black font-semibold">
        <p>(परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द सरस्वती जी महराज)</p>
      </div>
      <div className="flex items-center justify-center mt-10 lg:text-2xl text-black font-semibold">
        <p>कुलं पवित्रं जननी कृतार्था वसुन्धरा पुण्यवती च तेन।</p>
      </div>
      <div className="flex items-center justify-center mt-10 lg:text-2xl text-black font-semibold">
        <p>अपारसंवित्सुखसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेतः॥</p>
      </div>
      <div className="flex items-center justify-center mt-10 lg:text-2xl text-black font-semibold">
        <p>(स्कंन्दपुराणम्)</p>
      </div>
      <div className="mt-10 lg:px-20 text-xl">
        <p className="underline font-semibold">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज के
          कार्यों का संक्षिप्त परिचय:
        </p>
        <p className="mt-5">
          चिन्मय मिशन के सांदीपनि आश्रम सिद्धवाड़ी(हिमांचल प्रदेश, भारत) में वर्ष
          १९८७ से १९८९ तक वेदांत अनेकानेक ग्रंथों एवं सनातन धर्म के विषयों का
          गहन अध्ययन किया तत्पश्चात चिन्मय मिशन की शाखा भोपाल एवं लखनऊ शाखा में
          ३ वर्षो तक ब्रम्हचारी शौनक चैतन्य के नाम से आध्यात्मिक ज्ञान का प्रचार
          प्रसार किया है। वर्ष १९९२ से आप स्वतंत्र रूप से वेदांत ज्ञान का प्रचार
          प्रसार कर रहे हैं।
        </p>
        <p className="mt-5">
          वर्ष २००४ में संन्यास दीक्षा ग्रहण करके आप स्वामी अभ्यानंद सरस्वती के
          नाम से जाने गए। आपकी उद्भट विद्वता, वेदांत ज्ञान के लम्बे समय से
          प्रचार प्रसार और सुदूर तक फैली आपकी अनुपम ख्याति से प्रभावित होकर
          दिनाँक ६ जून २०१७ को महामण्लेश्वर समिति द्वारा, परमादर्श आचार्य
          महामण्लेश्वरों की पावन उपस्थिति में आपका “महामण्लेश्वर” के रूप में
          पट्टाभिषेक किया गया।
        </p>
        <p className="mt-5">
          दो वर्ष पश्चात १ जुलाई २०१९ को श्री पंचायती अखाडा महानिर्वाणी के
          महामंडलेश्वर के रूप में अभिषेक किया गया, तब से अनंत श्री विभूषित
          आचार्य महामंडलेश्वर स्वामी अभ्यानंद सरस्वती के रूप में जाने जाते हैं।
        </p>
        <p className="mt-5">
          आप आदि जगद्‌गुरु शंकराचार्य द्वारा प्रतिपादित अद्वैतमत को मानने वाले
          सभी वेदान्त शास्त्रों के ज्ञाता है। साथ ही साथ भगवतगीता , रामचरितमानस,
          श्रीमद्‌भागवत महापुराण आदि विषयों पर भी आपकी सारगर्भित “प्रसन्न गम्भीर
          शैली” में प्रवचन भी श्रवण योग्य है | आप उत्तरप्रदेश के कई शहरों में
          आश्रम स्थापित करके सनातन धर्म की अखण्ड परम्परा को गति प्रदान कर रहे
          हैं जिसमें हरिद्वार, लेखनऊ मेरठ एवं सीतापुर शहर प्रमुख हैं।
        </p>
        <p className="underline font-semibold mt-10">
          शौनक कुटीर हरिद्वार, ( उत्तरांचल )
        </p>
        <p className="mt-5">
          परिचय:- सर्वप्रथम दिनांक{" "}
          <span className="font-semibold">19 जून 1998</span> को इस आश्रम की नींव
          रखी गयी। स्वामी जी ने अपने पूर्व नाम ब्रह्मचारी शौनक चैतन्य के नाम से
          इस आश्रम का नाम <span className="font-semibold">“शौनक कुटीर”</span>{" "}
          रखा, जिसमें आज 50 कमरों से युक्त वृहद् आश्रम रूप में परिणत हो गया है।
          आश्रम में पूजा स्थल, सत्संग हॉल, रसोई भण्डार, स्वामीजी का निवास स्थान
          आदि है। जिसका संचालन “शौनक कुटीर ” आश्रम समिति द्वारा किया जाता है।
        </p>
        <p className="font-semibold mt-10">गतिविधियाँ : –</p>
        <p className=" mt-10">1.संस्कृत पाठशाला व गौशाला का संचालन।</p>
        <p>
          2.स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशीत करना जिसमें लगभग 30
          पुस्तकें प्रकाशित हो चुकी हैं।
        </p>
        <p>
          3.नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग
          प्रवचन
        </p>
        <p>4.प्रत्येक रविवार हवन, स्वाध्याय, आदि ।</p>
        <p className="font-semibold underline mt-10">वेदान्त आश्रम मेरठ :</p>
        <p className="mt-5">
          स्वामीजी द्वारा मेरठ शहर के ग्राम बिजौली में आश्रम स्थापित है इस आश्रम
          में संस्कृत पाठशाला, गौशाला एवं पंचमुखी महादेव मन्दिर स्थापित है। इस
          सबका कुशल संचालन वेदान्त आश्रम समिति द्वारा एवं स्वामी अभेदानन्द
          सरस्वती जी द्वारा किया जाता है।
        </p>
        <p className="font-semibold underline mt-10">
          प्रज्ञानम् सत्संग आश्रम महोली, सीतापुर उत्तर प्रदेश :
        </p>
        <p className="mt-5">
          “प्रज्ञानम् सत्संग आश्रम” नाम से इस आश्रम की स्थापना स्वामी जी द्वारा
          की गई है जहां पर भव्य यज्ञशाला, राधा कृष्ण मन्दिर एवं संत निवास आदि
          है। इसका संचालन प्रज्ञानम् सत्संग आश्रम समिति द्वारा किया जाता है।
        </p>
      </div>
      <Seventh />
      <Eighth />
      <Ninth />
    </div>
  );
};

export default About;
