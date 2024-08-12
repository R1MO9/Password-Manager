import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import ManagePassword from './components/ManagePassword/ManagePassword.jsx'
import SavePasswordCard from './components/SavePasswordCard/SavePasswordCard.jsx';
import Logout from './components/Logout/Logout.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="manage-password" element={<ManagePassword />} />
          <Route path="save-password" element={<SavePasswordCard />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
