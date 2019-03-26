import React from 'react'
import './Movie.scss'
import PropTypes from 'prop-types'
import { storeNewFavorite, removeFavoriteFromStore } from '../../actions'
import { connect } from 'react-redux'

export const Movie = (props) => {

    let movie = {
        id: props.id, 
        name: props.name, 
        poster_path: props.poster_path,
        release_date: props.release_date,
        vote_average: props.vote_average,
        overview: props.overview,
    }
    
    let btn;
    let storedFavoriteIds = props.favorites.map(favorite => favorite.id) 
    let alreadyFav = storedFavoriteIds.includes(movie.id)
    
    if (alreadyFav) {
        btn = "Remove from Favorites"
    } else {
        btn = "Add to Favorites"
    }

    const toggleFavorite = () => {
        if (!alreadyFav) {
            addFavorite()
        } else {
            removeFavorite()
        }
    }
    
    const addFavorite = async () => {
        const url = 'http://localhost:3000/api/users/favorites/new'
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user_id: props.user.id,
                movie_id: props.id, 
                title: props.name, 
                poster_path: props.poster_path,
                release_date: props.release_date,
                vote_average: props.vote_average,
                overview: props.overview, 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        props.storeNewFavorite(movie)
    }

    const removeFavorite = async () => {
        const url = `http://localhost:3000/api/users/${props.user.id}/favorites/${props.id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        findItemToRemove()
        // removeFavoriteFromStore(movie)
    }

    const findItemToRemove = () => {
        let index = storedFavoriteIds.findIndex((id)=> {
            return id === movie.id
        })
        props.removeFavoriteFromStore(index)
    }

    return (

        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`http://image.tmdb.org/t/p/original/${props.poster_path}`} alt="poster" />
            </div>
            <div className='movie-details'>
                <h3 className="movie-title">{props.name}</h3>
                <h2 className='release-date'>Released: {props.release_date}</h2>
                <h2 className='vote-avg'>Rating: {props.vote_average}</h2>
                <p className='overview'>{props.overview}</p>
                <button onClick={toggleFavorite}>{btn}</button>
            </div>
        </div>
    )
}


export const mapStateToProps = (state) => ({
    user: state.user,
    favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
    storeNewFavorite: (newFavorite) => dispatch(storeNewFavorite(newFavorite)),
    removeFavoriteFromStore: (index) => dispatch(removeFavoriteFromStore(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)

Movie.propTypes = {
    movie: PropTypes.object,
    user: PropTypes.object
}