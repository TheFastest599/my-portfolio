import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function ProjectsItem(props) {
  const { project, publicUrl } = props;
  const [stackStatus, setStackStatus] = useState(false);

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
    <div
      className=" rounded-lg shadow   glassBox"
      style={{ fontFamily: 'Poppins' }}
    >
      <img
        className="rounded-t-lg"
        src={publicUrl + project.image}
        alt="mynotebook"
      />
      <div className="px-5 py-3">
        <h5 className=" text-xl font-bold my-2">{project.name}</h5>
        <p className=" font-normal text-sm md:text-base h-auto mb-3">
          {project.description}
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
          {/* <div className="flex flex-wrap text-xs">
            {project.stack.map((item, index) => {
              console.log(item);
              return <p key={index}>{item}</p>;
            })}
          </div> */}
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
                className=" pe-1.5 py-1.5 mx-1 hover:underline text-orange-600"
                style={{ fontFamily: 'Poppins', fontWeight: '500' }}
                onClick={() => {
                  window.open(project.live, '_blank');
                }}
              >
                Link<span> </span>
                <FontAwesomeIcon icon={faLink} />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsItem;