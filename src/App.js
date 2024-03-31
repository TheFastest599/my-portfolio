import React, { useContext } from 'react';
import './App.css';
import Education from './components/Education';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './output.css';
import Contactus from './components/Contactus';
import globalContext from './context/global/globalContext';

function App() {
  const gcontext = useContext(globalContext);

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Experience></Experience>
      <Contactus></Contactus>
    </>
  );
}

export default App;
