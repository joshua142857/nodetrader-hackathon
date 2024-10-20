import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate to redirect after sign up

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email (basic example)
    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    // Simulate API call to sign up (you can replace this with actual API logic)
    try {
      // Normally you'd send this data to the backend
      // For now, we're just redirecting with the email passed via navigate.
      navigate("/home", { state: { email } });
    } catch (err) {
      setError("An error occurred while signing up.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b')" }}
    >
      {/* Logo Section */}
      <div className="mb-10">
        <img src="https://via.placeholder.com/120x120" alt="Logo" className="w-24 h-24 object-contain rounded-full shadow-lg"/>
      </div>

      {/* Welcome Text */}
      <h1 className="text-5xl font-extrabold text-white mb-4 text-center tracking-tight">
        Welcome to TradeFlow!
      </h1>
      <p className="text-lg text-gray-200 mb-8 text-center">
        Sign up to revolutionize your trading experience
      </p>

      {/* Animated Down Arrow */}
      <div className="mt-8 text-gray-300 animate-bounce">
        <p>&#x2193;</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-80 bg-white p-6 rounded-lg shadow-lg">
        <div className="relative w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400 fa fa-envelope"></i>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          Sign up
        </button>
      </form>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-400">
        <p>&copy; 2024 TradeFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
