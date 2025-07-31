import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Box, Typography } from "@mui/material";
import { IoMdOpen } from "react-icons/io";
import { MdClose } from "react-icons/md";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";
import NotoDevanagari from "../fonts/NotoSansDevanagari-VariableFont_wdth,wght.ttf";
import Vidioimage from "./Vidioimage";
import logo from "../assets/Images/logoswami.png";
Font.register({
  family: "NotoSansDevanagari",
  src: NotoDevanagari,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fdfdfd",
    padding: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  author: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
    fontStyle: "italic",
    color: "#666",
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
    color: "#000",
    textAlign: "justify",
    fontFamily: "NotoSansDevanagari",
  },
});

const CircularProgressWithLabel = ({ value }) => (
  <Box sx={{ position: "relative", display: "inline-flex" }}>
    <CircularProgress variant="determinate" value={value} size={80} />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="caption" component="div" color="text.secondary">
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

const Ebooks = () => {
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const fetchapi = async () => {
    setLoading(true);
    setProgress(0);
    try {
      const response = await axios.get(
        "https://m1blog.aaragroups.com/blog/book-api/",
        {
          params: { store_id: 14 },
          headers: {
            Authorization: "Token 55cf7e557b527cb3f44de530cc98ca14dea80dd1",
          },
        }
      );
      setData(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchapi();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (loading) {
      let value = 0;
      const interval = setInterval(() => {
        value += 10;
        if (value >= 100) {
          clearInterval(interval);
          setProgress(100);
        } else {
          setProgress(value);
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [loading]);

  return (
    <>
      <div className="bg-[#f9fcd1] min-h-screen flex flex-col items-center px-4 lg:-mb-40">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <CircularProgressWithLabel value={progress} />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 ">
              {data.map((book, index) => (
                <div key={index} className="p-4 bg-white  rounded-lg shadow-md">
                  <div className="flex items-center justify-center">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-50 h-50  object-cover rounded mb-3  hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>

                  <h2 className="font-bold text-center hover:scale-105 transition-transform duration-500 ease-in-out">
                    {book.title}
                  </h2>
                  <p className="text-center text-sm text-gray-600 mt-1 hover:scale-105 transition-transform duration-500 ease-in-out">
                    {book.created_author?.[0] ||
                      "परम् पूज्य  महामंडलेश्वर स्वामी श्री अभयानन्द सरस्वती जी महराज"}
                  </p>
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
                  >
                    <IoMdOpen className="inline mr-1" /> Preview
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        {/* Modal for PDF preview */}
        {selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg max-w-4xl w-full h-[90vh]">
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-3 right-3 text-black hover:text-red-600 z-10"
              >
                <MdClose size={24} />
              </button>

              {/* Conditionally render viewer based on screen */}
              {isMobile ? (
                <iframe
                  src={`https://docs.google.com/gview?embedded=true&url=${selectedBook.url}`}
                  title="PDF Viewer"
                  width="100%"
                  height="100%"
                  className="rounded"
                ></iframe>
              ) : (
                <PDFViewer width="100%" height="100%">
                  <Document>
                    <Page style={styles.page}>
                      <Text style={styles.heading}>{selectedBook.title}</Text>
                      <Text style={styles.author}>
                        {selectedBook.created_author?.[0] ||
                          "SWAMI TRIBHUVAN DAS"}
                      </Text>
                      <Text style={styles.content}>
                        {selectedBook.description || "No content available."}
                      </Text>
                    </Page>
                  </Document>
                </PDFViewer>
              )}
            </div>
          </div>
        )}
      </div>
      <Vidioimage group="ebook" />
    </>
  );
};

export default Ebooks;
