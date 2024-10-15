export function Form({ types, setSelectedType, setSearchTerm, selectedType }) {
    return (
        <>
            <form className="max-w-sm mx-left p-10">
                <select onChange={(e)=>setSelectedType(e.target.value)} value={selectedType} id="pokemon-type" name='type' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Select</option>
                    {
                        types?.map((type, index) => (
                            <option key={index} value={type?.name}>{type?.name}</option>
                        ))
                    }
                </select>
                <div className="flex justify-between mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input onChange={(e)=>setSearchTerm(e.target.value)} type='text' name='search' placeholder='Search...' className="focus:border-none focus: outline-none" />
                </div>
            </form>
        </>
    )
}