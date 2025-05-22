import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: "/dash.png" },
  { label: "Application Form", path: "/application-form", icon: "/form.png" },
  { label: "Application Status", path: "/application-status", icon: "/status.png" },
  { label: "Payment Information", path: "/payment-information", icon: "/payment.png" },
  { label: "Documents Upload", path: "/document-upload", icon: "/docs.png" },
  { label: "Messages", path: "/messages", icon: "/message.png" },
  { label: "Profile", path: "/profile", icon: "/profile.png" },
  { label: "Settings", path: "/settings", icon: "/settings.png" },
];

function FixedGreenSidebar({ onHover, onLeave }) {
  const navigate = useNavigate();
  return (
    <div
      className="fixed-green-sidebar"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="sidebar-logo-fixed-container">
        <img src="/ptclogo.png" alt="PTC Logo" className="sidebar-logo-fixed" />
      </div>
      <nav className="sidebar-nav-fixed">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="sidebar-fixed-icon-btn"
            onClick={() => navigate(item.path)}
            title={item.label}
            tabIndex={0}
            type="button"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="sidebar-fixed-icon"
              width={28}
              height={28}
            />
          </button>
        ))}
      </nav>
    </div>
  );
}

function Sidebar({ onExpandChange }) {
  const [collapsed, setCollapsed] = useState(false);
  const [forceExpand, setForceExpand] = useState(false);
  const navigate = useNavigate();

  // Notify parent when expanded/collapsed state changes
  useEffect(() => {
    if (onExpandChange) {
      onExpandChange(!collapsed || forceExpand);
    }
  }, [collapsed, forceExpand, onExpandChange]);

  // Expand sliding sidebar when hovering over fixed sidebar
  const handleFixedSidebarHover = () => setForceExpand(true);
  const handleFixedSidebarLeave = () => setForceExpand(false);

  return (
    <>
      <FixedGreenSidebar
        onHover={handleFixedSidebarHover}
        onLeave={handleFixedSidebarLeave}
      />
      <div
        className={`messages-sidebar${collapsed && !forceExpand ? " collapsed" : ""}`}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        style={{ left: 68 }}
      >
        {(!collapsed || forceExpand) && (
          <div className="sidebar-header-sliding">
            <span className="sidebar-label-sliding">PTC OAMS</span>
          </div>
        )}

        <div className="sidebar-nav-sliding">
          {navItems.map((item) => (
            <div className="sidebar-btn-row" key={item.label}>
              <button onClick={() => navigate(item.path)}>
                {item.label}
              </button>
            </div>
          ))}
        </div>

        {/* Sign Out Button */}
        {(!collapsed || forceExpand) && (
          <div className="sidebar-btn-row" style={{ marginTop: 30 }}>
            <button
              onClick={() => {
                localStorage.removeItem('application_id');
                navigate("/", { replace: true });
              }}
              style={{
                color: "#c62828",
                fontWeight: 700,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 16,
                marginLeft: 4,
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;