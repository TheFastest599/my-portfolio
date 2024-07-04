import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProjectItemModal from './ProjectItemModal';

function ProjectsItem(props) {
  const { project, publicUrl, projectId } = props;
  const [stackStatus, setStackStatus] = useState(false);
  const [openDesc, setOpenDesc] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let handleDesc = function () {
    if (project.description.length > 115 && !openDesc) {
      return project.description.slice(0, 115) + '...';
    } else {
      return project.description;
    }
  };
  document.addEventListener('click', e => {
    if (e.target.id !== projectId + 'desc') {
      setOpenDesc(false);
    }
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <ProjectItemModal
        open={openModal}
        setOpen={setOpenModal}
        project={project}
        publicUrl={publicUrl}
        projectId={projectId}
      />
      <div className=" rounded-lg shadow font-poppins  glassBox">
        <LazyLoadImage
          effect="blur"
          src={publicUrl + project.image}
          alt="projects"
          className="rounded-t-lg min-h-32"
          onClick={e => {
            setOpenModal(true);
          }}
        />
        {/* <img
        className="rounded-t-lg"
        src={publicUrl + project.image}
        alt="mynotebook"
        loading="lazy"
      /> */}
        <div className="px-5 py-3">
          <h5
            className=" text-xl font-bold my-2"
            onClick={e => {
              setOpenModal(true);
            }}
          >
            {project.name}
          </h5>
          <p
            className=" font-normal text-sm md:text-base min-h-10 mb-3"
            id={projectId + 'desc'}
            onClick={e => {
              setOpenModal(true);
            }}
          >
            {handleDesc()}
          </p>
          <div className="flex justify-between">
            <div>
              <button
                className="bg-international-orange px-2 text-white rounded-lg py-1 text-sm shadow-lg hover:shadow-orange-500/50"
                onMouseEnter={() => setStackStatus(true)}
                onMouseLeave={() => setStackStatus(false)}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                <span style={{ marginRight: '10px' }}>Tech Stack</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`transition-transform duration-300 ease-in-out ${
                    stackStatus ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                sx={{ marginTop: '10px' }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Typography sx={{ p: 2, fontFamily: 'Poppins' }}>
                  {project.stack
                    .reduce((result, item, index) => {
                      // Add the item to the result
                      result += item;

                      // If the current index is not the last index of the array, add a comma and a space
                      // If the next index is a multiple of 3, add a new line
                      if (index !== project.stack.length - 1) {
                        result += (index + 1) % 3 === 0 ? '\n' : ', ';
                      }

                      return result;
                    }, '')
                    .split('\n')
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== project.stack.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                </Typography>
              </Popover>
            </div>
            {/* github and live link */}
            <div className="bg-shark text-white text-sm rounded-lg">
              <button
                className=" px-1.5 py-1.5 mx-1  transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-125"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  onClick={() => {
                    window.open(project.github, '_blank');
                  }}
                />
              </button>
              {project.live ? (
                <button
                  className=" pe-1.5 py-1.5 mx-1 hover:underline text-orange-600 font-poppins font-medium"
                  onClick={() => {
                    window.open(project.live, '_blank');
                  }}
                >
                  Live<span> </span>
                  <FontAwesomeIcon icon={faLink} />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsItem;
