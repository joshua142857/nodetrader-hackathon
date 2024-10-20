import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import ProjectStatistics from '../components/ProjectStatistics';
import Platforms from '../components/Platforms';
import Sidebar from '../components/Sidebar';
import Nodes from '../pages/Nodes';

const Home = () => {
  const [expandedBox, setExpandedBox] = useState('stats'); // Stats is expanded by default

  const handleExpand = (box) => {
    if (box === 'stats') {
      setExpandedBox('stats'); // Always show stats when "Dashboard" is clicked
    } else if (box === expandedBox) {
      setExpandedBox(null); // Collapse the currently expanded box
    } else {
      setExpandedBox(box); // Expand the new box (either "project" or "platforms")
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
        }`} // Leave space for sidebar
      >
        {expandedBox === 'stats' && (
          <div className="p-4 bg-gray-100 rounded-lg mt-4">
            {/* Full Stats Box with Router Link */}
            <div className="p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link
                to="/nodes" // The route you want to navigate to
                className="flex items-center justify-center w-full h-full text-center"
              >
                <div className="text-lg font-semibold text-blue-800">Go to Another Page</div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Left - Abbreviated Project Statistics */}
      <div
        className={`absolute bottom-36 left-0 transition-all duration-500 ease-in-out ${
          expandedBox === 'project' ? 'w-full h-2/3 z-20 opacity-100' : 'w-1/3 h-48 opacity-100'
        } p-4 bg-green-300 rounded-lg ${
          expandedBox !== 'project' && expandedBox !== null ? 'opacity-0 z-0' : 'opacity-100 z-10'
        }`}
        style={{ overflow: 'hidden' }} // Ensure no content spills over
      >
        {expandedBox === 'project' ? (
          <ProjectStatistics size="full" />
        ) : (
          <ProjectStatistics size="abbreviated" />
        )}
      </div>

      {/* Bottom Right - Abbreviated Platforms */}
      <div
        className={`absolute bottom-36 right-0 transition-all duration-500 ease-in-out ${
          expandedBox === 'platforms' ? 'w-full h-2/3 z-20 opacity-100' : 'w-1/3 h-48 opacity-100'
        } p-4 bg-purple-300 rounded-lg ${
          expandedBox !== 'platforms' && expandedBox !== null ? 'opacity-0 z-0' : 'opacity-100 z-10'
        }`}
        style={{ overflow: 'hidden' }} // Ensure no content spills over
      >
        {expandedBox === 'platforms' ? (
          <Platforms />
        ) : (
          <div className="p-2">Abbreviated Platforms Content</div>
        )}
      </div>
    </div>
  );
};

export default Home;
