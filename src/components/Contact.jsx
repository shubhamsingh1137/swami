import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import Nav from "./Nav";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";
import LatestEvents from "./Latest_event";

const locations = [
  {
    name: "LUCKNOW ASHRAM",
    mapSrc: "https://www.google.com/maps/embed?...",
    address: "W33P+FQP Aarsh Vidya Gurukulam, Anora Kala, Uttar Pradesh 226028",
    phone: "+91-9956578080",
    mobile: "+91-9415344798",
    person: "Swami Ramanand Saraswati Ji",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "MEERUT ASHRAM",
    mapSrc: "https://www.google.com/maps/embed?...",
    address: "VQ82+R48 Vedant Ashram, Meerut, Uttar Pradesh 250002",
    phone: "+91-9956578080",
    mobile: "+91-8171435255",
    person: "Swami Abhedanand Saraswati Ji",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "SITAPUR ASHRAM",
    mapSrc: "https://www.google.com/maps/embed?...",
    address: "Shri Radha Krishna Mandir, NH 24, Maholi, Uttar Pradesh 261141",
    phone: "+91-9956578080",
    mobile: "+91-9415565906",
    person: "Swami Pranavanand Saraswati Ji / Dr Reenu Verma",
    email: "info@swamiabhyanand.com",
  },
  {
    name: "HARIDWAR ASHRAM",
    mapSrc: "https://www.google.com/maps/embed?...",
    address: "Shaunak Kutir, Haripur Kalan, Haridwar – 249205, Uttarakhand",
    phone: "+91-9956578080",
    mobile: "+91-9559414815",
    person: "Swami A. Saraswati Ji / Dr Vinod Pandey Ji",
    email: "info@swamiabhyanand.com",
  },
];
export default function ContactSection() {
  return (
    <div>
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png"></img>
      </div>
      <div className="flex justify-center items-center mt-5 text-4xl lg:text-6xl font-semibold text-black">
        <p>Contact Us</p>
      </div>
      <div className="max-w-8xl  max-h-100 mt-10 p-4">
        <div className="flex flex-col lg:flex-row gap-10 bg-yellow-50 p-6 rounded-xl shadow-xl text-3xl">
          {/* Form Section */}
          <form className="flex-1 space-y-10">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full border-b border-gray-400 bg-transparent outline-none p-2"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full border-b border-gray-400 bg-transparent outline-none p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full border-b border-gray-400 bg-transparent outline-none p-2"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-blue-300 rounded p-2 outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full  text-gray-600 py-2 rounded font-semibold hover:bg-orange-600 transition"
            >
              SEND MESSAGE
            </button>
          </form>

          {/* Map Section */}
          <div className="flex-1 h-130 rounded overflow-hidden shadow-md">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=W33Q%2BC44%20Chinhat%2C%20Lucknow%2C%20Uttar%20Pradesh&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-[#fffef0] shadow-2xl shadow-orange-400">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] lg:w-[23%] bg-white rounded-xl  p-4 space-y-3 border-t-4 shadow-2xl shadow-orange-400 border-orange-500"
            >
              {/* Ashram Name */}
              <h3 className="text-xl lg:text-4xl font-bold text-center text-orange-600 uppercase">
                {loc.name}
              </h3>

              {/* Google Map */}
              <iframe
                src={loc.mapSrc}
                className="w-full h-50 rounded-md lg:mt-5"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <LatestEvents />
              {/* Contact Details */}
              <div className="text-center space-y-10 text-sm lg:text-2xl md:text-base ">
                <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold">
                  <FaMapMarkerAlt />
                  <p className="text-black">{loc.address}</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <FaPhoneAlt className="text-orange-500" />
                  <span>{loc.phone}</span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <FaMobileAlt className="text-orange-500" />
                  <span>{loc.mobile}</span>
                </div>

                <div className="font-bold">
                  <p>Contact Person:</p>
                  <p>{loc.person}</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope className="text-orange-500" />
                  <span>{loc.email}</span>
                </div>

                <div className="pt-2">
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-full shadow">
                    CLICK HERE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Seventh />
        <Eighth />
        <Ninth />
      </div>
    </div>
  );
}
