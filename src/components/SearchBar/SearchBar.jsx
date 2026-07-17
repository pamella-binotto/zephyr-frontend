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
        <div className="flex items-center p-4">

            <div className="flex-1">

                <button onClick={handleSearch}>🔍</button>
                <input
                    type="text"
                    placeholder="🔍 Buscar cidade ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown} />

            </div>

            <button> 📍 </button>
            <button> 👤 </button>

        </div>
    );
}

export default SearchBar;