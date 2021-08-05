# Pokedex
## Stack

* NextJS
* Tailwind
* TypeScript

## Running the application

First install the dependencies:
```bash
npm install
#or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

# The Solution

## Project Structure

* **pages**: Contains application's pages.
* **public**: Used to store application's public files. e.g images
* **components**: Individual components used to create pages.
* **types**: Types and interfaces used in the application.
* **utils**: Reusable utility functions.
* **context**: Context files used for state management.

## Walkthrough
There are two pages in this application: The homepage `pages/index.tsx` and the details page for each
pokemon `pages/pokemon/[pokemonName].tsx`.

### Homepage
The homepage contains a header, a search section and a list of cards displaying 16 Pokemons per page,
all styled with tailwind CSS. All the Pokemon data available is made available with the help
`PokemonsProvider.tsx` file in the context folder.

###`PokemonsProvider.tsx`
This file contains the logic for fetching and handling Pokemon data.
* The `loading` and `error` states are used to check the state of our asynchronous process of fetching the Pokemon data.
* Within the file is a `useEffect` hook that initiates the fetching of Pokemon data. Within this `useEffect` is an asynchronous `fetchPokemons` function
that actually does the data fetching. The function is called within the same `useEffect`. An async function was used
to prevent the use of `.then() and .catch()` chaining. This was a personal preference.
* Within the `fetchPokemons` function is an asynchronous `getData` utility function that fetches Pokemon data and sets
the `pokemonData` state.
* The `limit`, `offset`, `nextPage()` and `previousPage()` are used to limit the amount of data being fetched per page.
* `limit` and `offset` are used in the request url
* `nextPage()` and `previousPage()` are used to increment and decrement the offset in order to change the pages. They
are called on the homepage when the next and previous buttons are clicked.


### Search
Comprises a search bar and a list of search results displayed in a grid. The search is controlled by the
`SearchProvider.tsx` file in the context folder. Unlike the homepage where data could be fetched in bits,
the API did not provide an efficient way to do a search so all Pokemons before filtering and mapping.

### `SearchProvider.tsx`
* Also has `loading` and `error` states to track data fetching states.
* `handleChange` is used to check number of inputted characters before initiating search.
* `fetchPokemons()` function accepts the search query, fetches Pokemon data, filters the data and then maps over
the filtered data to get the results as an array of Promises since the function used in `.map()` was an asynchronous
function. Once again, a personal preference. `.then()` could be used here. The array of promises is resolved with
`Promise.all()`. The state for the final results is set with `setFilteredResults`.
* `fetchPokemons()` function is used in a `useEffect` hook. Within the hook, the number of characters in the string
is checked before initiating the search. The search begins when 3 characters are inputted.
* In the event that there are results, the list of cards for the results replaces the default list of cards displayed
by the homepage.

### Pokemon Details
Has a card that displays the Pokemon's details. The data on this page was made available with the help of the
`PokemonDetailsProvider.tsx` file in the context folder which works like the other 2 context providers.

### `PokemonDetailsProvider.tsx`
* Has `isLoading` and `error` states to track data fetching states.
* Has `fetchPokemonDetails()` function to fetch the details of a Pokemon using the Pokemon's name. The pokemon's name
is passed as an argument to the function. The name of the Pokemon whose data we need is extracted from the url using
the `useRouter` hook.
* The actual data fetching happens on the `[pokemonName].tsx` page. The `pokemonName` extracted using the `useRouter`
is not immediately available when the page loads. So within a useEffect hook, we check if the pokemonName is defined
before calling the `fetchPokemonDetails()` with the `pokemonName`.


## Improvements that could be made
Due to time constraints, some decisions were made that can be improved to give the application a better feel.

# Responsiveness
The web application is not responsive on smaller devices. This can be fixed by implementing media breakpoints for
the utility classes provided by tailwind.

# Search
* Pagination can be added for the search in the event where we have a lot of result items.
* All 1118 Pokemons are fetched for every search request which is not data efficient. Since no way was found for
doing a search without fetching all Pokemons, caching could be implemented to fetch the data just once. Subsequent
requests could then reach out to the cache instead of re-fetching the data.
* The filtering of data could be done with more efficient packages like lodash.