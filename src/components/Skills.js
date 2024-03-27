import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';

function Skills() {
  const gcontext = useContext(globalContext);
  const { publicUrl } = gcontext;
  return (
    <div
      className="container w-80 sm:py-10 mx-auto px-6 md:px-6 min-h-screen"
      style={{ width: '100vw' }}
    >
      <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-slate-900">
        Skills
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-6 text-center mt-12">
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/html.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            HTML5
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/css.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            CSS3
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/javascript.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            Javascript
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/react.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            React
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/node-js.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            Node.js
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/express-js.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            Express.js
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/mongodb.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            MongoDB
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/mysql.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            MySQL
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/bootstrap.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            Bootstrap
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/tailwind-css.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            Tailwind CSS
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/github.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            GitHub
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/python.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            Python
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/flask.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            Flask
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/pandas-python.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            pandas (Python)
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/c.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            C
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            width="200"
            height="200"
            src={publicUrl + '/assests/skills/c-plus-plus.png'}
            alt="react"
          />
          <p
            className=" text-base md:text-lg mt-1 md:mt-3"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            C++
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
