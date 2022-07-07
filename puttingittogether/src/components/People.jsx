import React, {useState} from 'react'


const People = (props) => {
    const [age, setAge] = useState(props.age);

    const toggleAge = () => {setAge(age + 1)}

    return (
        <div>
            <h1>Here are my family members:</h1>
            <h2>{props.firstName} {props.lastName}</h2>
            <h3>{age}</h3>
            <h3>{props.hairColor}</h3>

            {/* <button onClick={() => setAge(age + 1)}>Happy Birthday</button> */}
                
            <button onClick={toggleAge}>Happy Birthday</button>
            
        </div>
    );
}

export default People;