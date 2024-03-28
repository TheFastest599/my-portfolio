import React, { useState, useContext } from 'react';
import globalContext from '../context/global/globalContext';

function Filter() {
  const gcontext = useContext(globalContext);
  const { user } = gcontext;

  const technologies = user.skills;

  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleCheckboxChange = event => {
    const { value } = event.target;
    setSelectedTechnologies(prevState => {
      if (prevState.includes(value)) {
        return prevState.filter(tech => tech !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  return (
    <div>
      {technologies.map((technology, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={technology}
            onChange={handleCheckboxChange}
          />
          <label>{technology}</label>
        </div>
      ))}

      <h2>Selected Technologies:</h2>
      <ul>
        {selectedTechnologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
