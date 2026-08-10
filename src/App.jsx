import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}