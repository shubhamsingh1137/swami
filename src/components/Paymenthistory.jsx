import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Paymenthistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPaymentHistory = async () => {
    try {
      const res = await axios.get(
        "https://m1blog.aaragroups.com/user-payment-history/",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data?.response_code === 200) {
        setPaymentHistory(res.data.data || []);
      } else {
        toast.warn("⚠️ Could not load payment history.");
      }
    } catch (err) {
      toast.error("❌ Error fetching payment history.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">🧾 Payment History</h2>

      {loading ? (
        <p>Loading...</p>
      ) : paymentHistory.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <>
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setPaymentHistory([])}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
            >
              Clear All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Payment No</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Mobile No</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{item.payment_no || "N/A"}</td>
                    <td className="p-2 border">{item.name || "N/A"}</td>
                    <td className="p-2 border">{item.phone || "N/A"}</td>
                    <td className="p-2 border">{item.amount || "0"}</td>
                    <td className="p-2 border text-green-600 font-semibold">
                      {item.status}
                    </td>
                    <td className="p-2 border">
                      {new Date(item.updated_date).toLocaleString()}
                    </td>
                    <td className="p-2 border">
                      <button
                        onClick={() => {
                          const updated = [...paymentHistory];
                          updated.splice(index, 1);
                          setPaymentHistory(updated);
                        }}
                        className="text-white bg-red-400 hover:bg-red-600 px-2 py-1 rounded text-sm"
                      >
                        Clear
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Paymenthistory;
