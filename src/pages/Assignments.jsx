import React from 'react';
import './PageStyles.css';

const Assignments = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Assignments</h1>
          <p>Complete your homework and practice problems</p>
        </div>

        <div className="page-section">
          <h2>Current Assignments</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Algebra Quiz</h4>
              <p>Due: March 15, 2024 | Status: Not Started</p>
            </div>
            <div className="feature-card">
              <h4>Geometry Problems</h4>
              <p>Due: March 20, 2024 | Status: In Progress</p>
            </div>
            <div className="feature-card">
              <h4>Trigonometry Worksheet</h4>
              <p>Due: March 25, 2024 | Status: Not Started</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Completed Assignments</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Linear Equations Test</h4>
              <p>Submitted: March 8, 2024 | Grade: 92%</p>
            </div>
            <div className="feature-card">
              <h4>Quadratic Functions</h4>
              <p>Submitted: March 5, 2024 | Grade: 88%</p>
            </div>
            <div className="feature-card">
              <h4>Basic Operations</h4>
              <p>Submitted: March 1, 2024 | Grade: 95%</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Assignment Guidelines</h2>
          <ul>
            <li>Show all your work for full credit</li>
            <li>Submit assignments before the due date</li>
            <li>Use proper mathematical notation</li>
            <li>Ask for help if you're stuck on a problem</li>
            <li>Check your answers before submission</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assignments; 