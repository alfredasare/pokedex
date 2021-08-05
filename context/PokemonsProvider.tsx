import React, {createContext, useState, useEffect} from "react";
import {PokemonData} from "../types/pokemons";
import {getData} from "../utils/getData";

export const PokemonsContext = createContext({
    pokemonData: {} as PokemonData,
    loading: false,
    error: null,
    nextPage: (): void => {},
    previousPage: (): void => {},
    offset: 0
});

const PokemonsProvider = ({children}: {children: React.ReactChild}) => {
    const [pokemonData, setPokemonData] = useState<PokemonData>({
        count: 0,
        next: null,
        previous: null,
        results: []
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    const limit = 16;

    useEffect(() => {
        async function fetchPokemons() {
            setLoading(true);
            try {
                await getData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, setPokemonData);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemons();
    }, [offset]);

    const nextPage = () => {
        setOffset(offset + limit);
    }

    const previousPage = () => {
        setOffset(offset - limit);
    };

    return (
        <PokemonsContext.Provider value={{
            pokemonData,
            loading,
            error,
            nextPage,
            previousPage,
            offset
        }}>
            {children}
        </PokemonsContext.Provider>
    );
};

export default PokemonsProvider;