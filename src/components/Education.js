import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Education() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl, refStore } = gcontext;
  return (
    <div
      className="container  mx-auto px-6 md:px-6 my-28 min-h-screen md:min-h-[80vh] lg:min-h-[70vh] xl:min-h-[60vh]"
      ref={refStore.educationRef}
    >
      {/* Heading */}
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900">
        Education
      </h1>
      {/* Content */}
      <div className="my-16">
        {Object.keys(user.education).map((education, index) => {
          const education_ = user.education[education];
          return (
            <div
              key={index}
              className="flex flex-col items-center font-poppins  glassBox my-4 rounded-lg shadow-lg md:flex-row md:max-w-full "
            >
              <LazyLoadImage
                effect="blur"
                src={publicUrl + education_.image}
                alt="education"
                className="object-cover w-full rounded-t-lg h-auto min-h-32 md:w-64 lg:w-96 md:rounded-none md:rounded-s-lg"
              />
              {/* <img
                className="object-cover w-full rounded-t-lg h-auto md:w-64 lg:w-96 md:rounded-none md:rounded-s-lg"
                src={publicUrl + education_.image}
                alt="education"
                loading="lazy"
              /> */}
              <div className="flex flex-col justify-between p-6 leading-normal">
                <h5
                  className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-blue-600 cursor-pointer"
                  onClick={() => {
                    window.open(education_.link, '_blank');
                  }}
                >
                  {education_.name}
                </h5>
                <p className="mb-2 font-semibold text-base md:text-lg max-w-3xl">
                  {education_.period}
                </p>
                <p className="mb-3 font-medium text-base md:text-lg max-w-3xl">
                  {education_.grade}
                </p>
                <p className="mb-3 font-normal text-sm md:text-base max-w-3xl ">
                  {education_.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
