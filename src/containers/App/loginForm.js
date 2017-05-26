
import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loadUser, authUser } from '../../action';

class loginForm extends Component{
  constructor(props) {

    super(props);

    this.state = {
      username : "",
      password : ""
    };
  }

  handleLoginSubmit = ( event ) => {
    event.preventDefault();
    this.login(this.state)
    .then(this.clearState())
  }

  handleChangeUsername = ( event ) => {
    this.setState({
      username : event.target.value
    });
  }

  handleChangePassword = ( event ) => {
    this.setState({
      password : event.target.value
    });
  }

  clearState(){
    this.setState({
      username : "",
      password : ""
    });
  }

  login(user){
    return fetch('/logIn',{
        method: "POST",
         headers:
        {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
      }).then(response =>{
        if(response.status === 200){
          this.props.authUser(user)
        }
        else {
          console.log('nope')
        }
      }).catch(err => {
        throw err;
      })
  }

  render(){
    console.log(this.props.currentUser)
      if(this.props.currentUser.userLoggedIn === true){
        return(
        <Redirect to={{
          pathname: '/event',
        }} />
        )
      }
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Planit-Better</h2>
        </div>
        <div id="navBar">
        <Link to="/"><button>Home</button></Link>
        </div>
        <form onSubmit={this.handleLoginSubmit}>
            <div>
              <span>Username</span>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChangeUsername} />
            </div>
            <div>
              <span>Password</span>
                <input type="password" placeholder="password"  value={this.state.password} onChange={this.handleChangePassword} />
            </div>
             <div>
              <button name="Signup" type="submit">Log in </button>
            </div>
          </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    currentUser : state.authenticate
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUser: user =>{
      dispatch(loadUser(user))
    },
    authUser: currentUser => {
      dispatch(authUser(currentUser))
    }
  }
}

const ConnectedLoginApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(loginForm);

export default ConnectedLoginApp;