import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './output.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
}

export default App;
