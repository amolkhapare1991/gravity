'use client'
import { useEffect, useState } from "react";
import { getPokemonTypes } from "./action";
import Pokemon from "@/components/pokemon";

export default function Home() {
  const [data, setData] = useState([])
  const [types, setTypes] = useState()

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonTypes = await getPokemonTypes();
        setTypes(pokemonTypes)
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
        const pokemonList = await response.json()

        const pokemonDetailsResponses = await Promise.all(
          pokemonList.results.map(pokemon => fetch(pokemon.url))
        );

        const pokemonDetails = await Promise.all(
          pokemonDetailsResponses.map(details => details.json())
        );
        
        const formattedPokemonData = pokemonDetails?.map(details => ({
          name: details.name,
          image: details?.sprites?.other?.home?.front_default
        }));
      
        setData(formattedPokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);
   
  return (
    <main>
      <Pokemon list={data} types={types} setData={setData}/>
    </main>
  );
}
