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