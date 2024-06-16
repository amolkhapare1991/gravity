'use client'

import Image from "next/image";
import { useState } from "react";

export function Form({ types, setData }) {
    const [searchKey, setSearchKey] = useState()
    const handleType = async (e) => {
        try {
            const response = await fetch(e.target.value);
            const pokemonList = await response.json()

            const pokemonDetailsResponses = await Promise.all(
                pokemonList.pokemon?.map(pokemon => fetch(pokemon?.pokemon?.url))
            );

            const pokemonDetails = await Promise.all(
                pokemonDetailsResponses?.map(details => details.json())
            );
            const formattedPokemonData = pokemonDetails?.map(details => ({
                name: details?.name,
                image: details?.sprites?.other?.home?.front_default
            }));
            
            setData(formattedPokemonData);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    }
    const handleSearch = async () => {
        if (searchKey) {
            try {
                const searchQuery = searchKey.toLowerCase()
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const pokemonDetails = await response.json()
                const formattedPokemonData = {
                    name: pokemonDetails?.name,
                    image: pokemonDetails.sprites?.other?.home?.front_default,
                };

                setData([formattedPokemonData]);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        }
    };
    return (
        <>
            <form className="max-w-sm mx-left p-10">
                <select onChange={handleType} id="pokemon-type" name='type' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select</option>
                    {
                        types?.results?.map((type, index) => (
                            <option key={index} value={type?.url}>{type?.name}</option>
                        ))
                    }
                </select>
                <div className="flex justify-between mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input onChange={(e)=>setSearchKey(e.target.value)} type='text' name='search' placeholder='Search...' className="focus:border-none focus: outline-none" />
                <div className="w-5 h-5 cursor-pointer" onClick={handleSearch}><Image src='/search.png' alt='search' width={40} height={40}/></div>
                </div>
            </form>
        </>
    )
}