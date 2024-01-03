import React from 'react';
import { useParams } from 'react-router-dom';

function StyledWord() {
  let { word, textColor, bgColor } = useParams();

  const style = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return <h1 style={style}>{word}</h1>;
}

export default StyledWord;
