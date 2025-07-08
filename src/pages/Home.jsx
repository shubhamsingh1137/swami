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
import Vidioimage from "../components/Vidioimage";

const Home = () => {
  return (
    <div>
      {/* <Image_slider /> */}
      <First />
      <Second />

      <Third />
      <Fourth />
      <Latest_event />
      <Fifth />
      <Sixth />
      <Vidioimage />

      <Whatapps />
    </div>
  );
};

export default Home;
