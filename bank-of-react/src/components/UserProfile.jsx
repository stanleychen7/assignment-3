import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = ({ currentUser }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <div>Username: {currentUser.userName}</div>
      <div>Member Since: {currentUser.memberSince}</div>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default UserProfile;