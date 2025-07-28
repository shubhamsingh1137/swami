import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Event from "./components/Event";
import Contact from "./components/Contact";
import Ebooks from "./components/Ebooks";
import Layout from "./layout";
import LatestEvents from "./components/Latest_event";
import Navilatest from "./components/Navilatest";
import Newblog from "./components/Newblog";
import Allvidios from "./components/Allvidios";

import PaymentPage from "./components/Paymentpage";
import Dashboard from "./components/Dashboard/Dashboard";
import ScrollToTop from "./components/Scroll_top/ScrollToTop";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/gallary"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/donate"
            element={
              <Layout>
                <Donate />
              </Layout>
            }
          />
          <Route
            path="/event"
            element={
              <Layout>
                <Event />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/ebooks"
            element={
              <Layout>
                <Ebooks />
              </Layout>
            }
          />
          <Route
            path="/latest"
            element={
              <Layout>
                <LatestEvents />
              </Layout>
            }
          />
          <Route
            path="/navilatest/:id"
            element={
              <Layout>
                <Navilatest />
              </Layout>
            }
          />
          <Route
            path="/newblog/:id"
            element={
              <Layout>
                <Newblog />
              </Layout>
            }
          />
          <Route
            path="/allvidios"
            element={
              <Layout>
                <Allvidios />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />}
          />
          <Route
            path="/payment"
            element={
              isLoggedIn ? <PaymentPage /> : <Navigate to="/donate" replace />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
