import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-title">Mathematics Class Management</h1>
        <div className="edit-mode-toggle">
          <span>Edit Mode</span>
          <div 
            className={`toggle-switch ${editMode ? 'active' : ''}`}
            onClick={toggleEditMode}
          >
            <div className="toggle-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 