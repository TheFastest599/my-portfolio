import React, { useContext, useState } from 'react';
import globalContext from '../context/global/globalContext';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faCopy } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { ReactTyped } from 'react-typed';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function Contactus() {
  const gcontext = useContext(globalContext);
  const { user, windowWidth, refStore, oberseverStore } = gcontext;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const copyToClipboard = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => handleClick('Copied to clipboard: ' + text));
  };

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    messagesnack: '',
  });

  const { vertical, horizontal, open, messagesnack } = state;

  const handleClick = messagesnack => {
    setState({ ...state, open: true, messagesnack });
  };

  const handleClose = () => {
    setState({ ...state, open: false, messagesnack: '' });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { first_name, last_name, email, message } = formData;
    if (!first_name || !last_name || !email || !message) {
      alert('Please fill all fields');
      return;
    }
    handleClick('Email sent successfully');
    // Send email through EmailJS
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: first_name + ' ' + last_name,
          email_id: email,
          message: message,
        },
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      );
      handleClick('Email sent successfully');
    } catch (error) {
      handleClick('Failed to send email');
    }

    // Clear form
    setFormData({ first_name: '', last_name: '', email: '', message: '' });
  };

  return (
    <div className="my-14" ref={refStore.contactusRef}>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message={messagesnack}
          key={vertical + horizontal}
        />
      </Box>

      <section className=" font-poppins">
        <div className="container px-6 py-6 mx-auto">
          <h1 className="text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900">
            Contact Me
          </h1>
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2 glassBox px-2 py-2 rounded-lg">
            <div className="grid grid-cols-2 gap-6 ">
              {/* Description */}
              {oberseverStore.contactusObserver && (
                <ReactTyped
                  className="mt-2 text-sm md:text-base lg:text-lg text-justify font-medium col-span-2"
                  strings={[user.contactMeDescription]}
                  typeSpeed={60}
                />
              )}

              {/* Email */}
              <div className="col-span-2 sm:col-span-1 flex flex-row sm:items-center sm:space-x-4">
                <span className="inline-block p-3 mx-1 text-azure-radiance ">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </span>

                <div>
                  <h2 className="mt-4 text-base font-medium text-gray-800">
                    Email{' '}
                    {/* {!isMobile && (
                      <FontAwesomeIcon
                        className="text-azure-radiance hover:scale-125 cursor-pointer"
                        icon={faCopy}
                        onClick={() => {
                          copyToClipboard(user.email);
                        }}
                      />
                    )} */}
                    <FontAwesomeIcon
                      className="text-azure-radiance hover:scale-125 cursor-pointer"
                      icon={faCopy}
                      onClick={() => {
                        copyToClipboard(user.email);
                      }}
                    />
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    This is my email address.
                  </p>
                  <a
                    href={`mailto:${user.email}?subject=Portfolio Related Inquiry`}
                    target="_blank"
                    className="mt-2 text-sm text-blue-500"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="col-span-2 sm:col-span-1 flex flex-row sm:items-center sm:space-x-4">
                <span className="inline-block mx-1 p-3 text-azure-radiance ">
                  <FontAwesomeIcon icon={faPhone} size="lg" /> <br />
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="lg"
                    className="mt-3"
                  />
                </span>

                <div>
                  <h2 className="mt-4  text-base font-medium text-gray-800">
                    Phone{' '}
                    {/* {!isMobile && (
                      <FontAwesomeIcon
                        className="text-azure-radiance hover:scale-125 cursor-pointer"
                        icon={faCopy}
                        onClick={() => {
                          copyToClipboard(user.phone);
                        }}
                      />
                    )} */}
                    <FontAwesomeIcon
                      className="text-azure-radiance hover:scale-125 cursor-pointer"
                      icon={faCopy}
                      onClick={() => {
                        copyToClipboard(user.phone);
                      }}
                    />
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Available for contact.
                  </p>
                  <a
                    href={`tel:${user.phone}`}
                    className="mt-2 text-sm text-blue-500"
                  >
                    {user.phone}
                  </a>
                </div>
              </div>
              {/* Social Links */}
              <div className="col-span-2  flex items-center justify-between max-w-full mx-10 my-12 ">
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

            <div className="p-2 py-3 rounded-lg bg-gray-50 md:px-8">
              <form onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      name="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="John "
                      className="text-sm md:text-base lg:text-lg block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      name="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="text-sm md:text-base lg:text-lg block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="text-sm md:text-base lg:text-lg block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="text-sm md:text-base lg:text-lg block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-international-orange rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
