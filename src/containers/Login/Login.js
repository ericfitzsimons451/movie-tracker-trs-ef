import React, { Component } from 'react'
import './Login.scss'
import { loginUser, storeFavorites } from '../../actions'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cleanUser } from '../../helpers/cleanUser'
import { Redirect } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import allPurposeFetch from '../../allPurposeFetch'


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errorMsg: "",
      newUserName: "",
      newUserEmail: "",
      newUserPassword: "",
      createUser: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email, 
                password: this.state.password, 
            }),
            headers: {
                'Content-Type': 'application/json',
            } 
        })
        const user = await response.json()
        const cleanedUser = cleanUser(user)
        this.props.loginUser(cleanedUser)
        this.fetchFavoriteMovies()
        } catch (error) {
            this.setState({
                errorMsg: 'User not found'
            })
        }
        this.setState({ email: "", password: "" });
      };


    fetchFavoriteMovies = async () => {
        const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites`
        const favorites = await allPurposeFetch(url)
        const favs = this.filterFavorites(favorites.data)
        this.props.storeFavorites(favs)
    }

    filterFavorites = (array) => {
        const favs = []
        this.props.movies.forEach((movie) => {
            array.forEach((favorite) => {
                if (favorite.movie_id === movie.id) {
                    favs.push(movie)
                } 
            })
        })
        return favs;
    }

    updateState = () => {
        this.setState({
            createUser: true
        })
    }


  createNewUser = async e => {
    e.preventDefault();
    if (this.props.allUsers.includes(this.state.newUserEmail)) {
      this.setState({
          errorMsg: "That email already exists"
        });
    } else {
      try {
        await fetch("http://localhost:3000/api/users/new", {
          method: "POST",
          body: JSON.stringify({
            name: this.state.newUserName,
            email: this.state.newUserEmail,
            password: this.state.newUserPassword
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        this.setState({
          errorMsg: error
        });
      }
      this.loginNewUser();
    }
  };

  loginNewUser = () => {
    const data = {
      name: this.state.newUserName,
      email: this.state.newUserEmail,
      favorites: []
    };
    this.props.loginUser(data);
  };

  render() {
    let feedback;
    let nameLabel;
    let nameInput;
    let emailName;
    let emailValue;
    let passwordName;
    let passwordValue;
    let signInBtn;
    let signInMsg;
    let toggleForm;

    if (this.state.createUser === false) {
      feedback = "Sign In";
      nameLabel = "";
      emailName = "email";
      emailValue = this.state.email;
      passwordName = "password";
      passwordValue = this.state.password;
      signInBtn = this.handleSubmit;
      signInMsg = "Submit";
      toggleForm = (
        <NavLink to="/login" onClick={this.updateState} className="login-btn">
          Create an Account
        </NavLink>
      );
    } else if (this.state.createUser === true) {
      feedback = "Create an Account";
      nameLabel = "Name";
      nameInput = (
        <input
          onChange={this.handleChange}
          name="newUserName"
          value={this.state.newUserName}
        />
      );
      emailName = "newUserEmail";
      emailValue = this.state.newUserEmail;
      passwordName = "newUserPassword";
      passwordValue = this.state.newUserPassword;
      signInBtn = this.createNewUser;
      signInMsg = "Submit";
    }

    if (this.props.user.email) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <h3 className="feedback">{feedback}</h3>
            <div className="name-input">
              <label for="newUserName">{nameLabel}</label>
              {nameInput}
            </div>
            <div className="email-input">
              <label for={emailName}>Email</label>
              <input
                onChange={this.handleChange}
                name={emailName}
                type="email"
                value={emailValue}
              />
            </div>
            <div className="password-input">
              <label for={passwordName}>Password</label>
              <input
                onChange={this.handleChange}
                name={passwordName}
                type="password"
                value={passwordValue}
              />
            </div>

            <div className="login-btns">
              <p className="error-msg">{this.state.errorMsg}</p>
              <NavLink
                to="/"
                type="submit"
                onClick={signInBtn}
                className="login-btn"
              >
                {signInMsg}
              </NavLink>
              {toggleForm}
            </div>
          </form>
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => ({
    user: state.user,
    allUsers: state.allUsers,
    movies: state.movies,
    // errorMsg: state.message,
})

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user)),
    storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object
};
