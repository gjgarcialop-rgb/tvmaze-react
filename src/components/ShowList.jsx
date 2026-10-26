// this component displays a list of TV shows using the ShowCard component
import ShowCard from './ShowCard.jsx'

// this function maps over the shows array and renders a ShowCard for each show
function ShowList({ shows }) {
    return (
        <div className="show-list">
            {shows.map ((result) => (
                <ShowCard key={result.show.id} show={result.show} />
            ))}
        </div>
    )
}

export default ShowList