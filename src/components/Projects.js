import React, { useContext, useState } from 'react';
import globalContext from '../context/global/globalContext';
import ProjectsItem from './ProjectsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl } = gcontext;

  const [displayCount, setDisplayCount] = useState(6);
  return (
    <div
      className="container w-80  mx-auto px-6 md:px-6 min-h-screen mb-28"
      style={{ width: '100vw' }}
    >
      {/* Heading */}
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900">
        Projects
      </h1>
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
