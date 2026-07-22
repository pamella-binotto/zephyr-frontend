import { useEffect, useState } from "react";

function SearchBar({ city, setCity }) {

    const [search, setSearch] = useState(city);

    function handleSearch() {
        setCity(search);
    }

    useEffect (() => {
        setSearch(city);
    }, [city])

    function handleKeyDown(e) {
        if (event.key === "Enter"){
            handleSearch();
        }
    }


    return (

    <div className="
    max-w-5xl mx-auto mt-6 px-4">

        <div className="flex items-center bg-white rounded-full
        shadow-lg px-3 py-2">

            <div className="flex-1">

                <button onClick={handleSearch} className="text-xl px-2">🔍</button>
                <input
                className="flex-1 outline-none px-2 text-gray-700"
                    type="text"
                    placeholder=" Search city ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown} />

            </div>

            <button className="text-xl px-2"> 📍 </button>
            <button className="text-xl px-2"> 👤 </button>

        </div>
    </div>    
    );
}

export default SearchBar;