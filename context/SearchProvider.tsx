import React, {createContext, useState, useEffect} from "react";
import {Pokemon, PokemonData} from "../types/pokemons";
import axios from "axios";

export const SearchContext = createContext({
    searchQuery: "",
    filteredResults: [] as Pokemon[],
    loading: false,
    error: null,
    handleChange: (_e: React.ChangeEvent<HTMLInputElement>): void => {},
    handleSubmit: (_e: React.SyntheticEvent): void => {}
});

const SearchProvider = ({children}: {children: React.ReactChild}) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState<PokemonData["results"]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setSearchQuery(value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }

    const fetchPokemons = async (query: string) => {
        try {
            setLoading(true);
            const searchResults = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
            const filtered: Promise<Pokemon>[] = searchResults.data.results
                .filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase()))
                .map(async (pokemon: Pokemon) => {
                    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    const {id}: {id:number} = await response.data;
                    return {
                        ...pokemon,
                        id
                    };
                });

            Promise.all(filtered).then(values => {
                setFilteredResults(values);
            });
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (searchQuery.length >= 3) {
            fetchPokemons(searchQuery);
        }
    }, [searchQuery]);

    return (
        <SearchContext.Provider value={{
            searchQuery,
            filteredResults,
            loading,
            error,
            handleChange,
            handleSubmit
        }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;