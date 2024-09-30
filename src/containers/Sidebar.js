import React from "react";
import "./Sidebar.css";
import Filters from "../components/Filters";

export default function Sidebar({ data }) {
  return (
    <div className="sidebar-container">
      <Filters data={data} />
    </div>
  );
}
