import { useEffect, useState } from "react";

function SearchBar({ city, setCity }) {

    const [search, setSearch] = useState(city);

    function handleSearch() {
        setCity(search);
    }

    useEffect (() => {
        setSearch(city);
    }, [city])


    return (
        <div className="flex items-center p-4">

            <div className="flex-1">

                <button onClick={handleSearch}>🔍</button>
                <input
                    type="text"
                    placeholder="🔍 Buscar cidade ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

            </div>

            <button> 📍 </button>
            <button> 👤 </button>

        </div>
    );
}

export default SearchBar;