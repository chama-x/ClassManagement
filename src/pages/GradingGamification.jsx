import React from 'react';
import './PageStyles.css';

const GradingGamification = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Grading & Gamification</h1>
          <p>Track your progress and earn rewards for learning</p>
        </div>

        <div className="page-section">
          <h2>Your Achievements</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>🏆 Problem Solver</h4>
              <p>Solved 50 math problems correctly</p>
            </div>
            <div className="feature-card">
              <h4>📚 Study Master</h4>
              <p>Completed 10 tutorials</p>
            </div>
            <div className="feature-card">
              <h4>⭐ Perfect Score</h4>
              <p>Achieved 100% on an assignment</p>
            </div>
            <div className="feature-card">
              <h4>🔥 Study Streak</h4>
              <p>7 consecutive days of learning</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Grade Breakdown</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Assignments</h4>
              <p>Average: 88% (Weight: 40%)</p>
            </div>
            <div className="feature-card">
              <h4>Quizzes</h4>
              <p>Average: 92% (Weight: 30%)</p>
            </div>
            <div className="feature-card">
              <h4>Participation</h4>
              <p>Score: 95% (Weight: 20%)</p>
            </div>
            <div className="feature-card">
              <h4>Final Exam</h4>
              <p>Upcoming (Weight: 10%)</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Leaderboard</h2>
          <ul>
            <li>1st Place: Alex (2,450 points)</li>
            <li>2nd Place: Sarah (2,380 points)</li>
            <li>3rd Place: You (2,250 points)</li>
            <li>4th Place: Mike (2,120 points)</li>
            <li>5th Place: Emma (2,080 points)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GradingGamification; 