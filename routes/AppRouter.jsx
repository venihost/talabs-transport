import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import Gallery from '../pages/Gallery/Gallery';
import Dashboard from '../pages/Admin/Dashboard';
import ManageServices from '../pages/Admin/ManageServices';
import ManageUsers from '../pages/Admin/ManageUsers';
import Profile from '../pages/User/Profile';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <Router basename="/talabs-transport">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/manage-services" element={<ManageServices />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/user/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;export default AppRouter;