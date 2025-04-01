import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'; // Use Navigate for programmatic redirects

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false // Redirect property used to trigger Navigate
    };
  }

  // When the user name input changes, capture the input and update the state (user.userName)
  handleChange = (e) => {
    const updatedUser = { ...this.state.user };
    updatedUser.userName = e.target.value;
    this.setState({ user: updatedUser });
  };

  // When user clicks on "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockLogIn(this.state.user); // Call the mockLogIn function passed as a prop
    this.setState({ redirect: true }); // Update state to trigger Navigate
  };

  render() {
    if (this.state.redirect) {
      // Redirect to "User Profile" page
      return <Navigate to="/userProfile" />;
    }

    // Render the login form
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;