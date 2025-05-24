import React from 'react';
import { 
  FaHome, 
  FaUser, 
  FaBook, 
  FaClipboardList, 
  FaCog, 
  FaRobot, 
  FaUserCircle, 
  FaSignOutAlt 
} from 'react-icons/fa';
import { MdDashboard, MdGrade } from 'react-icons/md';
import './Sidebar.css';

const Sidebar = ({ currentPage, onNavigate }) => {
  const students = [
    { name: 'Kasun Perera', role: 'Grade 11 - Colombo' },
    { name: 'Nimali Silva', role: 'Grade 10 - Kandy' },
    { name: 'Tharindu Fernando', role: 'Grade 12 - Galle' }
  ];

  const navigationItems = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'dashboard', icon: MdDashboard, label: 'Student Dashboard' },
    { id: 'tutorials', icon: FaBook, label: 'Tutorials' },
    { id: 'assignments', icon: FaClipboardList, label: 'Assignments' },
    { id: 'grading', icon: MdGrade, label: 'Grading and Gamification' },
    { id: 'chatbot', icon: FaRobot, label: 'AI Chat Bot' }
  ];

  const settingsItems = [
    { id: 'profile', icon: FaUserCircle, label: 'Student Profile' },
    { id: 'settings', icon: FaCog, label: 'Settings' },
    { id: 'logout', icon: FaSignOutAlt, label: 'Logout', isLogout: true }
  ];

  const handleNavigation = (pageId) => {
    if (pageId === 'logout') {
      // Handle logout logic here
      console.log('Logout clicked');
      return;
    }
    onNavigate(pageId);
  };

  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo-icon">
          <span>+</span>
        </div>
        <div className="logo-text">
          <h3>MATHS</h3>
          <h3>CLASS</h3>
        </div>
      </div>

      <div className="nav-section">
        <h4>OVERVIEW</h4>
        <ul className="nav-list">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li 
                key={item.id}
                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavigation(item.id)}
              >
                <span className="nav-icon">
                  <IconComponent />
                </span>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="students-section">
        <h4>STUDENTS</h4>
        <div className="students-list">
          {students.map((student, index) => (
            <div key={index} className="student-item">
              <div className="student-name">{student.name}</div>
              <div className="student-role">{student.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="settings-section">
        <h4>SETTINGS</h4>
        <ul className="nav-list">
          {settingsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li 
                key={item.id}
                className={`nav-item ${currentPage === item.id ? 'active' : ''} ${item.isLogout ? 'logout' : ''}`}
                onClick={() => handleNavigation(item.id)}
              >
                <span className="nav-icon">
                  <IconComponent />
                </span>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 