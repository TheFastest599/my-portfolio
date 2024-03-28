import React, { useContext } from 'react';

import ParticlesComponent from './particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import globalContext from '../context/global/globalContext';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function HeroSection() {
  const gcontext = useContext(globalContext);
  const { user, windowWidth, publicUrl } = gcontext;
  console.log(user);
  return (
    <div style={{ height: '90vh' }} className="my-12 md:my-14 relative ">
      <ParticlesComponent id="particles" />
      {/* Hero Pic */}
      <div className="absolute top-6 msm:top-8 sm:top-10 md:top-15 md:right-20 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none">
        <img
          src={publicUrl + '/assests/profile-pic (17).png'}
          alt="heroPic"
          className="w-72 sm:w-80 md:w-88 lg:w-96 xl:w-128 rounded-full "
        />
      </div>
      {/* Name and Details */}
      <div className="absolute top-56 left-10 msm:top-64 msm:left-10 sm:top-80 sm:left-10  md:top-20 md:left-20 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bebas font-light">
          My Name is
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl text-azure-radiance font-bebas font-medium">
          {user.name}
        </h1>
        {/* About Me Description */}
        <p className="font-poppins text-xs sm:text-sm  max-w-72 sm:max-w-96 md:max-w-112 lg:max-w-128 text-justify">
          {`"${user.description}"`}
        </p>
        {/* Hire Me! */}
        <button
          onClick={() => {
            console.log('Hire Me Please ! 🤗');
          }}
          className="bg-international-orange font-sans font-medium text-white rounded-full py-1 px-5 mt-6 md:px-12 md:text-lg md:py-2
            md:mt-12 focus:ring focus:ring-orange-300 focus:outline-none hover:drop-shadow-lg transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-110"
        >
          Hire Me!
        </button>
        {/* Social Links */}
        <div className="flex items-center justify-between max-w-48 ms-2 sm:max-w-60 md:max-w-80  mt-32">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: '#0077b5' }}
            size={`${windowWidth > 768 ? '2xl' : 'xl'}`}
            className="cursor-pointer transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-150"
            onClick={() => {
              window.open(user.socials.linkedin, '_blank');
            }}
          />
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: '#6e5494' }}
            size={`${windowWidth > 768 ? '2xl' : 'xl'}`}
            className="cursor-pointer transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-150"
            onClick={() => {
              window.open(user.socials.github, '_blank');
            }}
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ color: '#000000' }}
            size={`${windowWidth > 768 ? '2xl' : 'xl'}`}
            className="cursor-pointer transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-150"
            onClick={() => {
              window.open(user.socials.twitter, '_blank');
            }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: '#c13584' }}
            size={`${windowWidth > 768 ? '2xl' : 'xl'}`}
            className="cursor-pointer transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-150"
            onClick={() => {
              window.open(user.socials.instagram, '_blank');
            }}
          />
        </div>
      </div>
    </div>
    // msm sm md lg xl 2xl
  );
}

export default HeroSection;
