function SearchBar() {
    return (
        <div className="flex items-center p-4">

            <input className="flex-1" type="text" placeholder="🔍 Buscar cidade ..." />

            <button> 📍 </button>
            <button> 👤 </button>

        </div>
    );
}

export default SearchBar;