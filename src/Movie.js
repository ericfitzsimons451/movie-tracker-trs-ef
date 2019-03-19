import React from 'react'

const Movie = (movie) => {
    console.log('movie', movie)

    return (
        <div>
            <h1>{movie.movie.title}</h1>
        </div>
    )
}

export default Movie