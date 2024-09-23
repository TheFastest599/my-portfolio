import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import { useScroll } from '../hooks/useScroll';
import globalContext from '../context/global/globalContext';

function Navbar() {
  const gcontext = useContext(globalContext);
  const { windowWidth, publicUrl, user, refStore } = gcontext;

  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  const scrollToSection = sectionRef => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Drawer List for mobile view navigation
  const DrawerList = (
    <Box
      sx={{ width: 200, fontFamily: 'Poppins' }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <ListItem key={'close'} disablePadding>
        <ListItemButton onClick={toggleDrawer(false)}>
          <ListItemIcon
            sx={{
              color: 'black',
              paddingY: 1,
            }}
          >
            <CloseIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem key={'About Me'} disablePadding>
        <ListItemButton
          onClick={() => {
            scrollToSection(refStore.heroSectionRef);
          }}
        >
          <ListItemText primary={'About Me'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Skills'} disablePadding>
        <ListItemButton
          onClick={() => {
            scrollToSection(refStore.skillsRef);
          }}
        >
          <ListItemText primary={'Skills'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Projects'} disablePadding>
        <ListItemButton
          onClick={() => {
            scrollToSection(refStore.projectsRef);
          }}
        >
          <ListItemText primary={'Projects'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Experience'} disablePadding>
        <ListItemButton
          onClick={() => {
            scrollToSection(refStore.experienceRef);
          }}
        >
          <ListItemText primary={'Experience'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Education'} disablePadding>
        <ListItemButton
          onClick={() => {
            scrollToSection(refStore.educationRef);
          }}
        >
          <ListItemText primary={'Education'} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </Box>
  );

  // Scroll direction hook
  const { scrollDirection } = useScroll();
  const styles = {
    active: {
      visibility: 'visible',
      transition: 'all 0.3s',
      width: '100vw',
      backgroundColor: 'white',
    },
    hidden: {
      visibility: 'hidden',
      transition: 'all 0.3s',
      transform: 'translateY(-100%)',
      width: '100vw',
      backgroundColor: 'white',
    },
  };

  const navStatus = () => {
    if (scrollDirection === 'down') {
      return styles.active;
    } else if (scrollDirection === undefined) {
      return styles.active;
    } else {
      return styles.hidden;
    }
  };
  return (
    <div className="fixed top-0 z-10" style={navStatus()}>
      {windowWidth > 768 ? (
        <nav className="flex items-center justify-between py-2 font-poppins container  mx-auto px-2 md:px-6 max-w-8xl">
          <div>
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => {
                    scrollToSection(refStore.heroSectionRef);
                  }}
                  className="hover:text-blue-500 text-black"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection(refStore.skillsRef);
                  }}
                  className="hover:text-blue-500 text-black"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection(refStore.projectsRef);
                  }}
                  className="hover:text-blue-500 text-black"
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    scrollToSection(refStore.experienceRef);
                  }}
                  className="hover:text-blue-500 text-black"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection(refStore.educationRef);
                  }}
                  className="hover:text-blue-500 text-black"
                >
                  Education
                </button>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              scrollToSection(refStore.heroSectionRef);
            }}
            className="flex items-center cursor-pointer justify-self-center text-2xl drop-shadow-lg"
          >
            <img
              src={publicUrl + user.smallDp}
              className="h-12 rounded-full"
              alt="small-profile-pic"
            />
          </div>
          <div>
            <button
              onClick={() => {
                scrollToSection(refStore.contactusRef);
              }}
              className="px-4 py-2 rounded-full transition duration-200 ease-in-out hover:drop-shadow-lg hover:scale-105 bg-quill-gray text-black"
            >
              Contact Me
            </button>
          </div>
        </nav>
      ) : (
        <nav className="flex items-center justify-between py-2 px-4 font-poppins mx-auto ">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            onClick={toggleDrawer(true)}
            className="cursor-pointer "
          />
          <div
            onClick={() => {
              scrollToSection(refStore.heroSectionRef);
            }}
            className="flex items-center cursor-pointer justify-self-center text-2xl drop-shadow-lg "
          >
            <img
              src={publicUrl + user.smallDp}
              className="h-10 rounded-full"
              alt="small-profile-pic"
            />
          </div>
          <button
            onClick={() => {
              scrollToSection(refStore.contactusRef);
            }}
            className="px-4 mx-2 py-1.5 rounded-full hover:drop-shadow-lg hover:scale-105 text-sm bg-quill-gray text-black transition duration-200 ease-in-out"
          >
            Contact Me
          </button>
        </nav>
      )}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Navbar;
