import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-card">
        <h1>Welcome to Mathematics!</h1>
        <div className="welcome-description">
          <p>
            We're excited to have you here! This course is designed following the Sri Lankan 
            National Curriculum guidelines to build your problem-solving skills, boost your 
            confidence with numbers, and help you see the real-world applications of mathematics 
            in our beautiful island nation.
          </p>
          <p>
            From calculating the area of paddy fields in Anuradhapura to understanding the 
            geometry of ancient stupas in Polonnaruwa, mathematics is everywhere around us. 
            Check the modules regularly, stay curious, and don't hesitate to ask questions. 
            Let's make learning math engaging and rewarding!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection; 