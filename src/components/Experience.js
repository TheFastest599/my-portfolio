import React, { useContext, useState, useRef, useEffect } from 'react';
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

      <div className="flex flex-col gap-4 max-w-4xl mx-auto mt-8 sm:mt-16">
        {user.experienceNew.map((experience, index) => (
          <div
            key={index}
            className=" rounded-lg shadow font-poppins hover:shadow-orange-500/40 hover:shadow-md glassBox px-5 py-3"
          >
            <div className="flex gap-4 items-center">
              <div className="flex-none size-16 sm:size-20 lg:size-24 rounded-xl bg-white">
                <img
                  src={experience.logo}
                  alt="logo"
                  className="w-full h-full rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg lg:text-2xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer"
                  onClick={() => {
                    window.open(experience.link, '_blank');
                  }}
                >
                  {experience.organisation}
                </h3>
                <p className="mb-4 text-sm md:text-base lg:text-lg font-normal text-gray-800 ">
                  {experience.duration}
                </p>
              </div>
            </div>
            <ol className="relative ms-6 sm:ms-10 xl:ms-12 border-s-2 border-azure-radiance pt-4 font-poppins">
              {experience.positions.map((position, index) => (
                <Position position={position} index={index} key={index} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

const Position = ({ position, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Check if the content exceeds 3 lines
      const lineHeight = parseFloat(
        getComputedStyle(contentRef.current).lineHeight
      );
      const maxHeight = lineHeight * 3; // Height for 3 lines
      if (contentRef.current.scrollHeight > maxHeight) {
        setIsOverflowing(true);
      }
    }
  }, []);

  return (
    <li className="mb-5 ms-4" key={index}>
      <div className="absolute w-3 h-3 bg-international-orange rounded-full mt-1.5 -start-1.5 border border-white "></div>
      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 ">
        {position.tittle}
      </h3>
      <time className="mb-1 text-sm lg:text-base font-normal leading-none text-gray-600 ">
        {position.period}
      </time>

      <p
        ref={contentRef}
        className={` text-sm md:text-base lg:text-lg font-normal text-gray-800 ${
          isExpanded ? '' : 'line-clamp-3'
        }`}
      >
        {position.description}
      </p>
      {isOverflowing && (
        <button
          className="text-gray-600 hover:underline text-sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </li>
  );
};
