import React from 'react'
import './Movie.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



const Movie = ({user, id, name, poster_path, release_date, vote_average, overview}) => {
  
    const addFavorite = async () => {
        const url = 'http://localhost:3000/api/users/favorites/new'
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                movie_id: id, 
                title: name, 
                poster_path,
                release_date,
                vote_average,
                overview, 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // const movieToFavorite = {
        //         id,
        //         name,
        //         poster_path,
        //         release_date,
        //         vote_average,
        //         overview, 
        // }
        // console.log(movieToFavorite)
        // this.props.storeFavorite(movieToFavorite)
    }
    
    return (
        
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt="poster" />
            </div>
            <div className='movie-details'>
                <h3 className="movie-title">{name}</h3>
                <h2 className='release-date'>Released: {release_date}</h2>
                <h2 className='vote-avg'>Rating: {vote_average}</h2>
                <p className='overview'>{overview}</p>
                <button onClick={addFavorite}>Add To Favorites</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Movie)

Movie.propTypes = {
    movie: PropTypes.object,
    user: PropTypes.object
}