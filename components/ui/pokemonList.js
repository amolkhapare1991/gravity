import { PokemonCard } from "./pokemonCard";

export function PokemonList({ list }) {
    return (

        <div className="grid grid-cols-custom-fit gap-50 p-4">
            {list?.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} />)}
        </div>

    )
}