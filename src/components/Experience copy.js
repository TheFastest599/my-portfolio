import React, { useContext, useState } from 'react';
import globalContext from '../context/global/globalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Experience() {
  const gcontext = useContext(globalContext);
  const { user, refStore } = gcontext;
  const [displayCount, setDisplayCount] = useState(4);
  return (
    <div
      className="container   mx-auto px-6 md:px-6 my-28 min-h-screen md:min-h-[80vh] lg:min-h-[70vh] xl:min-h-[60vh]"
      ref={refStore.experienceRef}
    >
      {/* Heading */}
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900">
        Experience
      </h1>

      <ol className="relative my-16 ms-2 border-s-2 border-azure-radiance pt-2 font-poppins">
        {Object.keys(user.experience)
          .slice(0, displayCount)
          .map((experience, index) => {
            const experience_ = user.experience[experience];
            return (
              <li className="mb-10 ms-4" key={index}>
                <div className="absolute w-3 h-3 bg-international-orange rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <time className="mb-1 text-sm lg:text-base font-normal leading-none text-gray-600 ">
                  {experience_.period}
                </time>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 ">
                  {experience_.tittle}
                </h3>
                <p className="mb-4 text-sm md:text-base lg:text-lg font-normal text-gray-800 ">
                  {experience_.description}
                </p>
              </li>
            );
          })}
      </ol>
      {Object.keys(user.experience).length > 4 && (
        <div className="text-center">
          {displayCount < Object.keys(user.experience).length ? (
            <button
              className=" bg-shark text-white rounded-lg py-2 px-4 transition-all duration-200 ease-in-out hover:px-10"
              onClick={() =>
                setDisplayCount(Object.keys(user.experience).length)
              }
            >
              <span className="mx-2">View More</span>
              <FontAwesomeIcon icon={faAngleDown} size="lg" />
            </button>
          ) : (
            <button
              className="bg-shark text-white rounded-lg py-2 px-4 transition-all duration-200 ease-in-out hover:px-10"
              onClick={() => setDisplayCount(4)}
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

export default Experience;
