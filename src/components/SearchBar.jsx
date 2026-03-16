function SearchBar({ search, setSearch }) {

    return (

        <div className="search-bar mb-4">
            <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
        </div>

    )

}

export default SearchBar