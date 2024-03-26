import { useState, useEffect } from 'react';
import GlobalContext from './globalContext';
import user from '../../assests/userDetails.json';

const GlobalState = props => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <GlobalContext.Provider value={{ user, windowWidth }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
