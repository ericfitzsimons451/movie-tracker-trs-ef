import React from 'react' 
import './AllMovies.scss'
import Movie from '../../components/Movie/Movie'
import PropTypes from 'prop-types'

export const AllMovies = ( {movies} ) => {

    const allMovies = movies.map((movie) => {
        return (
            <Movie key={movie.id} {...movie} />
        )
    })
    return (
        <div className='movie-display-container'>
            { allMovies }
        </div>
    )
}

export default AllMovies

AllMovies.propTypes = {
    movies: PropTypes.array,
}