import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuLayoutDashboard, LuUser, LuBarChart4, LuInfo, LuLightbulb, LuCog } from 'react-icons/lu';

const Sidebar = ({ handleExpand, resetStats }) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index, box) => {
    setActiveLink(index);
    if (box === 'stats') {
      handleExpand('stats'); // Expand stats when Dashboard is clicked
    } else {
      handleExpand(box); // Expand the selected box when Project Stats or Platforms is clicked
    }
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: '/home', name: 'Dashboard', icon: LuLayoutDashboard, expandBox: 'stats' },
    { id: 2, name: 'Project Stats', icon: LuUser, expandBox: 'project' },
    { id: 3, name: 'Market', icon: LuBarChart4, expandBox: 'platforms' },
    { id: 4, path: '/about', name: 'About', icon: LuInfo },
    { id: 6, path: '/settings', name: 'Settings', icon: LuCog },
  ];

  return (
    <div className="w-14 md:w-40 fixed left-0 top-0 z-10 h-screen border-r pt-4 px-2 bg-white">
      <div className="flex items-center justify-center mb-20">
        <img src="/Logo.svg" alt="logo" className="w-20 hidden md:flex" />
      </div>

      <ul className="mt-20 space-y-10">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-3 hover:bg-emerald-100 hover:text-indigo-500 ${
              activeLink === index ? 'bg-emerald-100 text-emerald-500' : ''
            }`}
          >
            <button
              className={`"flex justify-center md:justify-start items-center md:space-x-5 w-full "
              onClick={() => handleLinkClick(index, link.expandBox)}${activeLink === index ? 'bg-emerald-100 text-emerald-500' : '' }`}
              >
            <Link
              to={link.path || '#'} // Use # if no path is specified
              className="flex justify-center md:justify-start items-center md:space-x-5 w-full"
              onClick={() => handleLinkClick(index, link.expandBox)}
            >
              <span>{<link.icon />}</span>
              <span className="text-base text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">

        <p className="flex items-center justify-center space-x-2 text-xs text-black py-2 px-5 bg-gradient-to-r from-emerald-300 to-green-500 rounded-full">
          <span className="hidden md:flex text-base">Log Out</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
