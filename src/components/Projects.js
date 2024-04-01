import React, { useContext, useState, useEffect } from 'react';
import globalContext from '../context/global/globalContext';
import ProjectsItem from './ProjectsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl, refStore } = gcontext;

  const [displayCount, setDisplayCount] = useState(6);
  // Open and close the modal
  const [open, setOpen] = useState(false);
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Get the technologies used in the projects
  const technologies = user.technologies;

  // Temporary state to store selected technologies for filtering
  const [tempSelectedTechnologies, setTempSelectedTechnologies] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  // Handle checkbox change
  const handleCheckboxChange = event => {
    const { value, checked } = event.target;
    setTempSelectedTechnologies(prev =>
      checked ? [...prev, value] : prev.filter(tech => tech !== value)
    );
  };

  // useEffect(() => {
  //   if (open) {
  //     setTempSelectedTechnologies(selectedTechnologies);
  //   }
  // }, [open, selectedTechnologies]);

  // Filter projects based on selected technologies

  let filteredProjects = Object.keys(user.projects).filter(projectKey => {
    const project = user.projects[projectKey];
    // Check if all selected technologies are used in this project
    if (selectedTechnologies.length === 0) {
      return true;
    }
    // Check if any selected technologies are used in this project
    return selectedTechnologies.every(technology =>
      project.stack.includes(technology)
    );
  });

  return (
    <div
      className="container w-80  mx-auto px-6 md:px-6 min-h-screen mb-28 "
      ref={refStore.projectsRef}
      style={{ width: '100vw' }}
    >
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h1 className="flex items-center text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900">
          Projects{' '}
          <p className="p-1.5 sm:p-2 mx-2 rounded-lg bg-shark text-white text-xl sm:text-2xl lg:text-3xl">
            {Object.keys(filteredProjects).length}
          </p>
        </h1>
        <button
          className="me-3 bg-shark relative inline-flex items-center rounded-md p-1 cursor-pointer hover:drop-shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={() => {
            setSelectedTechnologies([]);
            setOpen(true);
          }}
        >
          <FontAwesomeIcon className="text-white" icon={faSliders} size="xl" />
          {selectedTechnologies.length > 0 && (
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-azure-radiance   rounded-full -top-2 -end-2 ">
              {selectedTechnologies.length}
            </div>
          )}
        </button>
      </div>
      {/* Filter projects Modal */}
      {/* <!-- Main modal --> */}
      {open && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 w-full h-full max-h-full bg-black bg-opacity-50"
          onClick={e => {
            // Close the modal if the click event originated from this div
            if (e.target === e.currentTarget) {
              setOpen(false);
              setSelectedTechnologies([]);
            }
          }}
        >
          <div className="relative font-poppins p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Filter Projects
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  data-modal-hide="default-modal"
                >
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4 text-sm md:text-base leading-relaxed text-gray-500 ">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 ">
                  {technologies.map((technology, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-azure-radiance px-3 rounded-xl py-1 space-x-3"
                    >
                      <input
                        type="checkbox"
                        value={technology}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 rounded-md text-blue-600"
                      />
                      <label className="text-white">{technology}</label>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                <button
                  onClick={() => {
                    setSelectedTechnologies(tempSelectedTechnologies);
                    setTempSelectedTechnologies([]);
                    setOpen(false);
                  }}
                  type="button"
                  className="text-white bg-international-orange hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Apply
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    setSelectedTechnologies([]);
                  }}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cards */}
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10 mt-12 ">
          {filteredProjects.slice(0, displayCount).map((projectKey, index) => {
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
      )}
      {filteredProjects.length === 0 && (
        <h1 className="mt-48 font-bold text-2xl font-poppins text-center">
          No projects available.
        </h1>
      )}
      {Object.keys(filteredProjects).length > 6 && (
        <div className="text-center mt-4">
          {displayCount < Object.keys(filteredProjects).length ? (
            <button
              className=" bg-shark text-white rounded-lg py-2 px-4 transition-all duration-200 ease-in-out hover:px-10"
              onClick={() =>
                setDisplayCount(Object.keys(filteredProjects).length)
              }
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
