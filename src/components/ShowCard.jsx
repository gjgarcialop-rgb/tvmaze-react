import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { removeHTML, formatDate } from '../script.js'
import CastList from './CastList.jsx'

//this function allows us to display detailed information about a TV show.
// This component displays the show's image, summary, premiere date, last updated date, genres, rating, and cast.
function ShowCard({ show }) {
    const [cast, setCast] = useState([])

    useEffect(() => {
        async function getCast() {
            try{
                const response = await fetch(
                    `https://api.tvmaze.com/shows/${show.id}/cast`
                )

                if (response.ok) {
                    const data = await response.json()
                    setCast(data.slice(0,5))
                }
            } catch {
                setCast([])
            }
        }
        getCast()
    }, [show.id])
    return (
        <div className="show-card">
            {show.image &&(
                <img src={show.image.medium} alt={show.name} />
            )}
            <h2>
                <Link to={`/show/${show.id}`}>{show.name}</Link>
            </h2>

            <p> {removeHTML(show.summary)} </p>
            <p> Premiered: {show.premiered || '' }</p>
            <p> Last updated: {formatDate(show.updated) || 'None listed' }</p>
            <p> Genres: {show.genres.join(', ') || 'None listed'}</p>
            <p> Rating: {show.rating.average || 'Not rated'}</p>

            <CastList cast ={cast} />

            <a href={show.url} target= "_blank" rel="noreferrer">
                View on TVmaze
            </a>
        </div>
    )
}

export default ShowCard