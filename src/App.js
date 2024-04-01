import React from 'react';
import './App.css';
import Education from './components/Education';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './output.css';
import Contactus from './components/Contactus';
import GlobalState from './context/global/GlobalState';

function App() {
  return (
    <GlobalState>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Experience></Experience>
      <Contactus></Contactus>
    </GlobalState>
  );
}

export default App;
