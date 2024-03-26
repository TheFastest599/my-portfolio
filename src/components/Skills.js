import React from 'react';
import html from '../assests/skills/html.png';
import css from '../assests/skills/css.png';
import javascript from '../assests/skills/javascript.png';
import react from '../assests/skills/react.png';
import node from '../assests/skills/node-js.png';
import express from '../assests/skills/express-js.png';
import mongodb from '../assests/skills/mongodb.png';
import mysql from '../assests/skills/mysql.png';
import tailwindCss from '../assests/skills/tailwind-css.png';
import github from '../assests/skills/github.png';
import python from '../assests/skills/python.png';
import flask from '../assests/skills/flask.png';
import pandasPython from '../assests/skills/pandas-python.png';
import c from '../assests/skills/c.png';
import cPlusPlus from '../assests/skills/c-plus-plus.png';

function Skills() {
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
          <img width="200" height="200" src={html} alt="react" />
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
          <img width="200" height="200" src={css} alt="react" />
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
          <img width="200" height="200" src={javascript} alt="react" />
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
          <img width="200" height="200" src={react} alt="react" />
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
          <img width="200" height="200" src={node} alt="react" />
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
          <img width="200" height="200" src={express} alt="react" />
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
          <img width="200" height="200" src={mongodb} alt="react" />
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
          <img width="200" height="200" src={mysql} alt="react" />
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
          <img width="200" height="200" src={tailwindCss} alt="react" />
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
          <img width="200" height="200" src={github} alt="react" />
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
          <img width="200" height="200" src={python} alt="react" />
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
          <img width="200" height="200" src={flask} alt="react" />
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
          <img width="200" height="200" src={pandasPython} alt="react" />
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
          <img width="200" height="200" src={c} alt="react" />
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
          <img width="200" height="200" src={cPlusPlus} alt="react" />
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
