import React, { useContext, useState } from 'react';
import globalContext from '../context/global/globalContext';
import ProjectsItem from './ProjectsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  boxShadow: 24,
  fontFamily: 'Poppins',
};

function Projects() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl } = gcontext;

  const [displayCount, setDisplayCount] = useState(6);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className="container w-80  mx-auto px-6 md:px-6 min-h-screen mb-28"
      style={{ width: '100vw' }}
    >
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900">
          Projects
        </h1>
        <FontAwesomeIcon
          className="me-3 bg-shark text-white rounded-md p-1 cursor-pointer hover:drop-shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={handleOpen}
          icon={faSliders}
          size="xl"
        />
      </div>
      {/* Filter projects Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-80 sm:w-128  max-w-4xl bg-quill-gray font-poppins mx-auto border-0"
        >
          <h2 className="text-lg sm:text-3xl mx-3 py-4 font-medium">
            Filter Projects
          </h2>
        </Box>
      </Modal>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10 mt-12 ">
        {Object.keys(user.projects)
          .slice(0, displayCount)
          .map((projectKey, index) => {
            const project = user.projects[projectKey];
            return (
              <ProjectsItem
                key={index}
                projectId={index}
                publicUrl={publicUrl}
                project={project}
              />
            );
          })}
      </div>
      {Object.keys(user.projects).length > 6 && (
        <div className="text-center mt-4">
          {displayCount < Object.keys(user.projects).length ? (
            <button
              className=" bg-shark text-white rounded-lg py-2 px-4 transition-all duration-200 ease-in-out hover:px-10"
              onClick={() => setDisplayCount(Object.keys(user.projects).length)}
            >
              <span className="mx-2">View More</span>
              <FontAwesomeIcon icon={faAngleDown} size="lg" />
            </button>
          ) : (
            <button
              className="bg-shark text-white rounded-lg py-2 px-4 transition-all duration-200 ease-in-out hover:px-10"
              onClick={() => setDisplayCount(6)}
            >
              <span className="mx-2">View Less</span>
              <FontAwesomeIcon icon={faAngleUp} size="lg" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
