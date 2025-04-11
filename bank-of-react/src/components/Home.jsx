import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <img src="https://picsum.photos/200/200" alt="bank" />
        <h1>Bank of React</h1>
        
        <AccountBalance accountBalance={this.props.accountBalance} />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/userProfile">Go to User Profile</Link>
        <br/>
        <Link to="/credits">
          <button>Add Credit</button>
        </Link>
        <br/>
        <Link to="/debits">
          <button>Add Debit</button>
        </Link>
      </div>
    );
  }
}

export default Home;