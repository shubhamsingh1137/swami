// DashboardContent.jsx
import React from "react";

import Profile from "../Profile";
import Kyc from "../Kyc/Kyc";
import Setting from "../Setting";
import Paymenthistory from "../Paymenthistory";
import Eventdashboard from "../Eventdashboard";

const DashboardContent = ({ activeTab }) => {
  switch (activeTab) {
    case "profile":
      return <Profile />;
    case "kyc":
      return <Kyc />;
    case "settings":
      return <Setting />;
    case "eventdashboard":
      return <Eventdashboard />;
    case "donation":
      return <Paymenthistory />;
    default:
      return <Profile />;
  }
};

export default DashboardContent;
