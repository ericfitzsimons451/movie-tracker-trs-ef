import React from 'react'
import './Movie.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Movie = ({ name, poster_path, release_date, vote_average, overview }) => {
    return (
        <div className='movie-card'>
            <h3>{name}</h3>
            <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt="poster image" />
            <h3>Released: {release_date}</h3>
            <h3>Vote Average: {vote_average}</h3>
            <p>Overview: {overview}</p>
            <button>Add To Favorites</button>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.object
}

const mapStateToProps = (state) => ({
    movies: state.movies
})

export default connect(mapStateToProps)(Movie)