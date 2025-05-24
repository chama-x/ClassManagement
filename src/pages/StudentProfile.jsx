import React from 'react';
import './PageStyles.css';

const StudentProfile = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Student Profile</h1>
          <p>Manage your personal information and academic preferences</p>
        </div>

        <div className="page-section">
          <h2>Personal Information</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Name</h4>
              <p>Kasun Perera</p>
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
              <h4>School</h4>
              <p>Royal College, Colombo 07</p>
            </div>
            <div className="feature-card">
              <h4>Province</h4>
              <p>Western Province</p>
            </div>
            <div className="feature-card">
              <h4>Medium of Instruction</h4>
              <p>English</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Academic Progress</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Overall Average</h4>
              <p>85% (Grade A)</p>
            </div>
            <div className="feature-card">
              <h4>Mathematics Grade</h4>
              <p>88% (Grade A)</p>
            </div>
            <div className="feature-card">
              <h4>Term Test Results</h4>
              <p>1st Term: 82%, 2nd Term: 90%</p>
            </div>
            <div className="feature-card">
              <h4>Class Rank</h4>
              <p>3rd out of 35 students</p>
            </div>
            <div className="feature-card">
              <h4>Attendance</h4>
              <p>95% (190/200 days)</p>
            </div>
            <div className="feature-card">
              <h4>O/L Target</h4>
              <p>9 A's including Mathematics</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Learning Preferences & Goals</h2>
          <ul>
            <li>Preferred learning style: Visual and hands-on activities</li>
            <li>Study schedule: 2-3 hours daily after school</li>
            <li>Favorite math topics: Algebra, Coordinate Geometry</li>
            <li>Career aspiration: Engineering at University of Moratuwa</li>
            <li>Extra-curricular: Mathematics Olympiad team member</li>
            <li>Language preferences: English with Sinhala explanations when needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile; 