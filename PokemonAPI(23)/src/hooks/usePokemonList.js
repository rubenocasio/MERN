//I wanted to move the call to a seperate component possibly to be rendered and return on different components
//I wanted to have access to all of the API data as well and as you can see I'm grabbing sprites baby!
import { useState, useEffect } from 'react';
import axios from 'axios';

const usePokemonList = (url) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        axios.get(url)
            .then(async response => {
                //More Promise basics: https://javascript.info/promise-basics
                const pokemonData = await Promise.all(response.data.results.map(async pokemon => {
                    const detailedInfo = await axios.get(pokemon.url);
                    return {
                        name: pokemon.name,
                        image: detailedInfo.data.sprites.front_default
                    };
                }));
                setPokemonList(pokemonData);
            })
            .catch(error => setError(error))
            //Attaches a callback that is invoked when the
            //Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.
            .finally(() => setIsLoading(false));
    }, [url]);

    return { pokemonList, error, isLoading };
};

export default usePokemonList;
