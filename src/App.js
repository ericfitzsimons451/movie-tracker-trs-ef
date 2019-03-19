import React, { Component } from 'react';
import './App.css';
import './allPurposeFetch'
import  allPurposeFetch  from './allPurposeFetch';
import apiKey from './APIkey.js'
import { Route } from 'react-router-dom'
import AllMovies from './AllMovies' 

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      //DOES THE STORE NEED TO KNOW ABOUT MOVIES?  OR, JUST USERS?  WHY?
      favorites: [],
      //there should be a TOGGLE function.  
      users: []
      //Almost gauranteed that we'll need the Redux store for these
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const movies = await allPurposeFetch(url)
    this.setState({ movies: movies.results })
    
    // this.displayMovies(this.state.movies)
  }

  displayMovies = (movieArray) => {
    this.state.movies.map((movie) => {

    })
  }

  render() {
    return (
      <div className="App">
        {/* <Header />
        <Nav /> */}
        <Route exact path='/' render={ () => <AllMovies movies={this.state.movies} />} />
      </div>
    );
  }
}

export default App;
