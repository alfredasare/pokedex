import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import {AppProps} from "next/app";
import SearchProvider from "../context/SearchProvider";
import PokemonsProvider from "../context/PokemonsProvider";
import PokemonDetailsProvider from "../context/PokemonDetailsProvider";

function MyApp({Component, pageProps}: AppProps) {
  return (
      <PokemonsProvider>
          <PokemonDetailsProvider>
              <SearchProvider>
                  <Component {...pageProps} />
              </SearchProvider>
          </PokemonDetailsProvider>
      </PokemonsProvider>
  );
}

export default MyApp
