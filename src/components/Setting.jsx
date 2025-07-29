import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDonate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Countries and States
const countries = [
  {
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    states: ["Uttar Pradesh", "Maharashtra", "Delhi", "Bihar"],
  },
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    states: ["California", "New York", "Texas"],
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    states: ["England", "Scotland", "Wales"],
  },
];

const countryCodes = [
  { name: "India", code: "+91" },
  { name: "USA", code: "+1" },
  { name: "UK", code: "+44" },
];

const nearbyAshrams = [
  "स्वामी अभयानंद आश्रम, हरिद्वार, उत्तराखण्ड",
  "स्वामी अभयानंद आश्रम, लखनऊ,उत्तर प्रदेश",
  "स्वामी अभयानंद आश्रम, मेरठ,उत्तर प्रदेश",
  "स्वामी अभयानंद आश्रम, मुंबई",
  "स्वामी अभयानंद आश्रम, मोहाली पंजाब",
  "स्वामी अभयानंद आश्रम, सीतापुर उत्तर प्रदेश",
  "स्वामी अभयानंद आश्रम, राजस्थान",
];

const Setting = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      sex: "",
      email: "",
      countryCode: "+91",
      mobile: "",
      country: "",
      state: "",
      Nearbyashram: "",
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      sex: Yup.string().required("Sex is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
        .required("Mobile number is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      Nearbyashram: Yup.string().required("Nearby Ashram is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const token = localStorage.getItem("token");
        const payload = {
          first_name: values.firstName,
          last_name: values.lastName,
          gender: values.sex,
          email: values.email,
          country: values.country,
          state: values.state,
        };

        await axios.patch(
          "https://m1blog.aaragroups.com/user-sign-up-or-signin-api/",
          payload,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        toast.success("Profile updated successfully!");
        resetForm();
      } catch (error) {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile");
      }
    },
  });

  const getStates = () => {
    const country = countries.find((c) => c.name === formik.values.country);
    return country ? country.states : [];
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://m1blog.aaragroups.com/user-sign-up-or-signin-api/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        const d = res.data.data;
        formik.setValues({
          firstName: d.first_name || "",
          lastName: d.last_name || "",
          sex: d.gender || "",
          email: d.email || "",
          mobile: d.phone?.toString().slice(-10) || "",
          countryCode: d.username?.slice(0, d.username.length - 10) || "+91",
          country: d.country || "",
          state: d.state || "",
          Nearbyashram: "",
          description: "",
        });
      } catch (err) {
        console.error("Failed to fetch user data", err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="min-h-screen bg-gradient-to-r from-orange-300 via-yellow-50 to-pink-300 py-10 px-4 sm:px-6 lg:px-35">
        <div className="bg-white/70  rounded-xl shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow">
              <FaDonate className="text-white text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-orange-700">
                दान करें - हमारे मिशन को सहयोग दें
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                क्या आप हमारे मिशन में योगदान देना चाहेंगे? आपका दान हमारे आश्रम
                की गतिविधियों, आध्यात्मिक कार्यक्रमों और सेवाओं को आगे बढ़ाने
                में सहायक होगा। आपका हर एक योगदान मूल्यवान है और हम इसके लिए
                आभारी हैं।
              </p>
              <button
                onClick={() => navigate("/donate")}
                className="mt-4 text-sm font-semibold text-red-600 hover:text-red-800 hover:underline transition"
              >
                मैं दान करना चाहता हूँ।
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800 underline underline-offset-4">
            Edit Profile
          </h2>
        </div>

        <div className="bg-white/70 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-xl max-w-5xl mx-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <InputBox label="First Name" name="firstName" formik={formik} />
            <InputBox label="Last Name" name="lastName" formik={formik} />
            <SelectBox
              label="Sex"
              name="sex"
              options={["Male", "Female", "Other"]}
              formik={formik}
            />
            <InputBox label="Email" name="email" type="email" formik={formik} />

            {/* Mobile + Country Code */}
            <div className="bg-orange-100 p-4 rounded-2xl shadow">
              <label className="block mb-1 font-semibold">Mobile Number</label>
              <div className="flex gap-2 flex-col sm:flex-row">
                <select
                  name="countryCode"
                  onChange={formik.handleChange}
                  value={formik.values.countryCode}
                  className="sm:w-1/3 w-full p-2 rounded-xl bg-white border"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="mobile"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  className="sm:w-2/3 w-full p-2 rounded-xl bg-white border"
                  placeholder="Enter 10-digit number"
                />
              </div>
              {formik.errors.mobile && formik.touched.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.mobile}
                </p>
              )}
            </div>

            <SelectBox
              label="Country"
              name="country"
              options={countries.map((c) => c.name)}
              formik={formik}
            />
            <SelectBox
              label="State"
              name="state"
              options={getStates()}
              formik={formik}
            />
            <SelectBox
              label="Nearby Ashram"
              name="Nearbyashram"
              options={nearbyAshrams}
              formik={formik}
            />

            {/* Description */}
            <div className="bg-orange-100 p-4 rounded-2xl shadow md:col-span-2">
              <label className="block mb-1 font-semibold">Description</label>
              <textarea
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                className="w-full p-2 rounded-xl bg-white border"
              ></textarea>
              {formik.errors.description && formik.touched.description && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.description}
                </p>
              )}
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 hover:scale-105 transition duration-150 text-white font-bold px-6 py-2 rounded-full shadow-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// Reusable Input Field
const InputBox = ({ label, name, formik, type = "text" }) => (
  <div className="bg-orange-100 p-4 rounded-2xl shadow">
    <label className="block mb-1 font-semibold">{label}</label>
    <input
      type={type}
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
      className="w-full p-2 rounded-xl bg-white border"
    />
    {formik.errors[name] && formik.touched[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

// Reusable Select Field
const SelectBox = ({ label, name, options, formik }) => (
  <div className="bg-orange-100 p-4 rounded-2xl shadow">
    <label className="block mb-1 font-semibold">{label}</label>
    <select
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
      className="w-full p-2 rounded-xl bg-white border"
    >
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {formik.errors[name] && formik.touched[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

export default Setting;
