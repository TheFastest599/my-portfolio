import React, { useContext } from 'react';
import NumberAnimation from './NumberAnimation';
import globalContext from '../context/global/globalContext';

function SiteVisits() {
  const { info } = useContext(globalContext);
  const visitCount = info.visitCount || 0;
  return (
    <div className="container mx-auto px-6 md:px-6 my-28 ">
      <div className="flex flex-col w-full items-center align-middle font-poppins  glassBox  rounded-lg shadow-lg  py-16 mx-auto">
        <h3 className="text-7xl font-poppins font-bold text-slate-900 ">
          <NumberAnimation end={visitCount} duration={10} />+
        </h3>
        <p className="text-base">Portfolio Visit</p>
      </div>
    </div>
  );
}

export default SiteVisits;
