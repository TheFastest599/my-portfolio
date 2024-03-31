import { useState, useEffect, useRef } from 'react';
import GlobalContext from './globalContext';
import user from '../../components/userDetails.json';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const GlobalState = props => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const publicUrl = process.env.PUBLIC_URL;

  // Refs
  const heroSectionRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const contactusRef = useRef(null);

  // Intersection Observer

  const heroSectionObserver = useIntersectionObserver(heroSectionRef);
  const skillsObserver = useIntersectionObserver(skillsRef);
  const projectsObserver = useIntersectionObserver(projectsRef);
  const educationObserver = useIntersectionObserver(educationRef);
  const experienceObserver = useIntersectionObserver(experienceRef);
  const contactusObserver = useIntersectionObserver(contactusRef);

  // reference store
  const refStore = {
    heroSectionRef,
    skillsRef,
    projectsRef,
    educationRef,
    experienceRef,
    contactusRef,
  };

  // obersever store
  const oberseverStore = {
    heroSectionObserver,
    skillsObserver,
    projectsObserver,
    educationObserver,
    experienceObserver,
    contactusObserver,
  };

  return (
    <GlobalContext.Provider
      value={{ user, windowWidth, publicUrl, refStore, oberseverStore }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
