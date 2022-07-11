import React, { useState, useEffect } from "react";

const Pokies = () => {
    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        console.log("Yo!")
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then((response) => {
            return response.json();
        })
            .then((response) => {
                setPokemon(response.results)
            console.log(response);
        })
            .catch((err) => {
            console.log(err);
        });
})

    return (
        <div>
            {pokemon.map((p, i) => {
                return (
                    <div key={i}>
                        {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                    </div>
                );
            })}
            
        </div>
    );
};

export default Pokies;