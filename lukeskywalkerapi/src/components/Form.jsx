import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [option, setOption] = useState("");
    const [idError, setIdError] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate(); //The useNavigate hook returns a 
                                    //function that lets you navigate programmatically
    

    const handleSubmit = (e) => {
      // setIdError("");
        e.preventDefault();//method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
        const newSearch = { option: option, id: id };
        if (
        newSearch.id.length < 1 ||
        newSearch.id < 1 ||
        newSearch.option.length < 1
        ) {
            setIdError("Please choose a category & positive number please!");
        } else {
            navigate(`/${option}/${id}`);
        }
    }
    return (
        <div>
            <div>
            {idError ? <p style={{color:'red'}}> { idError } </p> : ''}
                <form onSubmit={ handleSubmit }>
                    <label>Choose Category  </label>
                    <select className="search-box" defaultValue="" value={option} onChange={e => setOption(e.target.value)}>
                        <option value="" disabled>Select an option</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="films">Films</option>
                    </select>
                    <label>ID: </label>
                    <input className="id-box" type="text" onChange={ e => setId(e.target.value)} value={id}/>
                    <button className="search-btn" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Form;