import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage'; 
import Home from './pages/Home';
import Layout from './components/Layout';
import Nodes from './pages/Nodes';
import About from './pages/About';  
import Settings from './pages/Settings';

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        
<Route index element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/nodes" element={<Nodes />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
