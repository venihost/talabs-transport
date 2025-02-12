import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="admin-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TaLabs Transport Admin Panel</p>
        <div className="footer-links">
          <a href="/admin/help">Help</a>
          <a href="/admin/privacy">Privacy Policy</a>
          <a href="/admin/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
