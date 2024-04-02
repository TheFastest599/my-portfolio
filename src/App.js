import React, { useCallback } from 'react';
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
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import particlesOptions from './components/assets/particlesOptions.json';

function App() {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);
  return (
    <GlobalState>
      <div style={{ position: 'relative', zIndex: -1 }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>
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
