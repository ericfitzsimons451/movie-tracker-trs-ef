import React from 'react'
import './Movie.scss'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

const Movie = ({ name, poster_path, release_date, vote_average, overview }) => {
    return (
        <div className='movie-card'>
            <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt="poster" />
            <h3 className="movie-title">{name}</h3>
            <h3>Released: {release_date}</h3>
            <h3>Vote Average: {vote_average}</h3>
            <p>{overview}</p>
            <button>Add To Favorites</button>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.object
}

// const mapStateToProps = (state) => ({
//     movies: state.movies
// })

// export default connect(mapStateToProps)(Movie)

export default Movie