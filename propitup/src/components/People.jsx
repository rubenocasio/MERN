import React from 'react'

const people = (props) => {
    return (
        <div>
            <h1>Here are my family members:</h1>
            <h2>{props.firstName} {props.lastName}</h2>
            <h3>{props.age}</h3>
            <h3>{props.hairColor}</h3>
        </div>
    );
}

export default people;