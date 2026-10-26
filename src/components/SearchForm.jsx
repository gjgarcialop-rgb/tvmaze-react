// this function holds the text in the search box using a 
// query and changes and submits while using setQuery and onSearch.
function SearchForm({ query, setQuery, onSearch }) {
    return (
        <form onSubmit={onSearch}>
            <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for TV shows..."
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;