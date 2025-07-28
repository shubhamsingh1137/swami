import React from "react";
import Nav from "../components/Nav";
import Seventh from "../components/Seventh";
import Eighth from "../components/Eighth";
import Ninth from "../components/Ninth";
import LatestEvents from "../components/Latest_event";
import Whatapps from "../components/Whatapps";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      {children}
      <LatestEvents />
      <Whatapps />
      <Seventh />
      <Eighth />
      <Ninth />
    </>
  );
};

export default Layout;
