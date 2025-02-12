import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h3>Admin Dashboard</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <i className="fas fa-home"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <i className="fas fa-users"></i> Users
            </Link>
          </li>
          <li>
            <Link to="/admin/orders">
              <i className="fas fa-truck"></i> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/fleet">
              <i className="fas fa-truck-moving"></i> Fleet Management
            </Link>
          </li>
          <li>
            <Link to="/admin/reports">
              <i className="fas fa-chart-bar"></i> Reports
            </Link>
          </li>
          <li>
            <Link to="/admin/settings">
              <i className="fas fa-cog"></i> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
