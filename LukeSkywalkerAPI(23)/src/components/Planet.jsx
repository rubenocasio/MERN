import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Planet = ({ match }) => {
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        console.log(response.data)
        setPlanet(response.data);
      })
      .catch(error => {
        setError(true);
      });
  }, [id]);

  if (error) {
    return <p>These aren't the droids you're looking for</p>;
  }

  return (
    <div>
      {planet ? (
        <div>
          <h2>{planet.name}</h2>
          <h2>{planet.climate}</h2>
          <h2>{planet.population}</h2>
          <h2>{planet.terrain}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Planet;