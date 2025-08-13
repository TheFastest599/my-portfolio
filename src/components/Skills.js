import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Skills() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl, refStore } = gcontext;
  return (
    <div
      className="container my-6 sm:my-16 mx-auto px-6 md:px-8 min-h-fit"
      ref={refStore.skillsRef}
    >
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900 mb-8">
        Skills
      </h1>
      <div className="flex flex-wrap gap-3 md:gap-4 my-10">
        {Object.keys(user.skills).map((skill, index) => {
          const skill_ = user.skills[skill];
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-blue-200"
            >
              <LazyLoadImage
                effect="blur"
                src={publicUrl + skill_.image}
                alt={skill_.name}
                width="24"
                height="24"
                className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
              />
              <span className="text-sm sm:text-base font-poppins font-medium text-slate-700 whitespace-nowrap">
                {skill_.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
