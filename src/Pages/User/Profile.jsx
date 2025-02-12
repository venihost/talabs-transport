import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="profile-details">
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default Profile;