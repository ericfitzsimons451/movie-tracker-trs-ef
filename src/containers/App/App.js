import React, { Component } from 'react';
import './App.scss'
import  allPurposeFetch  from '../../allPurposeFetch';
import apiKey from '../../APIkey.js'
import { Route } from 'react-router-dom'
import AllMovies from '../../components/AllMovies/AllMovies' 
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import Login from '../../containers/Login/Login'
import { storeMovies, storeUsers }  from '../../actions/index'
import { connect } from 'react-redux'

export class App extends Component {

  componentDidMount() {
    this.fetchMovies()
    this.fetchAllUsers()
  }

  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const movies = await allPurposeFetch(url)
    const cleanedMovies = this.cleanMovies(movies.results)
    this.props.storeMovies(cleanedMovies)
    
  }

  cleanMovies = (movies) => {
    const cleanedMovies = movies.map(movie => ({
      name: movie.title,
      id: movie.id,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview
    }))
    return cleanedMovies;
  }

  fetchAllUsers = async () => {
    const url = 'http://localhost:3000/api/users'
    const allUsers = await allPurposeFetch(url)
    const cleanedUsers = this.cleanUsers(allUsers.data)
    this.props.storeUsers(cleanedUsers)
  }

  cleanUsers = (allUsers) => {
    return allUsers.map(user => {
      return user.email;
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header-container">
          <Header />
          <Nav />
        </div>
        <Route exact path='/' className='display' render={ () => <AllMovies movies={this.props.movies} />} />
        <Route path='/login' className='display' render={ () => <Login />} /> 
        <Route exact path='/favorites' className='display' render={ () => <AllMovies movies={this.props.favorites} />} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
    movies: state.movies, 
    favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  storeMovies: (movies) => dispatch(storeMovies(movies)),
  storeUsers: (allUsers) => dispatch(storeUsers(allUsers))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
