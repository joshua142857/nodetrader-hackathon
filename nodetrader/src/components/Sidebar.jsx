import React, { useState } from 'react';
import { LuLayoutDashboard, LuBarChart4, LuDatabase } from 'react-icons/lu';

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
    { id: 1, name: 'Dashboard', icon: LuLayoutDashboard, expandBox: 'stats' },
    { id: 2, name: 'Project Stats', icon: LuDatabase, expandBox: 'project' },
    { id: 3, name: 'Platforms', icon: LuBarChart4, expandBox: 'platforms' },
  ];

  return (
    <div className="w-14 md:w-40 fixed left-0 top-0 z-10 h-screen border-r pt-4 px-2 bg-white">
      <div className="flex items-center justify-center mb-4">
        <img src="/Drawing.svg" alt="logo" className="w-20 hidden md:flex" />
      </div>

      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? 'bg-indigo-100 text-indigo-500' : ''
            }`}
          >
            <button
              className="flex justify-center md:justify-start items-center md:space-x-5 w-full"
              onClick={() => handleLinkClick(index, link.expandBox)}
            >
              <span>{<link.icon />}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
