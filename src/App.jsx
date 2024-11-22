import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      {token && <Header />} {/* Show Header only when user is logged in */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={token ? <About /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={token ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
