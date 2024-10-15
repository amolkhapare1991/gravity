'use client'
import { useState, useEffect } from 'react';

export const usePokemonTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      setTypes(data.results);
    };
    fetchTypes();
  }, []);

  return types;
};

export const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
  
    useEffect(() => {
        const fetchPokemonData = async () => {
          try {
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
          
            setPokemonList(formattedPokemonData);
          } catch (error) {
            console.error('Error fetching Pokémon data:', error);
          }
        };
    
        fetchPokemonData();
      }, []);
  
    return {pokemonList, setPokemonList};
  };


  export const usePokemonSearch = (type = '', query = '') => {
    const [pokemonList, setPokemonList] = useState([]);
  
    useEffect(() => {
      const fetchPokemon = async () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=500';
        if (type) {
          url = `https://pokeapi.co/api/v2/type/${type}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        if(type){
            const pokemonDetailsResponses = await Promise.all(
                data?.pokemon?.map(p => fetch(p.pokemon.url))
              );
           
              const pokemonDetails = await Promise.all(
                pokemonDetailsResponses.map(details => details.json())
              );
        
              const formattedPokemonData = pokemonDetails?.map(details => ({
                name: details.name,
                image: details?.sprites?.other?.home?.front_default
              }));
        
            const filteredPokemon = query
              ? formattedPokemonData.filter(p => p.name.includes(query.toLowerCase()))
              : formattedPokemonData;
            
            setPokemonList(filteredPokemon);
        } else {
        const pokemonDetailsResponses = await Promise.all(
            data?.results?.map(pokemon => fetch(pokemon.url))
          );
       
          const pokemonDetails = await Promise.all(
            pokemonDetailsResponses.map(details => details.json())
          );
    
          const formattedPokemonData = pokemonDetails?.map(details => ({
            name: details.name,
            image: details?.sprites?.other?.home?.front_default
          }));

        // Filter by name if a search query is provided
        const filteredPokemon = query
          ? formattedPokemonData.filter(p => p.name.includes(query.toLowerCase()))
          : formattedPokemonData;
        
        setPokemonList(filteredPokemon);
        }
      };
      fetchPokemon();
    }, [type, query]);
  
    return {pokemonList};
  };