import React, {FC, useContext} from "react";
import {v4} from "uuid";
import PokemonCard from "../pokemon-card/pokemonCard";
import {SearchContext} from "../../context/SearchProvider";

const Search: FC = () => {
    const {searchQuery, handleSubmit, handleChange, filteredResults} = useContext(SearchContext);

    return (
        <div>
            <form onSubmit={handleSubmit} className="pt-2 relative mx-auto text-gray-600 w-1/2 mt-8">
                <input
                    className="border-2 border-gray-300 bg-white h-12 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search for Pokemons"
                    onChange={handleChange}
                    value={searchQuery}
                />
                <button type="submit" className="absolute right-0 top-1 mt-5 mr-4">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966"
                         xmlSpace="preserve">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
            </form>

            {
                searchQuery.length >= 3 &&
                <div>
                    <h1 className="text-center mt-8 text-lg">Search Results for "{searchQuery}"</h1>
                </div>
            }

            {
                searchQuery.length >= 3 &&
                <div className="grid grid-cols-4 gap-10 mt-16">
                    {
                        filteredResults.map((pokemon) => (
                            <PokemonCard key={v4()} id={pokemon.id} pokemon={pokemon}/>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Search;