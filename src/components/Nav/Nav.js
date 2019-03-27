import React, { Component } from 'react'
import './Nav.scss'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { loginUser } from '../../actions'


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: ''
    }
  }
  
  signOut = e => {
    const data = {
      name: "",
      email: ""
    };
    this.props.loginUser(data);
    this.props.storeFavorites([])
  };

  validateLogin = (e) => {
        const { history } = this.props
        if (!this.props.user.email) {
            this.setState({
              errorMsg: 'You must be signed in to view favorites'
            })
            history.push('/login')
        } else {
            this.setState({
              errorMsg: '',
            })
            history.push('/favorites')
        }
    }
  
  render() {
    let welcomeMessage;
    let authLink;
    let errorMsg;
    if (!this.props.user.email) {
        errorMsg = this.state.errorMsg
        authLink = <NavLink to='/login' className='nav-link'>Sign In</NavLink>
    } else {
        errorMsg = ''
        welcomeMessage = <h3 className="welcome">Welcome, {this.props.user.name}!</h3>     
        authLink = <NavLink to='/' className='nav-link' onClick={this.signOut}>Sign Out</NavLink>
    }

    return (
        <div className="nav-container">
            <p className='nav-error-msg'>{errorMsg}</p>
            <NavLink to='/' className="nav-link">Movies</NavLink>
            <button type='submit' className='nav-btn' onClick={this.validateLogin}>Favorites</button>
            {authLink}
            {welcomeMessage}
        </div>
    )
  }
}
export const mapStateToProps = (state) => ({
    user: state.user,
    favorites: state.favorites,
    movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(loginUser(data)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);

Nav.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.array,
  movies: PropTypes.array,
  dispatch: PropTypes.func,
  loginUser: PropTypes.func
};
