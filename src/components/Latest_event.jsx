import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const LatestEvents = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const eventData = [
    {
      start: "2023-05-17",
      end: "2023-05-23",
      speaker: "स्वामी अभयानन्द सरस्वती जी महाराज",
      place: "गाज़ियाबाद",
    },
    {
      start: "2023-07-03",
      end: "2023-07-03",
      speaker:
        "अनंत श्री विभूषित महामंडलेश्वर सतगुरुदेव स्वामी अभयानंद सरस्वती जी",
      place: "लखनऊ",
    },
    {
      start: "2023-07-15",
      end: "2023-07-15",
      speaker: "स्वामी अभयानंद सरस्वती जी",
      place: "लखनऊ",
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed top-1/3 right-1 z-50 px-10 py-5 rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-orange-300 to-cyan-200"
        onClick={handleOpen}
      >
        <div className="text-sm lg:text-2xl font-bold text-black leading-tight text-center">
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
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse bg-orange-200 shadow-2xl">
              <thead>
                <tr className="bg-orange-400 text-white text-xl">
                  <th className="p-3 border">प्रारंभ तिथि</th>
                  <th className="p-3 border">समाप्ति तिथि</th>
                  <th className="p-3 border">वक्ता</th>
                  <th className="p-3 border">स्थान</th>
                </tr>
              </thead>
              <tbody>
                {eventData.map((event, index) => (
                  <tr key={index} className="text-center text-black text-md">
                    <td className="p-3 border">{event.start}</td>
                    <td className="p-3 border">{event.end}</td>
                    <td className="p-3 border">{event.speaker}</td>
                    <td className="p-3 border">{event.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className="text-2xl hover:scale-110"
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            बंद करें
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LatestEvents;
