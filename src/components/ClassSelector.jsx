import React, { useState } from 'react';
import './ClassSelector.css';

const ClassSelector = ({ selectedGrade, setSelectedGrade }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const grades = [
    'Grade 8',
    'Grade 9', 
    'Grade 10',
    'Grade 11',
    'Grade 12'
  ];

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
    setIsOpen(false);
  };

  return (
    <div className="class-selector">
      <h3>Select Your Class</h3>
      <div className="dropdown-container">
        <div 
          className={`dropdown ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
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