import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login'; // Import Login component

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 1234567.89,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99'
      }
    };
  }

  // Method to handle login
  handleLogin = (userName) => {
    const updatedUser = { ...this.state.currentUser, userName };
    this.setState({ currentUser: updatedUser });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home accountBalance={this.state.accountBalance} />} />
          <Route path="/userProfile" element={<UserProfile currentUser={this.state.currentUser} />} />
          <Route path="/login" element={<Login handleLogin={this.handleLogin} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;