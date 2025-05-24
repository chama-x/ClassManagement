import React from 'react';
import './TeacherIntroduction.css';

const TeacherIntroduction = () => {
  return (
    <div className="teacher-introduction">
      <h3>Teacher Introduction</h3>
      <div className="teacher-content">
        <div className="teacher-info">
          <h4>Mr. Priyantha Wickramasinghe</h4>
          <p className="teacher-title">Senior Mathematics Teacher</p>
          <p className="teacher-qualifications">
            B.Sc. Mathematics (University of Colombo)<br/>
            Postgraduate Diploma in Education (NIE)<br/>
            15+ years teaching experience
          </p>
          <div className="teacher-message">
            <p>
              "Welcome to our mathematics class! I'm excited to guide you through 
              the fascinating world of mathematics using real-world examples from 
              our beautiful Sri Lanka. From calculating the height of Sigiriya Rock 
              using trigonometry to understanding statistics through cricket scores, 
              we'll make math both relevant and enjoyable."
            </p>
            <p>
              "My goal is to help each of you achieve excellence in your O/L 
              examinations and develop a lifelong appreciation for mathematics."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherIntroduction; 