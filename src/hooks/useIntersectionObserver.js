import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    const refCurrent = domRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return [isVisible, domRef];
};

export default useIntersectionObserver;

// import React from 'react';
// import useIntersectionObserver from './useIntersectionObserver';

// const ProjectsItem = ({ publicUrl, project }) => {
//   const [isVisible, domRef] = useIntersectionObserver();

//   return (
//     <img
//       ref={domRef}
//       className="rounded-t-lg"
//       src={isVisible ? publicUrl + project.image : ''}
//       alt="mynotebook"
//     />
//   );
// };

// export default ProjectsItem;

// Example
