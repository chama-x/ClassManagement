import React from 'react';
import './PageStyles.css';

const Tutorials = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Mathematics Tutorials</h1>
          <p>Interactive lessons based on Sri Lankan O/L Mathematics syllabus</p>
        </div>

        <div className="page-section">
          <h2>Available Tutorials (O/L Syllabus)</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Algebraic Expressions & Equations</h4>
              <p>Master algebraic manipulation and solving linear equations</p>
            </div>
            <div className="feature-card">
              <h4>Coordinate Geometry</h4>
              <p>Learn about points, lines, and geometric relationships on coordinate plane</p>
            </div>
            <div className="feature-card">
              <h4>Trigonometry</h4>
              <p>Understand sine, cosine, tangent and their applications</p>
            </div>
            <div className="feature-card">
              <h4>Mensuration</h4>
              <p>Calculate areas, volumes, and surface areas of 2D and 3D shapes</p>
            </div>
            <div className="feature-card">
              <h4>Statistics & Probability</h4>
              <p>Analyze data, calculate averages, and understand probability concepts</p>
            </div>
            <div className="feature-card">
              <h4>Number Patterns & Sequences</h4>
              <p>Identify patterns and work with arithmetic and geometric sequences</p>
            </div>
            <div className="feature-card">
              <h4>Indices & Logarithms</h4>
              <p>Master exponential expressions and logarithmic calculations</p>
            </div>
            <div className="feature-card">
              <h4>Quadratic Equations</h4>
              <p>Solve quadratic equations using various methods</p>
            </div>
            <div className="feature-card">
              <h4>Ratio, Proportion & Percentages</h4>
              <p>Apply ratios and proportions to real-world problems</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Tutorial Features</h2>
          <ul>
            <li>Interactive video lessons with local examples</li>
            <li>Step-by-step problem solving techniques</li>
            <li>Practice exercises with instant feedback</li>
            <li>Past paper questions and model answers</li>
            <li>Progress tracking aligned with O/L assessment</li>
            <li>Real-world applications using Sri Lankan contexts</li>
            <li>Bilingual support (English with Sinhala explanations)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 