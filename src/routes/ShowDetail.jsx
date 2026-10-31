import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { removeHTML, formatDate } from '../script.js'

function ShowDetail() {
    const { id } = useParams()
    const [show, setShow] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cast, setCast] = useState([])

    useEffect(() => {
        async function getShow() {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
                if (!response.ok) {
                    throw new Error('Not available')

                }
                const data = await response.json()
                setShow(data)

                const castResponse = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)

                if (castResponse.ok) {
                    const castData = await castResponse.json()
                    setCast(castData.slice(0, 15))
                }
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getShow()
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error || !show) {
        return (
            <>
                <p> {error || 'Show not found'} </p>
                <Link to="/">Back to Home</Link>
            </>
        )
    }

    return (
        <div className="show-detail">
            <Link to="/">Back to Home</Link>
            <h1>{show.name}</h1>
            {show.image && (<img src={show.image.original || show.image.medium} alt={show.name} />
            )}

            <p>{removeHTML(show.summary)}</p>
            <p>Premiered: {show.premiered || 'Unknown'}</p>
            <p>Status: {show.status || 'Unknown'}</p>
            <p>Genres: {show.genres.join(', ') || 'None listed'}</p>
            <p>Rating: {show.rating.average || 'Not rated'}</p>
            <p>Last updated: {formatDate(show.updated)}</p>
            <p>
                Network or Web Channel: {''}
                {show.network?.name || show.webChannel?.name || 'Unknown'}
            </p>
            <h2>Cast</h2>
            {cast.length === 0 ? (
                <p>No cast information available</p>
            ) : (
                <ul>
                    {cast.map(person => (
                        <li key={person.person.id}>
                            {person.person.name} as {person.character.name}
                        </li>
                    ))}
                </ul>
            )}
            <a href={show.url} target="_blank" rel="noopener noreferrer">
                More Info
            </a>
        </div>
    )
}

export default ShowDetail