import Link from "next/link"
import Image from "next/image"

export function PokemonCard({ pokemon }) {
    return (
        <div className="rounded-tl-[20px] rounded-tr-[20px]">
            <div className="flex justify-center items-center bg-white p-2 rounded-tl-[20px] rounded-tr-[20px]">
                <Image src={pokemon?.image} alt='Pokemon Image' width={150} height={150} />
            </div>
            <div className="bg-gray-100 rounded-bl-[20px] rounded-br-[20px] flex flex-col gap-10 p-6">
                <h3 className="font-bold capitalize">{pokemon?.name}</h3>
                <Link className="text-sky-500 flex gap-2 align-center hover:gap-4" href={pokemon?.name}>Details
                    <Image src='/rightArrowBlue.png' alt="rightArrow" width={16} height={16}></Image>
                </Link>
            </div>
        </div>
    )
}