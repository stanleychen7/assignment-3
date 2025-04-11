import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Debits extends Component {
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
    const newDebit = {
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      date: new Date().toISOString()
    };
    this.props.addDebit(newDebit);
    this.setState({ description: '', amount: '' });
  };

  render() {
    return (
      <div>
        <h1>Debits</h1>
        <ul>
          {this.props.debits.map((debit, index) => (
            <li key={index}>
              {debit.description}: ${debit.amount.toFixed(2)} on {debit.date}
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
          <button type="submit">Add Debit</button>
        </form>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  }
}

export default Debits;