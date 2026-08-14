import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Render Home directly as the root route */}
        <Route path="/" element={<Home />} />
        
        {/* Optional alias route pointing to Home */}
        <Route path="/tejas-portfolio" element={<Home />} />

        {/* Catch-all route to redirect any unknown path to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;