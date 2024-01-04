import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Constants
const API_URL = "https://swapi.dev/api/";

// Custom Hook for fetching data
const useApiData = () => {
    const [query, setQuery] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setQuery(Object.keys(response.data))
            })
            .catch(err => console.error("API Error:", err));
    }, []);

    return query;
};

const SearchForm = () => {
    const [option, setOption] = useState("");
    const [idError, setIdError] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const query = useApiData();

    const validateInput = (option, id) => {
        if (!option || id <= 0) {
            setIdError("Please choose a category & positive number!");
            return false;
        }
        setIdError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInput(option, id)) {
            navigate(`/${option}/${id}`);
        }
    };

    return (
        <div>
            <div>
                {idError && <p style={{ color: 'red' }}>{idError}</p>}
                <form onSubmit={handleSubmit}>
                    <label>Choose Category</label>
                    <select className="search-box" value={option} onChange={e => setOption(e.target.value)}>
                        <option>Placeholder</option>
                        {query.map((q, i) => (
                            <option key={i} value={q}>{q}</option>
                        ))}
                    </select>
                    <label>ID:</label>
                    <input className="id-box" type="text" value={id} onChange={e => setId(e.target.value)} />
                    <button className="search-btn" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;
