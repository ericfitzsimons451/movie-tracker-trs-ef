import React from 'react'
import PropTypes from 'prop-types'

const Movie = (props) => {
    // console.log('movie', movie)
    const {movie} = this.props; 

    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.object
}

export default Movie