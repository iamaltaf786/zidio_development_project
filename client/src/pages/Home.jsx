import React from "react";
import DashboardSection from "./DashboardSection";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="m-20">
        <DashboardSection />
      </div>
    </>
  );
}
