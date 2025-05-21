import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import './applicationStatus.css';
import { useNavigate } from 'react-router-dom';

const ApplicationStatus = () => {
  // Example static data for demonstration; replace with your real fetch logic as needed
  const [submittedAt, setSubmittedAt] = useState('2024-03-08T10:00:00');
  const [reviewedAt, setReviewedAt] = useState('2024-03-10T14:30:00');
  const [interviewAt, setInterviewAt] = useState(null); // e.g. '2024-03-15T09:00:00'
  const [finalDecisionAt, setFinalDecisionAt] = useState(null);

  // You can fetch and set these from your backend as needed
  // For now, these are static for demo

  // Helper for formatting date/time
  const formatDateTime = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="app-status-timeline-container">
        <h2 className="timeline-header">Application Status</h2>
        <div className="timeline-subheader">Track your application progress</div>
        <div className="app-status-timeline">
          {/* Application Submitted */}
          <div className="timeline-step completed">
            <div className="timeline-icon">&#10003;</div>
            <div>
              <div className="timeline-title">Application Submitted</div>
              <div className="timeline-desc">Your application has been successfully submitted.</div>
              <div className="timeline-date">{formatDateTime(submittedAt)}</div>
            </div>
          </div>
          {/* Under Review */}
          <div className="timeline-step active">
            <div className="timeline-icon">&#9711;</div>
            <div>
              <div className="timeline-title">Under Review</div>
              <div className="timeline-desc">Your application is currently being reviewed by our admissions team.</div>
              <div className="timeline-date">{formatDateTime(reviewedAt)}</div>
            </div>
          </div>
          {/* Interview Schedule */}
          <div className="timeline-step">
            <div className="timeline-icon">&#9711;</div>
            <div>
              <div className="timeline-title">Interview Schedule</div>
              <div className="timeline-desc">
                {interviewAt
                  ? "Your interview is scheduled."
                  : "Waiting for interview schedule."}
              </div>
              <div className="timeline-date">{interviewAt ? formatDateTime(interviewAt) : ""}</div>
            </div>
          </div>
          {/* Final Decision */}
          <div className="timeline-step">
            <div className="timeline-icon">&#9711;</div>
            <div>
              <div className="timeline-title">Final Decision</div>
              <div className="timeline-desc">
                {finalDecisionAt
                  ? "Admission decision released."
                  : "Admission decision pending."}
              </div>
              <div className="timeline-date">{finalDecisionAt ? formatDateTime(finalDecisionAt) : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;