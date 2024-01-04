import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Character = ({ match }) => {
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(false);
    const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        setError(true);
      });
  }, [id]);

  if (error) {
    return <p>These aren't the droids you're looking for</p>;
    // Include Obi-Wan Kenobi image here
  }

  return (
    <div>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          {/* Render other character attributes here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Character;
