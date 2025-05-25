import React from "react";
import Sidebar from "../components/Sidebar"; // Adjust the path if needed
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      {/* Main content area for the dashboard */}
      <div className="dashboard-main-content">
        {/* Top Header Section */}
        <header className="dashboard-header">
          <div className="header-overlay"></div>
          {/* Background image is handled by CSS */}
        </header>

        {/* Info Cards Section */}
        <section className="info-cards-section">
          <div className="info-card">
            <img
              src="https://placehold.co/32x32/22B455/FFFFFF?text=30"
              alt="30 Years Icon"
              className="info-card-icon"
            />
            <p className="info-card-text">
              <span className="info-card-highlight">30+ Years</span> of Academic Excellence
            </p>
          </div>
          <div className="info-card">
            <img
              src="https://placehold.co/32x32/22B455/FFFFFF?text=5K"
              alt="5000 Students Icon"
              className="info-card-icon"
            />
            <p className="info-card-text">
              <span className="info-card-highlight">5,000+</span> Enrolled Students
            </p>
          </div>
          <div className="info-card">
            <img
              src="https://placehold.co/32x32/22B455/FFFFFF?text=CHED"
              alt="CHED Icon"
              className="info-card-icon"
            />
            <p className="info-card-text">
              <span className="info-card-highlight">CHED Recognized</span> Quality Education
            </p>
          </div>
        </section>

        {/* Main Content Columns */}
        <main className="dashboard-content-columns">
          {/* Latest Announcements Section */}
          <section className="announcements-section">
            <h2 className="section-title">Latest Announcements</h2>
            <ul className="announcement-list">
              <li className="announcement-item">
                <h3 className="announcement-heading">Early Bird Enrollment Discount</h3>
                <p className="announcement-detail">
                  Get 10%-off on tuition fees when you enroll before July 15, 2025.
                </p>
                <span className="announcement-date">Posted: June 1, 2025</span>
              </li>
              <li className="announcement-item">
                <h3 className="announcement-heading">Scholarship Applications Open</h3>
                <p className="announcement-detail">
                  Academic and athletic scholarship applications for AY 2025-2026 are now open.
                </p>
                <span className="announcement-date">Posted: June 18, 2025</span>
              </li>
              <li className="announcement-item">
                <h3 className="announcement-heading">New Course Offerings</h3>
                <p className="announcement-detail">
                  BS in Data Science and BS in Artificial Intelligence now available.
                </p>
                <span className="announcement-date">Posted: June 18, 2025</span>
              </li>
            </ul>
          </section>

          {/* Important Information Section */}
          <section className="info-section">
            <h2 className="section-title">Important Information</h2>
            <ul className="info-list">
              <li className="info-item">
                <h3 className="info-heading">Enrollment Period</h3>
                <p className="info-detail">July 1 - August 15, 2025</p>
              </li>
              <li className="info-item">
                <h3 className="info-heading">Start of Classes</h3>
                <p className="info-detail">August 29, 2025</p>
              </li>
              <li className="info-item">
                <h3 className="info-heading">Requirements Deadline</h3>
                <p className="info-detail">August 1, 2025</p>
              </li>
            </ul>
          </section>
        </main>

        {/* Academic Programs Section */}
        <section className="academic-programs-section">
          <h2 className="section-title">Academic Programs</h2>
          <div className="academic-programs-grid">
            <div className="program-card">
              <h3 className="program-heading">College of Engineering</h3>
              <ul className="program-list">
                <li>BS in Civil Engineering</li>
                <li>BS in Electrical Engineering</li>
                <li>BS in Computer Engineering</li>
              </ul>
            </div>
            <div className="program-card">
              <h3 className="program-heading">College of Information Technology</h3>
              <ul className="program-list">
                <li>BS in Information Technology</li>
                <li>BS in Computer Science</li>
                <li>BS in Information Systems</li>
              </ul>
            </div>
            <div className="program-card">
              <h3 className="program-heading">College of Business</h3>
              <ul className="program-list">
                <li>BS in Business Administration</li>
                <li>BS in Accountancy</li>
                <li>BS in Tourism Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="contact-info-section">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-details-grid">
            <div className="contact-address">
              <h3 className="contact-heading">Main Campus Address:</h3>
              <p>123 College Road, Pateros, Metro Manila</p>
            </div>
            <div className="contact-numbers">
              <h3 className="contact-heading">Contact Numbers:</h3>
              <p>+63 (2) 8123-4567</p>
              <p>+63 917-123-4567</p>
            </div>
            <div className="contact-email">
              <h3 className="contact-heading">Email:</h3>
              <p>admissions@ptc.edu.ph</p>
            </div>
            <div className="contact-hours">
              <h3 className="contact-heading">Office Hours:</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;