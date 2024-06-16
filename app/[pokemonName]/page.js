import { getPokemonByName } from "@/app/action"
import Image from "next/image"
import Link from "next/link"

export default async function Pokemon({ params }) {
    const pokemonInfo = await getPokemonByName(params?.pokemonName)
    return (
        <>
        <div className="p-3 text-black capitalize"><Link href='/' className="underline">Home</Link>-{pokemonInfo?.name}</div>
        <div className="flex justify-center items-center h-screen">
            <div className="p-[20px] max-w-[450px]">
                <div className="flex justify-center items-center bg-custom p-2 rounded-tl-[20px] rounded-tr-[20px]">
                    <Image src={pokemonInfo?.sprites?.other?.home?.front_default} alt='Pokemon Image' width={200} height={200} />
                </div>
                <div className="p-10 bg-custom-1 flex gap-2 flex-col rounded-bl-[20px] rounded-br-[20px]">
                <div>
                        <span className="font-bold">Name: </span>
                        <span>{pokemonInfo?.name}, </span>
                           
                    </div>
                    <div>
                        <span className="font-bold">Type: </span>
                        {
                            pokemonInfo?.types?.map(type => (
                                <span>{type?.type?.name}, </span>
                            ))
                        }
                    </div>
                    <div>
                        <span className="font-bold">Stats: </span>
                        {
                            pokemonInfo?.stats?.map(stats => (
                                <span>{stats?.stat?.name}, </span>
                            ))
                        }
                    </div>
                    <div>
                        <span className="font-bold">abilities: </span>
                        {
                            pokemonInfo?.abilities?.map(ability => (
                                <span>{ability?.ability?.name}, </span>
                            ))
                        }
                    </div>
                    <div>
                        <span className="font-bold">Some moves: </span>
                        {
                            pokemonInfo?.moves?.slice(0, 5)?.map(move => (
                                <span>{move?.move?.name}, </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}