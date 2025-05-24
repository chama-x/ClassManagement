import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import Tutorials from './pages/Tutorials';
import Assignments from './pages/Assignments';
import GradingGamification from './pages/GradingGamification';
import AIChatBot from './pages/AIChatBot';
import StudentProfile from './pages/StudentProfile';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 10');
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home selectedGrade={selectedGrade} setSelectedGrade={setSelectedGrade} />;
      case 'dashboard':
        return <StudentDashboard />;
      case 'tutorials':
        return <Tutorials />;
      case 'assignments':
        return <Assignments />;
      case 'grading':
        return <GradingGamification />;
      case 'chatbot':
        return <AIChatBot />;
      case 'profile':
        return <StudentProfile />;
      case 'settings':
        return <Settings />;
      default:
        return <Home selectedGrade={selectedGrade} setSelectedGrade={setSelectedGrade} />;
    }
  };

  return (
    <div className="app">
      <div className="app-layout">
        <Header />
        <div className="app-content">
          <Sidebar currentPage={currentPage} onNavigate={handleNavigation} />
          <main className="main-area">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
