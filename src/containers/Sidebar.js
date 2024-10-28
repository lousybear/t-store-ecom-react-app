import React from "react";
import "./Sidebar.css";
import Filters from "../components/Filters";

export default function Sidebar({ data, setFilteredData }) {
  return (
    <div className="sidebar-container">
      <Filters data={data} setFilteredData={setFilteredData} />
    </div>
  );
}
