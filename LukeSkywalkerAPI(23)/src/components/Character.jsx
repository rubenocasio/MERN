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
        console.log(response.data)
        setCharacter(response.data);
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
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <h2>{character.birth_year}</h2>
          <h2>{character.eye_color}</h2>
          <h2>{character.mass}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Character;
