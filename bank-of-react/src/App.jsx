import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      credits: [],
      debits: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99'
      }
    };
  }

  // Lifecycle method to fetch credits and debits data
  async componentDidMount() {
    try {
      const creditsResponse = await fetch('https://johnnylaicode.github.io/api/credits.json');
      const credits = await creditsResponse.json();

      const debitsResponse = await fetch('https://johnnylaicode.github.io/api/debits.json');
      const debits = await debitsResponse.json();

      // Calculate the account balance
      const totalCredits = credits.reduce((sum, credit) => sum + credit.amount, 0);
      const totalDebits = debits.reduce((sum, debit) => sum + debit.amount, 0);
      const accountBalance = totalCredits - totalDebits;

      this.setState({ credits, debits, accountBalance });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to add a new credit
  addCredit = (credit) => {
    const updatedCredits = [...this.state.credits, credit];
    const updatedBalance = this.state.accountBalance + credit.amount;
    this.setState({ credits: updatedCredits, accountBalance: updatedBalance });
  };

  // Function to add a new debit
  addDebit = (debit) => {
    const updatedDebits = [...this.state.debits, debit];
    const updatedBalance = this.state.accountBalance - debit.amount;
    this.setState({ debits: updatedDebits, accountBalance: updatedBalance });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home accountBalance={this.state.accountBalance} />} />
          <Route path="/userProfile" element={<UserProfile currentUser={this.state.currentUser} />} />
          <Route path="/login" element={<Login handleLogin={this.handleLogin} />} />
          <Route path="/credits" element={<Credits credits={this.state.credits} addCredit={this.addCredit} />} />
          <Route path="/debits" element={<Debits debits={this.state.debits} addDebit={this.addDebit} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;