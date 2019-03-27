import React from "react";
import "./AllMovies.scss";
import Movie from "../../components/Movie/Movie";
import PropTypes from "prop-types";

export const AllMovies = ({ movies, favorites }) => {
  const allMovies = movies.map(movie => {
    return <Movie key={movie.id} {...movie} favorites={favorites} />;
  });
  return <div className="movie-display-container">{allMovies}</div>;
};

export default AllMovies;

AllMovies.propTypes = {
  movies: PropTypes.array
};
