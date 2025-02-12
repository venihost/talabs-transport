import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Transport Street',
    company: 'Tech Solutions Inc.',
    profileImage: '/images/user-avatar.jpg'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Add API call to update user data
  };

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="profile-image">
          <img src={userData.profileImage} alt={userData.name} />
          <button className="change-photo-btn">Change Photo</button>
        </div>
        <div className="profile-title">
          <h2>{userData.name}</h2>
          <p>{userData.company}</p>
        </div>
      </div>

      <div className="profile-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={userData.name}
              disabled={!isEditing}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={userData.email}
              disabled={!isEditing}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={userData.phone}
              disabled={!isEditing}
              onChange={(e) => setUserData({...userData, phone: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={userData.address}
              disabled={!isEditing}
              onChange={(e) => setUserData({...userData, address: e.target.value})}
            />
          </div>

          <div className="profile-actions">
            {isEditing ? (
              <>
                <button type="submit" className="save-btn">Save Changes</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                type="button" 
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
