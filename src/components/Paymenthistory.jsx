import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FaSearchengin } from "react-icons/fa";

const Paymenthistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPaymentHistory = async (page = 1, search = "") => {
    setLoading(true);
    try {
      const url = `https://m1blog.aaragroups.com/user-payment-history/?page=${page}&search=${search}`;
      const res = await axios.get(url, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });

      if (res.data?.response_code === 200) {
        setPaymentHistory(res.data.data || []);
        setTotalPages(res.data.total_page || 1);
        setCurrentPage(res.data.current_page || 1);
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
    fetchPaymentHistory(1, searchTerm);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1);
    fetchPaymentHistory(1, value);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    fetchPaymentHistory(page, searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
    fetchPaymentHistory(1, "");
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 p-4 sm:p-6 overflow-x-hidden ">
      <div className="w-full lg:max-w-4xl xl:w-full  lg:mx-25 bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-8 ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-orange-700 underline underline-offset-4 hover:scale-105 transition-transform duration-500 ease-in-out">
          🧾 Donation History
        </h2>

        {/* 🔍 Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full sm:w-2/3">
            <FaSearchengin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by Name, Phone or Payment No..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center text-lg text-gray-700">Loading...</div>
        ) : paymentHistory.length === 0 ? (
          <div className="text-center text-gray-600 text-base">
            No payments found.
          </div>
        ) : (
          <>
            {/*  CARD View for Small Screens */}
            <div className="sm:hidden flex flex-col gap-4 ">
              {paymentHistory.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-lg shadow-md p-4 border border-gray-300 "
                >
                  <div className="font-bold text-orange-700">
                    {item.name || "N/A"}
                  </div>
                  <div className="text-violet-800 text-sm">
                    <strong>Payment No:</strong> {item.payment_no || "N/A"}
                  </div>
                  <div className="text-cyan-800 text-sm">
                    <strong>Mobile:</strong> {item.phone || "N/A"}
                  </div>
                  <div className="text-blue-800 text-sm">
                    <strong>Amount:</strong>{" "}
                    <span className="text-blue-600 font-semibold">
                      ₹ {item.amount || "0"}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    <strong>Status:</strong> {item.status}
                  </div>
                  <div className="text-xs text-pink-500">
                    <strong>Date:</strong>{" "}
                    {new Date(item.updated_date).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden sm:block overflow-x-auto mt-4 hover:scale-105 transition-transform duration-500 ease-in-out">
              <table className="min-w-full border border-gray-300 text-sm md:text-base">
                <thead className="bg-orange-200 text-gray-800">
                  <tr>
                    <th className="p-2 border">S.No</th>
                    <th className="p-2 border">Payment No</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border hidden md:table-cell">Mobile</th>
                    <th className="p-2 border">Amount</th>
                    <th className="p-2 border hidden sm:table-cell">Status</th>
                    <th className="p-2 border">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white/90">
                  {paymentHistory.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center border-t hover:bg-orange-50 transition"
                    >
                      <td className="p-2 border">
                        {(currentPage - 1) * 10 + index + 1}
                      </td>
                      <td className="p-2 border break-all">
                        {item.payment_no || "N/A"}
                      </td>
                      <td className="p-2 border">{item.name || "N/A"}</td>
                      <td className="p-2 border hidden md:table-cell">
                        {item.phone || "N/A"}
                      </td>
                      <td className="p-2 border font-semibold text-blue-600">
                        ₹ {item.amount || "0"}
                      </td>
                      <td className="p-2 border hidden sm:table-cell font-medium text-green-600">
                        {item.status}
                      </td>
                      <td className="p-2 border text-gray-700 text-xs sm:text-sm">
                        {new Date(item.updated_date).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <Stack spacing={2} className="mt-4 items-center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="secondary"
            size="small"
          />
        </Stack>
      )}
    </div>
  );
};

export default Paymenthistory;
