import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [option, setOption] = useState("");
    const [idError, setIdError] = useState("");
    const [query,setQuery] = useState([])
    const [id, setId] = useState("");
    const navigate = useNavigate(); //The useNavigate hook returns a 
                                    //function that lets you navigate programmatically
    
    useEffect(()=> {
        axios.get(`https://swapi.dev/api/`)
        .then(response => {
            setQuery(Object.keys(response.data))
        }).catch(err => {
            console.log(err)
        })
    },[])
    
    const handleSubmit = (e) => {
        e.preventDefault();
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
                    {
                        query.map((q,i) => {
                            return (
                                <option key={i} value={q}>{q}</option>
                            )
                        })
                    }
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