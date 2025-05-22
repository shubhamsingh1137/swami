import React from "react";
import Nav from "../components/Nav";
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Sixth from "../components/Sixth";
import Seventh from "../components/Seventh";
import Eighth from "../components/Eighth";
import Ninth from "../components/Ninth";
import Latest_event from "../components/Latest_event";
import Image_slider from "../components/Image_slider";
import Layout from "../layout";
import Whatapps from "../components/Whatapps";

const Home = () => {
  return (
    <div>
      <Nav />
      {/* <Image_slider /> */}
      <First />
      <Second />
      <Latest_event />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Whatapps />
      <Eighth />
      <Ninth />
    </div>
  );
};

export default Home;
