import React from 'react'

const PersonCard = (props) => {
  return (
    <div>
        <h1>{props.fn} {props.ln}</h1>
        <h3>Age: {props.age}</h3>
        <h3>Hair Color: {props.hc}</h3>
    </div>
  )
}

export default PersonCard