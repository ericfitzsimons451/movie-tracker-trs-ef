import React from 'react'
import PropTypes from 'prop-types'

const Movie = (movie) => {
    console.log('movie', movie)

    return (
        <div>
            <h1>{movie.movie.title}</h1>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.object
}

export default Movie