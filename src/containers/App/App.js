import React, { Component } from 'react';
import './App.scss'
import  allPurposeFetch  from '../../allPurposeFetch';
import apiKey from '../../APIkey.js'
import { Route } from 'react-router-dom'
import AllMovies from '../../components/AllMovies/AllMovies' 
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import storeMovies from '../../actions/index'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const movies = await allPurposeFetch(url)
    const cleanedMovies = this.cleanMovies(movies.results)
    // this.setState({ movies: cleanedMovies })
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
    console.log(cleanedMovies)
    return cleanedMovies;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Route exact path='/' render={ () => <AllMovies />} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeMovies: (movies) => dispatch(storeMovies(movies))
})

export default connect(null, mapDispatchToProps)(App);
