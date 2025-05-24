import React, { useState } from 'react';
import './ClassSelector.css';

const ClassSelector = ({ selectedGrade, setSelectedGrade }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const grades = [
    'Grade 10',
    'Grade 11',
  ];

  const handleGradeSelect = (grade) => {
    console.log('Grade selected:', grade);
    setSelectedGrade(grade);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    console.log('Dropdown toggled. Current state:', isOpen, 'New state:', !isOpen);
    setIsOpen(!isOpen);
  };

  console.log('ClassSelector rendered. isOpen:', isOpen, 'selectedGrade:', selectedGrade);

  return (
    <div className="class-selector">
      <h3>Select Your Class</h3>
      <div className="dropdown-container">
        <div 
          className={`dropdown ${isOpen ? 'open' : ''}`}
          onClick={toggleDropdown}
        >
          <div className="dropdown-selected">
            <span>{selectedGrade}</span>
            <div className={`dropdown-arrow ${isOpen ? 'up' : 'down'}`}>
              ▼
            </div>
          </div>
          
          {isOpen && (
            <div className="dropdown-options">
              {grades.map((grade) => (
                <div
                  key={grade}
                  className={`dropdown-option ${selectedGrade === grade ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGradeSelect(grade);
                  }}
                >
                  {grade}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassSelector; 