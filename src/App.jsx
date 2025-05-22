import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eighth from "./components/Eighth";
import Ninth from "./components/Ninth";
import Home from "./pages/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Event from "./components/Event";
import Contact from "./components/Contact";
import Ebooks from "./components/Ebooks";
import Layout from "./layout";
import LatestEvents from "./components/Latest_event";
import Whatapps from "./components/Whatapps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
      <Ninth /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
            path="/whatapps"
            element={
              <Layout>
                <Whatapps />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
