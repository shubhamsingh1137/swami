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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vidioimage from "./Vidioimage";
import logo from "../assets/Images/logoswami.png";
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

export default function Contact() {
  const initialValues = {
    firstName: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone Number is required"),
    message: Yup.string(),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const stored = JSON.parse(localStorage.getItem("contacts") || "[]");
    const updated = [
      ...stored,
      { ...values, submittedAt: new Date().toISOString() },
    ];
    localStorage.setItem("contacts", JSON.stringify(updated));

    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }, 500);
  };

  return (
    <div>
      <div className="max-w-8xl min-h-100  ">
        <div className="flex flex-col lg:flex-row gap-10 bg-yellow-50 p-6 rounded-xl shadow-xl text-3xl">
          {/* Form Section */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex-1 space-y-6">
                <div>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="First Name*"
                    className="w-full border-b border-gray-400 bg-transparent outline-none p-2 placeholder:text-xl"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address*"
                    className="w-full border-b border-gray-400 bg-transparent outline-none p-2 placeholder:text-xl"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    name="phone"
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full border-b border-gray-400 bg-transparent outline-none p-2 placeholder:text-xl"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    name="message"
                    as="textarea"
                    rows="4"
                    placeholder="Message"
                    className="w-full border border-blue-300 rounded p-2 outline-none resize-none placeholder:text-xl"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-gray-600 bg-orange-400 border-2 border-yellow-700 py-2 rounded font-semibold hover:bg-orange-600 transition"
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </button>
              </Form>
            )}
          </Formik>
          <ToastContainer />

          {/* Static Map Section */}
          <div className="flex-1 h-130 rounded overflow-hidden shadow-md">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=W33Q%2BC44%20Chinhat%2C%20Lucknow%2C%20Uttar%20Pradesh&output=embed"
              className="w-full h-full border-0 hover:scale-105 transition-transform duration-500 ease-in-out"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Dynamic Locations */}
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-[#fffef0] shadow-2xl shadow-orange-400 ">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] lg:w-[23%] bg-white hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl p-4 space-y-3 border-t-4 shadow-2xl shadow-orange-400 border-orange-500"
            >
              <h3 className="text-xl lg:text-4xl font-bold text-center text-orange-600 uppercase hover:scale-105 transition-transform duration-500 ease-in-out">
                {loc.name}
              </h3>

              <iframe
                src={loc.mapSrc}
                className="w-full h-50 rounded-md lg:mt-5 hover:scale-105 transition-transform duration-500 ease-in-out"
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <div className="text-center space-y-5 text-sm lg:text-xl md:text-base">
                <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold">
                  <FaMapMarkerAlt />
                  <p className="text-black hover:scale-105 transition-transform duration-500 ease-in-out">
                    {loc.address}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-500 ease-in-out">
                  <FaPhoneAlt className="text-orange-500" />
                  <span>{loc.phone}</span>
                </div>

                <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-500 ease-in-out">
                  <FaMobileAlt className="text-orange-500" />
                  <span>{loc.mobile}</span>
                </div>

                <div className="font-bold hover:scale-105 transition-transform duration-500 ease-in-out">
                  <p>Contact Person:</p>
                  <p>{loc.person}</p>
                </div>

                <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-500 ease-in-out">
                  <FaEnvelope className="text-orange-500" />
                  <span>{loc.email}</span>
                </div>

                {/* Dynamic Google Maps Link */}
                <div className="pt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      loc.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-full shadow hover:scale-105 transition-transform duration-500 ease-in-out"
                  >
                    CLICK HERE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Vidioimage group="contactus" />
      </div>
    </div>
  );
}
