import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
// import StatisticsPage from './StatisticsPage';
// import GoogleLoginButton from './GoogleLoginButton';

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page (root) */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500
    absolute inset-0
    bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]">
      <h1 className="text-4xl font-bold mb-8 text-gray-100">Welcome to Our Trading Algorithm Platform!</h1>
      <h4 className="text-1 font-bold mb-8 text-gray-100 mb-0">Click below to sign up!</h4>
      <h1 className="text-4xl font-bold mb-8 text-gray-300 mb-1"><p>&#x2193;</p></h1>
      <form>
          <input class="
          border border-transparent
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-purple-600
          focus:border-transparent">
          </input>
          <button class="
          bg-purple-600
          hover:bg-purple-700
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-purple-600
          focus:ring-opacity-50 ...">
            Sign up
          </button>
      </form>
    </div>
  );
}

export default App;
