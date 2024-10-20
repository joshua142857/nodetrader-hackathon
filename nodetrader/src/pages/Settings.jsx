import React from 'react';

const Settings = () => {
  return (
    <div className="container mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Settings</h1>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <p className="text-lg text-gray-600 mb-4">Manage your account information, update your email, and change your password.</p>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
          Change Email
        </button>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-indigo-600 transition duration-200">
          Change Password
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Theme Settings</h2>
        <p className="text-lg text-gray-600 mb-4">Choose your preferred theme for the application.</p>
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
          Light Mode
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg ml-4 hover:bg-gray-700 transition duration-200">
          Dark Mode
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <p className="text-lg text-gray-600 mb-4">Manage your notification preferences for emails and alerts.</p>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
          Manage Notifications
        </button>
      </div>
    </div>
  );
};

export default Settings;
