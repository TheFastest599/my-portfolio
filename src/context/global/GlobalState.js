import { useState, useEffect, useRef } from 'react';
import GlobalContext from './globalContext';
import user from '../../components/assets/userDetails.json';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { database } from '../../firebase/config';
import { ref, get, set } from 'firebase/database';

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

  const [info, setInfo] = useState({
    visitCount: 0,
  });

  // Update visit count
  const updateInfo = async () => {
    const db = database;
    const infoRef = ref(db, 'info');
    const host = window.location.hostname;

    try {
      const snapshot = await get(infoRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const newCount = data.visitCount + 1;
        setInfo({ ...data, visitCount: newCount });
        // console.log('Total site visits:', newCount);
        // console.log('Info fetched:', data, info);
        if (host !== 'localhost' && host !== '192.168.56.1') {
          await set(infoRef, { ...data, visitCount: newCount });
        } else {
          console.log('Visit count not updated for localhost');
        }
      } else {
        setInfo({ visitCount: 1 });
        console.log('Total site visits: 1');
        if (host !== 'localhost') {
          await set(infoRef, { ...info, visitCount: 1 });
        } else {
          console.log('Visit count not updated for localhost');
        }
      }
    } catch (error) {
      console.error('Error fetching visit count:', error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        windowWidth,
        publicUrl,
        refStore,
        oberseverStore,
        updateInfo,
        info,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
