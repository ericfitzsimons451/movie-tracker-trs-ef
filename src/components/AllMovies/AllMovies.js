import React from 'react' 
import Movie from '../../components/Movie/Movie'
import PropTypes from 'prop-types'

const AllMovies = ( {movies} ) => {

    const allMovies = movies.map((movie) => {
        return (
            <Movie key={movie.id} movie={movie} />
        )
    })

    return (
        <div className='movie-display-container'>
            { allMovies }
        </div>
    )
}

AllMovies.propTypes = {
    movies: PropTypes.array
}

export default AllMovies