import React from 'react';
import WelcomeSection from './WelcomeSection';
import TeacherIntroduction from './TeacherIntroduction';
import ClassSelector from './ClassSelector';
import './MainContent.css';

const MainContent = ({ selectedGrade, setSelectedGrade }) => {
  return (
    <div className="main-content">
      <div className="edit-mode-toggle">
        <span>Edit Mode</span>
        <div className="toggle-switch">
          <div className="toggle-button"></div>
        </div>
      </div>
      
      <div className="content-wrapper">
        <WelcomeSection />
        <div className="bottom-section">
          <TeacherIntroduction />
          <ClassSelector selectedGrade={selectedGrade} setSelectedGrade={setSelectedGrade} />
        </div>
      </div>
    </div>
  );
};

export default MainContent; 