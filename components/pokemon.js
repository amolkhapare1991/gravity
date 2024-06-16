import { Form } from "@/components/ui/Form";
import { PokemonList } from "@/components/ui/pokemonList";

export default function Pokemon({list, types, setData}) {
  return (
    <>
      <Form types={types} setData={setData}/>
      {list && <PokemonList list={list}/>}
    </>
  );
}
