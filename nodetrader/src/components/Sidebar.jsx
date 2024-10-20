import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ICONS
import { LuLayoutDashboard, LuUser, LuBarChart4 } from 'react-icons/lu';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0); 

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: '/', name: 'Dashboard', icon: LuLayoutDashboard},
    { id: 2, path: '/personal', name: 'Personal', icon: LuUser },
    { id: 3, path: '/market', name: 'Market', icon: LuBarChart4 },
  ];

  return (
    <div className="w-14 md:w-40 fixed left-0 top-0 z-10 h-screen border-r pt-4 px-2 bg-white">
      <div className="flex items-center justify-center mb-4">
        <img src="/Drawing.svg" alt="logo" className="w-20 hidden md:flex rounded-full border-2 border-gray-300" />
      </div>

      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? 'bg-indigo-100 text-indigo-500' : '' }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{<link.icon />}</span> 
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          <span>?</span> <span className="hidden md:flex">Need Help?</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
