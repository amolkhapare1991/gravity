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

  return (
    <main>
      <Form types={types} setSelectedType={setSelectedType} setSearchTerm={setSearchTerm} selectedType={selectedType}/>
      {pokemonList && <PokemonList list={pokemonList}/>}
    </main>
  );
}
