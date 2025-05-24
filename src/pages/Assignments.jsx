import React from 'react';
import './PageStyles.css';

const Assignments = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Assignments</h1>
          <p>Complete your homework and practice problems based on Sri Lankan curriculum</p>
        </div>

        <div className="page-section">
          <h2>Current Assignments</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Coordinate Geometry Quiz</h4>
              <p>Due: March 15, 2024 | Status: Not Started</p>
            </div>
            <div className="feature-card">
              <h4>Trigonometry Problems</h4>
              <p>Due: March 20, 2024 | Status: In Progress</p>
            </div>
            <div className="feature-card">
              <h4>Statistics & Probability</h4>
              <p>Due: March 25, 2024 | Status: Not Started</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Completed Assignments</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Algebraic Expressions Test</h4>
              <p>Submitted: March 8, 2024 | Grade: 92%</p>
            </div>
            <div className="feature-card">
              <h4>Quadratic Equations</h4>
              <p>Submitted: March 5, 2024 | Grade: 88%</p>
            </div>
            <div className="feature-card">
              <h4>Number Patterns</h4>
              <p>Submitted: March 1, 2024 | Grade: 95%</p>
            </div>
            <div className="feature-card">
              <h4>Mensuration Problems</h4>
              <p>Submitted: February 28, 2024 | Grade: 85%</p>
            </div>
            <div className="feature-card">
              <h4>Ratio & Proportion</h4>
              <p>Submitted: February 25, 2024 | Grade: 90%</p>
            </div>
            <div className="feature-card">
              <h4>Indices & Logarithms</h4>
              <p>Submitted: February 20, 2024 | Grade: 87%</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Assignment Guidelines (Following NIE Standards)</h2>
          <ul>
            <li>Show all working clearly for full marks allocation</li>
            <li>Submit assignments before the due date to avoid penalties</li>
            <li>Use proper mathematical notation as per O/L standards</li>
            <li>Include diagrams where necessary (especially for geometry)</li>
            <li>Ask your teacher for help during consultation hours</li>
            <li>Practice past paper questions for better preparation</li>
            <li>Refer to approved textbooks for additional examples</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assignments; 