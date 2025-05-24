import React from 'react';
import './PageStyles.css';

const StudentDashboard = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Student Dashboard</h1>
          <p>Track your progress, assignments, and achievements</p>
        </div>

        <div className="page-section">
          <h2>Performance Overview</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Current Grade</h4>
              <p>Your overall performance: 85%</p>
            </div>
            <div className="feature-card">
              <h4>Assignments Completed</h4>
              <p>12 out of 15 assignments submitted</p>
            </div>
            <div className="feature-card">
              <h4>Next Assignment</h4>
              <p>Algebra Quiz - Due in 3 days</p>
            </div>
            <div className="feature-card">
              <h4>Study Streak</h4>
              <p>7 consecutive days of learning</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Recent Activity</h2>
          <ul>
            <li>Completed "Linear Equations" tutorial</li>
            <li>Submitted "Quadratic Functions" assignment</li>
            <li>Achieved "Problem Solver" badge</li>
            <li>Participated in study group discussion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 