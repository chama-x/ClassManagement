import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import TeacherIntroduction from '../components/TeacherIntroduction';
import ClassSelector from '../components/ClassSelector';
import './PageStyles.css';

const Home = ({ selectedGrade, setSelectedGrade }) => {
  return (
    <div className="page-container">
      <div className="page-content">
        <WelcomeSection />
        <div className="bottom-section">
          <TeacherIntroduction />
          <ClassSelector selectedGrade={selectedGrade} setSelectedGrade={setSelectedGrade} />
        </div>
      </div>
    </div>
  );
};

export default Home; 