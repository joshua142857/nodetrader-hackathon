import React from 'react';
import { Link } from 'react-router-dom';

const Nodes = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Nodes Page</h1>
          <p className="text-gray-600 mt-2">Welcome to the Nodes page. Here you can manage and visualize your nodes.</p>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* Node Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-700">Node Control 1</h2>
              <p className="text-gray-500 mt-2">Control and manage node operations.</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Manage Node</button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-700">Node Control 2</h2>
              <p className="text-gray-500 mt-2">View detailed statistics of nodes.</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">View Stats</button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-700">Node Control 3</h2>
              <p className="text-gray-500 mt-2">Configure node settings.</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Configure</button>
            </div>
          </div>

          {/* Link back to the Dashboard */}
          <div className="text-center mt-12">
            <Link to="/home" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              &larr; Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nodes;
