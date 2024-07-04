import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProjectItemModal(props) {
  const { open, setOpen, project, publicUrl, projectId } = props;
  // Open and close the modal

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
  return (
    <>
      {open && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 w-full h-full max-h-full bg-black bg-opacity-50"
          id={projectId + 'modal'}
          onClick={e => {
            // Close the modal if the click event originated from this div
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div className="relative font-poppins p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between px-4 py-2 md:px-5 md:py-3 rounded-t">
                <h3 className="text-xl ps-1 md:ps-2 font-bold my-2">
                  {project.name}
                </h3>
                <FontAwesomeIcon
                  icon={faX}
                  size="lg"
                  className="px-3 hover:text-gray-600"
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </div>
              {/* <!-- Modal body --> */}
              <div className="overflow-y-auto max-h-128">
                <div className=" mx-3 ">
                  <LazyLoadImage
                    effect="blur"
                    src={publicUrl + project.image}
                    alt="projects"
                    className="rounded-lg min-h-32 shadow-lg "
                  />
                </div>
                <div className="px-4 py-2 md:px-5 md:py-3 font-normal text-sm md:text-base min-h-10 leading-relaxed mx-3">
                  {project.description}
                  {project.live && (
                    <p className="py-2">
                      Live link -{' '}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.live}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        {project.live}
                      </a>
                    </p>
                  )}
                  {project.github && (
                    <p className="py-2">
                      Github link -{' '}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.github}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        {project.github}
                      </a>
                    </p>
                  )}
                  <div className="flex flex-wrap text-white ">
                    {project.stack.map((element, index) => (
                      <p
                        key={index}
                        className="p-2 m-1 bg-sky-500 border-2 border-blue-600 rounded-xl"
                      >
                        {element}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-end py-3 px-6 md:px-6  border-t border-gray-200 rounded-b ">
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  type="button"
                  className="py-2 px-3 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectItemModal;
