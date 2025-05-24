import React from 'react';
import './PageStyles.css';

const StudentProfile = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Student Profile</h1>
          <p>Manage your personal information and preferences</p>
        </div>

        <div className="page-section">
          <h2>Personal Information</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Name</h4>
              <p>John Doe</p>
            </div>
            <div className="feature-card">
              <h4>Grade Level</h4>
              <p>Grade 10</p>
            </div>
            <div className="feature-card">
              <h4>Student ID</h4>
              <p>STU-2024-001</p>
            </div>
            <div className="feature-card">
              <h4>Email</h4>
              <p>john.doe@school.edu</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Academic Progress</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Overall GPA</h4>
              <p>3.8 / 4.0</p>
            </div>
            <div className="feature-card">
              <h4>Math Grade</h4>
              <p>A- (88%)</p>
            </div>
            <div className="feature-card">
              <h4>Attendance</h4>
              <p>95% (19/20 classes)</p>
            </div>
            <div className="feature-card">
              <h4>Rank</h4>
              <p>3rd in class</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Learning Preferences</h2>
          <ul>
            <li>Preferred learning style: Visual and Interactive</li>
            <li>Study time: 2 hours per day</li>
            <li>Favorite math topics: Algebra, Geometry</li>
            <li>Goals: Improve problem-solving speed</li>
            <li>Notification preferences: Email and SMS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile; 