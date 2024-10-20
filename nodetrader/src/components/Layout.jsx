import React from 'react';
import Sidebar from './Sidebar';  
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <Sidebar className="bg-white fixed top-0 left-0 w-16 md:w-56 h-full" />

      {/* Main content area */}
      <div className="flex-1 ml-16 md:ml-56 bg-gray-100 min-h-screen">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
