import React from 'react';
import './PageStyles.css';

const Tutorials = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Mathematics Tutorials</h1>
          <p>Interactive lessons and step-by-step guides</p>
        </div>

        <div className="page-section">
          <h2>Available Tutorials</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Algebra Basics</h4>
              <p>Learn the fundamentals of algebraic expressions and equations</p>
            </div>
            <div className="feature-card">
              <h4>Geometry</h4>
              <p>Explore shapes, angles, and spatial relationships</p>
            </div>
            <div className="feature-card">
              <h4>Trigonometry</h4>
              <p>Master sine, cosine, and tangent functions</p>
            </div>
            <div className="feature-card">
              <h4>Calculus Introduction</h4>
              <p>Begin your journey into limits and derivatives</p>
            </div>
            <div className="feature-card">
              <h4>Statistics</h4>
              <p>Understand data analysis and probability</p>
            </div>
            <div className="feature-card">
              <h4>Number Theory</h4>
              <p>Explore properties of integers and prime numbers</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Tutorial Features</h2>
          <ul>
            <li>Interactive video lessons</li>
            <li>Step-by-step problem solving</li>
            <li>Practice exercises with instant feedback</li>
            <li>Visual demonstrations and animations</li>
            <li>Progress tracking and certificates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 