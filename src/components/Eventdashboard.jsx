import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Vidioimage from "./Vidioimage";

const CircularProgressWithLabel = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} size={80} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const Eventdashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulateProgress = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? 90 : prev + 10));
    }, 150);

    const fetchapi = async () => {
      try {
        const response = await axios.get(
          "https://m1blog.aaragroups.com/blog/api/event_list_api/",
          {
            params: { store_id: 14 },
            headers: {
              Token: "55cf7e557b527cb3f44de530cc98ca14dea80dd1",
            },
          }
        );
        setData(response?.data?.data || []);
        setProgress(100);
      } catch (error) {
        console.error("fetch failed error", error);
      } finally {
        clearInterval(simulateProgress);
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchapi();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-orange-500 py-10 px-4">
      {/* Swamiji Highlight Card */}
      <div className="bg-orange-400 shadow-lg rounded-xl p-6 max-w-5xl mx-auto mb-12 border-l-4 border-gray-800">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center sm:text-left">
          🙏 परम् पूज्य स्वामी अभयानन्द सरस्वती जी महाराज
        </h2>
        <p className="text-gray-800 text-base leading-relaxed">
          आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज एक अत्यंत
          प्रभावशाली संत, समाजसेवी और आध्यात्मिक गुरु हैं। उन्होंने वेद, उपनिषद
          और सनातन धर्म के सिद्धांतों को जनमानस तक सरल भाषा में पहुँचाने का
          कार्य किया है। उनके आश्रम समाज में सेवा, साधना और संस्कारों का अद्भुत
          संगम प्रस्तुत करते हैं।
        </p>
        <p className="mt-3 text-gray-800 font-medium italic">
          🌟 “धर्म वही जो मानवता को ऊपर उठाए”
        </p>
      </div>

      {/* Event Cards */}
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <CircularProgressWithLabel value={progress} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {paginatedData.length > 0 ? (
            paginatedData.map((event, index) => (
              <div
                key={index}
                className="bg-orange-400 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={event.images || "https://via.placeholder.com/400x300"}
                    alt="event"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <p className="text-sm text-gray-800 font-medium mb-2">
                    {event.date || "Unknown Date"}
                  </p>
                  <h3 className="text-base font-semibold text-blue-900 mb-4 leading-snug">
                    {event.Title || "No Title"}
                  </h3>

                  <button
                    onClick={() =>
                      (window.location.href = `/event/${event.id}`)
                    }
                    className="self-start mt-auto px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 font-medium text-sm"
                  >
                    Read
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No events found.
            </p>
          )}
        </div>
      )}

      {/* Pagination */}
      {!loading && data.length > itemsPerPage && (
        <div className="flex justify-center mt-10">
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </div>
      )}

      <Vidioimage group="event" />
    </div>
  );
};

export default Eventdashboard;
