import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LatestEvents = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false); // ← loader state
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    fetchapi();
  };

  const handleClose = () => setOpen(false);

  const fetchapi = async () => {
    setLoading(true); // start loader
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
    } catch (error) {
      console.error("fetch failed error", error);
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed bottom-40 right-1 z-50 px-5 py-2 rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-orange-300 to-cyan-200"
        onClick={handleOpen}
      >
        <div className="text-sm lg:text-2xl font-bold text-black text-center">
          LATEST EVENTS
        </div>
        <div className="text-xs lg:text-2xl font-semibold text-black">
          नवीनतम कार्यक्रम ▼
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle className="text-xl font-bold text-orange-600 text-center">
          नवीनतम कार्यक्रम
        </DialogTitle>
        <DialogContent>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <CircularProgress />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse bg-orange-200 shadow-2xl">
                <thead>
                  <tr className="bg-orange-400 text-white text-xl">
                    <th className="p-3 border">प्रारंभ तिथि</th>
                    <th className="p-3 border">समाप्ति तिथि</th>
                    <th className="p-3 border">वक्ता</th>
                    <th className="p-3 border">कार्यक्रम</th>
                    <th className="p-3 border">स्थान</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((event, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        navigate(`/navilatest/${event?.id}`);
                        setOpen(false);
                      }}
                      className="text-center text-black text-md cursor-pointer hover:bg-orange-300 hover:scale-102 transition-transform duration-500 ease-in-out"
                    >
                      <td className="p-3 border">{event.date}</td>
                      <td className="p-3 border">{event.created_at}</td>
                      <td className="p-3 border">
                        {event.speaker ||
                          "आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज"}
                      </td>
                      <td className="p-3 border">{event.Title}</td>
                      <td className="p-3 border">{event.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            className="hover:scale-120 transition-transform duration-500 ease-in-out"
          >
            बंद करें
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LatestEvents;
