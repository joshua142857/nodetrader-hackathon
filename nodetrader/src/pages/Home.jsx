import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ProjectStatistics from '../components/ProjectStatistics';
import Platforms from '../components/Platforms';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [expandedBox, setExpandedBox] = useState('stats');
  const handleExpand = (box) => {
    if (box === 'stats') {
      setExpandedBox('stats'); 
    } else if (box === expandedBox) {
      setExpandedBox(null); 
    } else {
      setExpandedBox(box); 
    }
  };

  return (
    <div className="relative p-5 min-h-screen">
      {/* Sidebar */}
      <Sidebar handleExpand={handleExpand} />

      {/* Full Stats Section */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          expandedBox === 'stats' ? 'h-full z-10' : 'h-96'
        }`}
      >
        {expandedBox === 'stats' && (
          <div className="p-4 bg-gray-100 rounded-lg mt-4">
            <div className="p-4 bg-emerald-300 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link
                to="/nodes"
                className="flex items-center justify-center w-full h-full text-center"
              >
                <div className="text-lg font-semibold text-black">Node Manager</div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Left -  Project Statistics */}
      <div
        className={`absolute bottom-24 left-0 transition-all duration-500 ease-in-out ${
          expandedBox === 'project' ? 'w-full h-3/4 z-20 opacity-100' : 'w-2/5 h-64 opacity-100'
        } p-6 bg-green-300 rounded-lg ${
          expandedBox !== 'project' && expandedBox !== null ? 'opacity-0 z-0' : 'opacity-100 z-10'
        }`}
        style={{ overflow: 'hidden' }} 
      >
        <ProjectStatistics expanded={expandedBox === 'project'} />
      </div>

      {/* Bottom Right - Platforms */}
      <div
        className={`absolute bottom-24 right-0 transition-all duration-500 ease-in-out ${
          expandedBox === 'platforms' ? 'w-full h-3/4 z-20 opacity-100' : 'w-2/5 h-64 opacity-100'
        } p-6 bg-amber-200 rounded-lg ${
          expandedBox !== 'platforms' && expandedBox !== null ? 'opacity-0 z-0' : 'opacity-100 z-10'
        }`}
        style={{ overflow: 'hidden' }} 
      >
        <Platforms />
      </div>
    </div>
  );
};

export default Home;
