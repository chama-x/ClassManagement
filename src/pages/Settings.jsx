import React from 'react';
import './PageStyles.css';

const Settings = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Settings</h1>
          <p>Customize your learning experience</p>
        </div>

        <div className="page-section">
          <h2>Account Settings</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Change Password</h4>
              <p>Update your account password</p>
            </div>
            <div className="feature-card">
              <h4>Email Preferences</h4>
              <p>Manage notification settings</p>
            </div>
            <div className="feature-card">
              <h4>Privacy Settings</h4>
              <p>Control who can see your progress</p>
            </div>
            <div className="feature-card">
              <h4>Two-Factor Auth</h4>
              <p>Enable additional security</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>Learning Preferences</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Theme</h4>
              <p>Light / Dark mode selection</p>
            </div>
            <div className="feature-card">
              <h4>Language</h4>
              <p>Interface language settings</p>
            </div>
            <div className="feature-card">
              <h4>Difficulty Level</h4>
              <p>Adjust problem complexity</p>
            </div>
            <div className="feature-card">
              <h4>Study Reminders</h4>
              <p>Set daily study notifications</p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2>System Preferences</h2>
          <ul>
            <li>Auto-save progress: Enabled</li>
            <li>Sound effects: Enabled</li>
            <li>Animations: Enabled</li>
            <li>Performance mode: Standard</li>
            <li>Data usage: WiFi only</li>
          </ul>
        </div>

        <div className="page-section">
          <h2>Support & Help</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Help Center</h4>
              <p>Browse frequently asked questions</p>
            </div>
            <div className="feature-card">
              <h4>Contact Support</h4>
              <p>Get help from our team</p>
            </div>
            <div className="feature-card">
              <h4>Report a Bug</h4>
              <p>Submit technical issues</p>
            </div>
            <div className="feature-card">
              <h4>Feedback</h4>
              <p>Share your suggestions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 