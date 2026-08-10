import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Set Login as the default landing route */}
        <Route path="/" element={<Login />} />
        
        {/* Home page route */}
        <Route path="/tejas-portfolio" element={<Home />} />

        {/* Redirect any unknown routes back to Login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;