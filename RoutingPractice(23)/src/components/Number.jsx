import React from 'react';
import { useParams } from 'react-router-dom';

function Number() {
  let { number } = useParams();

  return isNaN(+number) ? <h1>Not a Number</h1> : <h1>{number}</h1>;
}

export default Number;
