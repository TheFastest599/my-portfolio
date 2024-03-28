import './App.css';
import Education from './components/Education';
import Filter from './components/Filter stuff';
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
      <Education></Education>
      {/* <Filter></Filter> */}
      {/* Ura do upar wale ko  */}
    </>
  );
}

export default App;
