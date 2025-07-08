import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      sex: "",
      email: "",
      mobile: "",
      country: "",
      state: "",
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      sex: Yup.string().required("Sex is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("profileData", JSON.stringify(values));
      toast.success("Profile submitted successfully!");
      resetForm(); // Clear the form after submission
    },
  });

  useEffect(() => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      formik.setValues(JSON.parse(stored));
    }
  }, []);

  const getStates = () => {
    const country = countries.find((c) => c.name === formik.values.country);
    return country ? country.states : [];
  };

  return (
    <div className="">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-4 underline text-gray-800">
          Fill The Form{" "}
        </h2>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-orange-400">
        <div className="w-full max-w-5xl p-8 bg-orange-500 rounded-lg shadow-md border border-orange-500">
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800"
          >
            {/* First Name */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow ">
              <label className="block mb-1 font-medium text-gray-800">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className="w-full p-2 rounded-2xl bg-orange-500"
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow ">
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className="w-full p-2 rounded-2xl bg-orange-500"
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.lastName}
                </p>
              )}
            </div>

            {/* Sex */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow ">
              <label className="block mb-1 font-medium">Sex</label>
              <select
                name="sex"
                onChange={formik.handleChange}
                value={formik.values.sex}
                className="w-full p-2 rounded-2xl bg-orange-500"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {formik.errors.sex && formik.touched.sex && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.sex}</p>
              )}
            </div>

            {/* Email */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow ">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full p-2 rounded-2xl bg-orange-500"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow ">
              <label className="block mb-1 font-medium">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                className="w-full p-2 rounded-2xl bg-orange-500"
              />
              {formik.errors.mobile && formik.touched.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.mobile}
                </p>
              )}
            </div>

            {/* Country */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow ">
              <label className="block mb-1 font-medium">Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="w-full p-2 rounded-2xl bg-orange-500"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
              {formik.errors.country && formik.touched.country && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.country}
                </p>
              )}
            </div>

            {/* State */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow ">
              <label className="block mb-1 font-medium">State</label>
              <select
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="w-full p-2 rounded-2xl bg-orange-500"
              >
                <option value="">Select State</option>
                {getStates().map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {formik.errors.state && formik.touched.state && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.state}
                </p>
              )}
            </div>

            {/* Description - full width */}
            <div className="bg-orange-400 p-4 rounded-2xl shadow  md:col-span-2">
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

            {/* Submit Button - full width */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-duration-75 text-white font-bold px-6 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
