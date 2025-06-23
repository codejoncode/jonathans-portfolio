import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import LecturesPage from './Pages/LecturesPage';
import Footer from './Components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Lectures from './Components/Lectures';

function App() {

  useEffect(() => {
    AOS.init({ once: true });
  })

  return (
    <BrowserRouter>
    <div className="main-content" style={{minHeight: '100vh'}}>
      <Navbar />
      <HomePage />
      <AboutPage />
      <Lectures />
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/lectures" element={<LecturesPage />} />
      </Routes>
      <Footer />
    </div> 
    </BrowserRouter>
  );
}

export default App;
