import React from 'react';
import './App.css';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-300">Welcome to the Dashboard!</h1>
      <p>You have successfully logged in with Google.</p>

      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 bg-blue-500 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Left Section</h2>
        <div className="flex flex-col space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img className="w-full h-32 object-cover rounded-t-lg" src="https://via.placeholder.com/150" alt="Image 1" />
            <p className="text-center mt-2">Section 1</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img className="w-full h-32 object-cover rounded-t-lg" src="https://via.placeholder.com/150" alt="Image 2" />
            <p className="text-center mt-2">Section 2</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img className="w-full h-32 object-cover rounded-t-lg" src="https://via.placeholder.com/150" alt="Image 3" />
            <p className="text-center mt-2">Section 3</p>
          </div>
        </div>
      </div>

      {/* Right Section (Market Stats) */}
      <div className="flex w-full md:w-1/2 lg:w-1/3 bg-green-500 p-6">
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-bold text-white mb-4">Market Stats</h2>
          <img className="w-full h-48 object-cover rounded-lg" src="https://via.placeholder.com/150" alt="Stats Image 1" />
        </div>
        <div className="w-1/2 pl-4">
          <img className="w-full h-48 object-cover rounded-lg" src="https://via.placeholder.com/150" alt="Stats Image 2" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-purple-500 p-6">
        <a href="/statistics" className="block text-center text-white text-lg font-bold">
          View Statistics
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
