import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import LecturesPage from './Pages/LecturesPage';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="main-content" style={{minHeight: '100vh'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/lectures" element={<LecturesPage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
