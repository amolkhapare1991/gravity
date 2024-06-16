'use server';

export async function getAllPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  return data;
}

export async function getPokemonDetails(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPokemonByName(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await response.json();
  return data;
}

export async function getPokemonTypes() {
  const response = await fetch(`https://pokeapi.co/api/v2/type`)
  const data = await response.json();
  return data;
}