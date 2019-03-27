import React from "react";
import "./BigMovie.scss";
import PropTypes from "prop-types";

export const BigMovie = ( {movie} ) => {
  console.log(movie)
  return (
    <div className='big-movie-card'>
    <div className='movie-poster'>
        <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
    </div>
    <div className='movie-details'>
        <h3 className="movie-title">{movie.name}</h3>
        <h2 className='release-date'>Released: {movie.release_date}</h2>
        <h2 className='vote-avg'>Rating: {movie.vote_average}</h2>
        <p className='overview'>{movie.overview}</p>
        {/* <button onClick={this.validateUser}>{btn}</button> */}
    </div>
</div>
)};

export default BigMovie;
