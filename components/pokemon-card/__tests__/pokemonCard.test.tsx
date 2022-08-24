import {render, screen} from "@testing-library/react";
import PokemonCard from "../pokemonCard";

const pokemon = {
    id: 1,
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
}

describe("PokémonCard", () => {
    test("renders Pokémon card", () => {
        render(<PokemonCard id={1} pokemon={pokemon}/>);

        const cardLink = screen.getByRole("link") as HTMLAnchorElement;
        expect(cardLink.href).toBe(`http://localhost/pokemon/${pokemon.name}`);
    });

    test("Pokémon card renders image with alt", () => {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        render(<PokemonCard id={1} pokemon={pokemon}/>);

        const img = screen.getByRole("img") as HTMLImageElement;
        expect(img.src).toBe(url);
        expect(img.alt).toBe(pokemon.name);
    });

    test("Pokémon card renders name", () => {
        render(<PokemonCard id={1} pokemon={pokemon}/>);

        const h1 = screen.getByRole("heading") as HTMLHeadingElement;
        expect(h1.textContent).toBe(pokemon.name);
    });
})
