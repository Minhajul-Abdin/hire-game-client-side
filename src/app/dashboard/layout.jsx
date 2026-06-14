import React from "react";
import DashboardSideBar from "../../components/Dashboard/dashboardSideBar";

const dashboardLayout = ({ children }) => {
  return (
    <div className="pt-25 flex min-h-screen">
      <DashboardSideBar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default dashboardLayout;
