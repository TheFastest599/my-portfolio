import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Skills() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl } = gcontext;
  return (
    <div
      className="container w-80 sm:py-10 mx-auto px-6 md:px-6 min-h-screen"
      style={{ width: '100vw' }}
    >
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900">
        Skills
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-6 text-center mt-12">
        {Object.keys(user.skills).map((skill, index) => {
          const skill_ = user.skills[skill];
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-lg "
            >
              {/* <img
                width="200"
                height="200"
                src={publicUrl + skill_.image}
                alt="react"
                loading="lazy"
              /> */}
              <LazyLoadImage
                effect="blur"
                src={publicUrl + skill_.image}
                alt="react"
                width="200"
                height="200"
              />
              <p className=" text-base font-poppins font-medium md:text-lg mt-1 md:mt-3">
                {skill_.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
