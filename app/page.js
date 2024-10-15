'use client'
import { useState } from 'react'; 
import { usePokemonSearch, usePokemonTypes } from "@/hooks/usePokemon";
import { PokemonList } from '@/components/ui/pokemonList';
import { Form } from '@/components/ui/Form';

export default function Home() {
  const types = usePokemonTypes();
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const {pokemonList} = usePokemonSearch(selectedType, searchTerm);

  console.log(333, pokemonList)

  return (
    <main>
      <Form types={types} setSelectedType={setSelectedType} setSearchTerm={setSearchTerm}/>
      {pokemonList && <PokemonList list={pokemonList}/>}
    </main>
  );
}
