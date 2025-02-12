import React from 'react';

const AdminHeader = () => {
  const currentUser = {
    name: 'Admin User',
    avatar: '/images/admin-avatar.jpg'
  };

  return (
    <header className="admin-header">
      <div className="header-left">
        <h2>TaLabs Transport Admin</h2>
      </div>
      <div className="header-right">
        <div className="notifications">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
        <div className="admin-profile">
          <img src={currentUser.avatar} alt="Admin" />
          <span>{currentUser.name}</span>
          <div className="dropdown-menu">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
