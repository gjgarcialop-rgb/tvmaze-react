//this function displays the main cast of a TV show.
// It takes a `cast` prop, which is an array of cast members, and renders them in a list.
function CastList({ cast }) {
    return (
        <div>
            <h3>Main Cast </h3>

            {cast.length === 0 ? (
                <p>No cast information available.</p>
            ) : (
                <ul>
                    {cast.map(( person ) => (
                        <li key={person.person.id}>
                            {person.person.name} 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CastList