import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-card">
        <h1>Welcome to Mathematics!</h1>
        <div className="welcome-description">
          <p>
            We're excited to have you here, This Course is designed to build your 
            problem-solving skills boost your Confidence with numbers, and help you 
            see the real-world power of maths.
          </p>
          <p>
            Check the modules regularly, stay curious, and don't hesitate to ask 
            questions. Let's make learning math engaging and rewarding!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection; 