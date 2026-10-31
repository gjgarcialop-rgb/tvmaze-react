// Gallery component for displaying TV shows from the TVmaze API
import {useState, useEffect} from 'react'
import SearchForm from '../components/SearchForm.jsx'
import ShowList from '../components/ShowList.jsx'

// this function shows the gallery of TV shows based on the search query
function Gallery() {
    const [query, setQuery] = useState('Friends')
    const [shows, setShows] = useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState("")

// this function searches for TV shows based on the user's query
    async function searchShows(search) {
        if(!search.trim()) {
            setError("Please enter a TV show name")
            setShows([])
            return
        }

        setLoading(true)
        setError('')

        try {
            const response = await fetch( 
                `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`
            )

            if (!response.ok) {
                throw new Error(
                    response.status === 429
                    ? 'Too many requests. Please try again later.'
                    : 'Unable to load shows :( '
                )
            }

            // parse the response data as JSON
            const data = await response.json()
            setShows(data.slice(0, 10))
        } catch (err) {
            setError(err.message)
            setShows([])
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        searchShows('Friends')
    }, [])

    // this function handles the search form submission
    function handleSearch(event) {
        event.preventDefault()
        searchShows(query)
    }

    return (
        <> 
        <h1> Tvmaze Show Gallery</h1>
        <SearchForm
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
        />
        <p> 
            Search term : {query} | Results: {shows.length}
        </p>
        
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && shows.length === 0 &&(
            <p>No results found for "{query}".</p>
        )}

        <ShowList shows = {shows} />

        </>
    )
}


export default Gallery