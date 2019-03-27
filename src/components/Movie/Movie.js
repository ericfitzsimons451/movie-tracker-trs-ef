import React, { Component } from 'react'
import './Movie.scss'
import PropTypes from 'prop-types'
import { storeNewFavorite, removeFavoriteFromStore, storeCurrMovie } from '../../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user.email,
            errorMsg: ''
        }
    }

    validateUser = () => {
        if(this.state.user) {
            this.toggleFavorite()
        } else {
            this.setState({
                errorMsg: 'You must be signed in to add a favorite'
            }, () => alert(this.state.errorMsg))
        }
    }

    toggleFavorite = () => {
    let storedFavoriteIds = this.props.favorites.map(favorite => favorite.id)
    let alreadyFav = storedFavoriteIds.includes(this.props.id)
    if (!alreadyFav) {
            this.addFavorite()
        } else {
            this.removeFavorite()
        } 
}
    
    addFavorite = async () => {
        let movie = {
            id: this.props.id, 
            name: this.props.name, 
            poster_path: this.props.poster_path,
            release_date: this.props.release_date,
            vote_average: this.props.vote_average,
            overview: this.props.overview,
        }
        const url = 'http://localhost:3000/api/users/favorites/new'
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user_id: this.props.user.id,
                movie_id: this.props.id, 
                title: this.props.name, 
                poster_path: this.props.poster_path,
                release_date: this.props.release_date,
                vote_average: this.props.vote_average,
                overview: this.props.overview, 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.props.storeNewFavorite(movie)
    }

    removeFavorite = async () => {
        const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites/${this.props.id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.findItemToRemove()
    }

    findItemToRemove = () => {
    let storedFavoriteIds = this.props.favorites.map(favorite => favorite.id)
    let index = storedFavoriteIds.findIndex((id)=> {
            return id === this.props.id
        })
        this.props.removeFavoriteFromStore(index)
    }

    viewMovie = () => {
    const { history } = this.props
    let currMovie = {
        id: this.props.id, 
        name: this.props.name, 
        poster_path: this.props.poster_path,
        release_date: this.props.release_date,
        vote_average: this.props.vote_average,
        overview: this.props.overview,
    }
    this.props.storeCurrMovie(currMovie)
    history.push(`/movies/${this.props.id}`)
}

render() {
    let btn;
    let storedFavoriteIds = this.props.favorites.map(favorite => favorite.id)
    let alreadyFav = storedFavoriteIds.includes(this.props.id)
    
    if (alreadyFav) {
        btn = "Remove from Favorites"
    } else {
        btn = "Add to Favorites"
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster' onClick={this.viewMovie}>
                <img src={`http://image.tmdb.org/t/p/original/${this.props.poster_path}`} alt="poster" />
            </div>
            <div className='movie-details'>
                <h3 className="movie-title">{this.props.name}</h3>
                <h2 className='release-date'>Released: {this.props.release_date}</h2>
                <h2 className='vote-avg'>Rating: {this.props.vote_average}</h2>
                <p className='overview'>{this.props.overview}</p>
                <button onClick={this.validateUser}>{btn}</button>
            </div>
        </div>
    )
}
}


export const mapStateToProps = (state) => ({
    user: state.user,
    favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
    storeNewFavorite: (newFavorite) => dispatch(storeNewFavorite(newFavorite)),
    removeFavoriteFromStore: (index) => dispatch(removeFavoriteFromStore(index)),
    storeCurrMovie: (movie) => dispatch(storeCurrMovie(movie))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))

Movie.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.object
};
