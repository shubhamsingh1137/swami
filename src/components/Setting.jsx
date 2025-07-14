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
        const fullPhone = values.countryCode + values.mobile;

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
      <div className="bg-orange-500 text-gray-800 rounded-md p-6 shadow-2xl max-w-5xl mx-auto mb-10">
        <div className="flex items-start gap-4">
          <div className="bg-blue-400 p-3 rounded-full">
            <FaDonate className="text-gray-800 text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              दान करें - हमारे मिशन को सहयोग दें
            </h3>
            <p className="text-sm text-gray-800">
              क्या आप हमारे मिशन में योगदान देना चाहेंगे? आपका दान हमारे आश्रम
              की गतिविधियों, आध्यात्मिक कार्यक्रमों और सेवाओं को आगे बढ़ाने में
              सहायक होगा। आपका हर एक योगदान मूल्यवान है और हम इसके लिए आभारी
              हैं।
            </p>
            <button
              onClick={() => navigate("/donate")}
              className="mt-4 text-sm italic text-red-800 cursor-pointer hover:underline"
            >
              मैं दान करना चाहता हूँ।
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-4 underline text-gray-800">
          Edit profile
        </h2>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-orange-400">
        <div className="w-full max-w-5xl p-8 bg-orange-500 rounded-lg shadow-md border border-orange-500">
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800"
          >
            {/* First Name */}
            <InputBox label="First Name" name="firstName" formik={formik} />
            <InputBox label="Last Name" name="lastName" formik={formik} />

            {/* Sex */}
            <SelectBox
              label="Sex"
              name="sex"
              options={["Male", "Female", "Other"]}
              formik={formik}
            />

            {/* Email */}
            <InputBox label="Email" name="email" type="email" formik={formik} />

            {/* Mobile + Country Code */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow">
              <label className="block mb-1 font-medium">Mobile Number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  onChange={formik.handleChange}
                  value={formik.values.countryCode}
                  className="w-1/3 p-2 rounded-2xl bg-orange-500"
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
                  className="w-2/3 p-2 rounded-2xl bg-orange-500"
                  placeholder="Enter 10-digit number"
                />
              </div>
              {formik.errors.mobile && formik.touched.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.mobile}
                </p>
              )}
            </div>

            {/* Country */}
            <SelectBox
              label="Country"
              name="country"
              options={countries.map((c) => c.name)}
              formik={formik}
            />

            {/* State */}
            <SelectBox
              label="State"
              name="state"
              options={getStates()}
              formik={formik}
            />

            {/* Nearby Ashram */}
            <SelectBox
              label="Nearby Ashram"
              name="Nearbyashram"
              options={nearbyAshrams}
              formik={formik}
            />

            {/* Description */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow md:col-span-2">
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                className="w-full p-2 rounded-2xl bg-orange-500"
              ></textarea>
              {formik.errors.description && formik.touched.description && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.description}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 hover:scale-105 transition duration-150 text-white font-bold px-6 py-2 rounded"
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

// Reusable Input Field Component
const InputBox = ({ label, name, formik, type = "text" }) => (
  <div className="bg-orange-400 p-4 rounded-2xl shadow">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
      className="w-full p-2 rounded-2xl bg-orange-500"
    />
    {formik.errors[name] && formik.touched[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

// Reusable Select Field Component
const SelectBox = ({ label, name, options, formik }) => (
  <div className="bg-orange-400 p-4 rounded-2xl shadow">
    <label className="block mb-1 font-medium">{label}</label>
    <select
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
      className="w-full p-2 rounded-2xl bg-orange-500"
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
