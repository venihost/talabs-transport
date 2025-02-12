import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import AdminHeader from '../../components/Admin/AdminHeader';
import './Admin.css';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminHeader />
      <div className="admin-container">
        <AdminSidebar />
        <div className="admin-content">
          <h1>Admin Dashboard</h1>
          <p>Welcome to the admin dashboard. Manage your transport business here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;