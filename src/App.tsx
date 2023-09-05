import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './pages/dashboard';
import Cart from './pages/cart';
import Sidebar from './parts/Sidebar'
import React from 'react';


function App() {
 
  
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/cart" element={<Cart />}/>
    </Routes>
  </Router>
  );
}

export default App;
