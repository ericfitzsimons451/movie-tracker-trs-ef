import React, { Component } from "react";
import "./Nav.scss";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loginUser, setErrorMessage, storeFavorites } from "../../actions";
import allPurposeFetch from "../../allPurposeFetch";

const Nav = props => {
  console.log(props)
  const signOut = e => {
    const data = {
      name: "",
      email: ""
    };
    props.loginUser(data);
  };

  const validateLogin = async e => {
    const { history } = props;
    if (!props.user.email) {
      props.setErrorMessage("You must be signed in to view favorites");
      history.push("/login");
    } else {
      await fetchFavoriteMovies();
      await history.push("/favorites");
    }
  };

  const fetchFavoriteMovies = async () => {
    const url = `http://localhost:3000/api/users/${props.user.id}/favorites`;
    const favorites = await allPurposeFetch(url);
    const favs = filterFavorites(favorites.data);
    props.storeFavorites(favs);
  };

  const filterFavorites = array => {
    const favs = [];
    props.movies.forEach(movie => {
      array.forEach(favorite => {
        if (favorite.movie_id === movie.id) {
          favs.push(movie);
        }
      });
    });
    return favs;
  };

  let welcomeMessage;
  let authLink;
  if (!props.user.email) {
    authLink = (
      <NavLink to="/login" className="nav-link">
        Sign In
      </NavLink>
    );
  } else {
    welcomeMessage = <h3 className="nav-link">Welcome, {props.user.name}!</h3>;
    authLink = (
      <NavLink to="/" className="nav-link" onClick={signOut}>
        Sign Out
      </NavLink>
    );
  }

  return (
    <div className="nav-container">
      <NavLink to="/" className="nav-link">
        Movies
      </NavLink>
      <button type="submit" className="nav-link" onClick={validateLogin}>
        Favorites
      </button>
      {authLink}
      {welcomeMessage}
    </div>
  );
};
export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites,
  movies: state.movies
});

export const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  setErrorMessage: message => dispatch(setErrorMessage(message)),
  storeFavorites: favorites => dispatch(storeFavorites(favorites))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);

Nav.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.array,
  dispatch: PropTypes.func
};
