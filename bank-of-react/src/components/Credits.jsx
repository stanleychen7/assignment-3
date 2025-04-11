import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

class Credits extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      amount: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newCredit = {
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      date: new Date().toISOString()
    };
    this.props.addCredit(newCredit);
    this.setState({ description: '', amount: '' });
  };

  render() {
    return (
      <div>
        <h1>Credits</h1>
        <ul>
          {this.props.credits.map((credit, index) => (
            <li key={index}>
              {credit.description}: ${credit.amount.toFixed(2)} on {credit.date}
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Credit</button>
        </form>

        {/* Add a button to navigate back to the Home page */}
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  }
}

export default Credits;