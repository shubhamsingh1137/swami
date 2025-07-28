import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/logoswami.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const token = "6ddd489dcaae2d09ede8950a3f9b34289b42395f"; // your auth token

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/donate");
    }
  }, [navigate]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const fetchPaymentHistory = async () => {
    try {
      const res = await axios.get(
        "https://m1blog.aaragroups.com/user-payment-history/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (res.status === 200) {
        console.log("✅ Payment History:", res.data);
        localStorage.setItem(
          "paymentHistory",
          JSON.stringify(res.data?.data || [])
        );
        toast.success("📦 Payment history saved!");
      } else {
        toast.warning("⚠️ Could not fetch payment history");
      }
    } catch (err) {
      toast.error("❌ Error fetching payment history");
      console.error(err);
    }
  };

  const handlePayment = async () => {
    if (!name || !email || !amount || isNaN(amount)) {
      toast.error("❗ Please enter valid name, email, and amount");
      return;
    }

    try {
      const donateRes = await axios.post(
        "https://m1blog.aaragroups.com/payment-donation/",
        { amount },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (donateRes.status === 200) {
        toast.success("✅ Donation Request Recorded. Proceeding to payment...");

        const razorpayLoaded = await loadRazorpayScript();
        if (!razorpayLoaded) {
          toast.error("⚠️ Razorpay SDK failed to load.");
          return;
        }

        const options = {
          key: "rzp_test_sww6eyRpjsDmO2",
          amount: amount * 100,
          currency: "INR",
          name: "स्वामी अभयानन्द सरस्वती जी महाराज",
          description: "Donation Payment",
          image: "https://swamiabhyanand.com/assets/logoswami-gZsUs_8G.png",
          order_id: donateRes?.data?.data?.payment_no,
          handler: async function (response) {
            try {
              const fd = new FormData();
              fd.append("response", JSON.stringify(response));

              const verifyRes = await axios.post(
                "https://m1blog.aaragroups.com/verify-razorpay-payment/",
                fd,
                {
                  headers: {
                    Authorization: `Token ${token}`,
                  },
                }
              );

              if (verifyRes.status === 200) {
                toast.success("🎉 Payment Verified Successfully!");

                await fetchPaymentHistory();

                // ✅ Redirect to dashboard's KYC section
                setTimeout(() => {
                  navigate("/dashboard?");
                }, 2000);
              } else {
                toast.warn("⚠️ Payment succeeded but verification failed.");
              }
            } catch (err) {
              toast.error("❌ Error during payment verification.");
              console.error(err);
            }
          },
          prefill: {
            name,
            email,
          },
          theme: {
            color: "#22c55e",
          },
          modal: {
            ondismiss: function () {
              toast.info("❌ Payment Cancelled");
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        toast.error("⚠️ Failed to record donation. Try again.");
        return;
      }
    } catch (err) {
      toast.error("❌ Server error while recording donation.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          🔐 Secure Payment
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Thank you for verifying your number. You can now proceed with your
          donation.
        </p>
        <div className="flex flex-col gap-4">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="Enter your full name"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Donation Amount (₹)</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="e.g., 500"
            />
          </label>
          <button
            onClick={handlePayment}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded text-lg transition"
          >
            Proceed to Pay
          </button>
          <button
            onClick={() => navigate("/donate")}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded text-lg transition"
          >
            ← Back to Donate Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
