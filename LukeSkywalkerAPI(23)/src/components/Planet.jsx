import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planet = ({ match }) => {
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planet/${match.params.id}`)
      .then(response => {
        setPlanet(response.data);
      })
      .catch(error => {
        setError(true);
      });
  }, [match.params.id]);

  if (error) {
    return <p>These aren't the droids you're looking for</p>;
    // Include Obi-Wan Kenobi image here
  }

  return (
    <div>
      {planet ? (
        <div>
          <h2>{planet.name}</h2>
          {/* Render other character attributes here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Planet;