import React, { useState, useContext } from 'react';
import smallProfilePic from '../assests/small-profile.png';
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
  const { windowWidth } = gcontext;

  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  // Drawer List for mobile view navigation
  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
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
        <ListItemButton onClick={() => console.log('About Me')}>
          <ListItemText primary={'About Me'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Skills'} disablePadding>
        <ListItemButton onClick={() => console.log('Skills')}>
          <ListItemText primary={'Skills'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Projects'} disablePadding>
        <ListItemButton onClick={() => console.log('Projects')}>
          <ListItemText primary={'Projects'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Education'} disablePadding>
        <ListItemButton onClick={() => console.log('Education')}>
          <ListItemText primary={'Education'} />
        </ListItemButton>
      </ListItem>
      <ListItem key={'Experience'} disablePadding>
        <ListItemButton onClick={() => console.log('Experience')}>
          <ListItemText primary={'Experience'} />
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
        <nav className="flex items-center justify-between py-2 container mx-auto px-2 md:px-6">
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="text-black hover:text-blue-500">
                  About Me
                </a>
              </li>
              <li>
                <a href="#about" className="text-black hover:text-blue-500">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-blue-500">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-blue-500">
                  Experience
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center  justify-self-center text-2xl drop-shadow-lg">
            <img
              src={smallProfilePic}
              className="h-12 rounded-full"
              alt="small-profile-pic"
            />
          </div>
          <div>
            <button className="bg-quill-gray px-4 py-2 rounded-full hover:drop-shadow-md ">
              Contact Me
            </button>
          </div>
        </nav>
      ) : (
        <nav className="flex items-center justify-between py-2 px-4  mx-auto ">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            onClick={toggleDrawer(true)}
            className="cursor-pointer "
          />
          <div className="flex items-center  justify-self-center text-2xl drop-shadow-lg ">
            <img
              src={smallProfilePic}
              className="h-10 rounded-full"
              alt="small-profile-pic"
            />
          </div>
          <button className="bg-quill-gray px-4 mx-2 py-1.5 rounded-full hover:drop-shadow-md text-sm">
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
