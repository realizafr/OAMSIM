import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="dashboard-container">
      <Sidebar onExpandChange={setSidebarExpanded} />
      <div
        className="dashboard-main-content"
        style={{
          marginLeft: sidebarExpanded ? 288 : 68, // 68px fixed + 220px expanded, or just 68px when collapsed
          transition: "margin-left 0.2s"
        }}
      >
        <h1 className="dashboard-title">
          Welcome to the PTC OAMS Dashboard!
        </h1>
        <p className="dashboard-desc">
          Use the sidebar to navigate through your application, check your status, upload documents, send messages, and more.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;