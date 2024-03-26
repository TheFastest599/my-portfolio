import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const FallingElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = isVisible => {
    setIsVisible(isVisible);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <VisibilitySensor
        onChange={onVisibilityChange}
        partialpartialVisibility={true}
        scrollCheck={true}
      >
        <div
          className={`${
            isVisible ? 'animate-fall' : 'opacity-0 translate-y-20'
          } transition-all duration-1000`}
        >
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
            {/* Your content goes here */}
            <h2 className="text-2xl font-bold">Falling Element</h2>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default FallingElement;
