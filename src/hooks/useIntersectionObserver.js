import { useEffect, useState } from 'react';

const useIntersectionObserver = domRef => {
  const [isVisible, setIsVisible] = useState(false);

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
    // eslint-disable-next-line
  }, []);

  return isVisible;
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
