import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';

function Education() {
  const gcontext = useContext(globalContext);
  const { user, publicUrl } = gcontext;
  return (
    <div
      className="container w-80  mx-auto px-6 md:px-6 min-h-screen my-28"
      style={{ width: '100vw' }}
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
              <img
                className="object-cover w-full rounded-t-lg h-auto md:w-64 lg:w-96 md:rounded-none md:rounded-s-lg"
                src={publicUrl + education_.image}
                alt="education"
              />
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
