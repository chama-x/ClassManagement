import React from 'react';
import './PageStyles.css';

const AIChatBot = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>AI Math Assistant</h1>
          <p>Get instant help with your math problems</p>
        </div>

        <div className="page-section">
          <h2>Chat Interface</h2>
          <div style={{ 
            minHeight: '400px', 
            backgroundColor: 'rgba(255, 255, 255, 0.5)', 
            borderRadius: '12px', 
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px dashed rgba(66, 133, 244, 0.3)'
          }}>
            <h3 style={{ color: '#6c757d', marginBottom: '10px' }}>🤖 AI Assistant</h3>
            <p style={{ color: '#6c757d', textAlign: 'center', margin: 0 }}>
              Chat interface will be implemented here.<br/>
              Ask me anything about mathematics!
            </p>
          </div>
        </div>

        <div className="page-section">
          <h2>What I Can Help With</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Problem Solving</h4>
              <p>Step-by-step solutions to math problems</p>
            </div>
            <div className="feature-card">
              <h4>Concept Explanation</h4>
              <p>Clear explanations of mathematical concepts</p>
            </div>
            <div className="feature-card">
              <h4>Homework Help</h4>
              <p>Guidance on assignment questions</p>
            </div>
            <div className="feature-card">
              <h4>Study Tips</h4>
              <p>Personalized learning strategies</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Example Questions</h2>
          <ul>
            <li>"How do I solve quadratic equations?"</li>
            <li>"What is the derivative of x²?"</li>
            <li>"Can you explain the Pythagorean theorem?"</li>
            <li>"Help me with this algebra problem..."</li>
            <li>"What are the properties of triangles?"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIChatBot; 