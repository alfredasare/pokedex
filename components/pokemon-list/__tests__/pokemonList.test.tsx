import {render, screen} from "@testing-library/react";
import uuid from 'uuid';

import PokemonList from "../pokemonList";
import pokemonsData from "../../../mocks/pokemonData.json";
import {Pokemon} from "../../../types/pokemons";

jest.mock('uuid', () => {
    const base = '9134e286-6f71-427a-bf00-';
    let current = 100000000000;

    return {
        v4: () => {
            const uuid = base + current.toString();
            current++;

            return uuid;
        }
    }
});

const pokemons: Pokemon[] = pokemonsData.results;

describe('PokemonList', () => {
    test("renders list of pokemons", () => {
        render(<PokemonList pokemons={pokemons} offset={1} />);

        const pokemonCards = screen.getAllByRole("link");
        expect(pokemonCards.length).toBe(pokemons.length);
    })

    test("renders nothing when there are no pokemons", () => {
        render(<PokemonList pokemons={[]} offset={0} />);
        expect(screen.queryAllByRole("link")).toStrictEqual([]);
    });
});
