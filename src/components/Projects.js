import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';
import ProjectsItem from './ProjectsItem';

function Projects() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl } = gcontext;
  return (
    <div
      className="container w-80  mx-auto px-6 md:px-6 min-h-screen my-28"
      style={{ width: '100vw' }}
    >
      {/* Heading */}
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-slate-900">
        Projects
      </h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  mt-12">
        {/* Card - 1 */}
        {Object.keys(user.projects).map((projectKey, index) => {
          const project = user.projects[projectKey];
          return (
            <ProjectsItem
              key={index}
              projectId={index}
              publicUrl={publicUrl}
              project={project}
            ></ProjectsItem>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
