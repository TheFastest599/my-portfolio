import React, { useContext } from 'react';
import mynotebook from '../assests/projects/mynotebook.png';
import globalContext from '../context/global/globalContext';

function Projects() {
  const gcontext = useContext(globalContext);
  const { user } = gcontext;
  return (
    <div
      className="container w-80  mx-auto px-6 md:px-6 min-h-screen "
      style={{ width: '100vw' }}
    >
      {/* Heading */}
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-slate-900">
        Projects
      </h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  mt-12">
        {/* Card - 1 */}
        <div
          className=" rounded-lg shadow bg-shark text-white"
          style={{ fontFamily: 'Poppins' }}
        >
          <img className="rounded-t-lg" src={mynotebook} alt="mynotebook" />
          <div className="px-5 py-3">
            <h5 className=" text-xl font-bold ">
              {user.projects.myNotebook.name}
            </h5>
            <p className=" font-normal text-sm md:text-base h-20 mb-3">
              {user.projects.myNotebook.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
