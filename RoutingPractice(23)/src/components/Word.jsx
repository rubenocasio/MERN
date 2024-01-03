import React from 'react';
import { useParams } from 'react-router-dom';

function Word() {
  let { word } = useParams();

  return <h1>{word}</h1>;
}

export default Word;
