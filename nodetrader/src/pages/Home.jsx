import React, { useState } from 'react';
import ProjectStatistics from '../components/ProjectStatistics';
import Platforms from '../components/Platforms';

const Home = () => {
  // State to track which box is expanded (can be 'stats', 'project', 'platforms' or null for none)
  const [expandedBox, setExpandedBox] = useState(null);

  const handleExpand = (box) => {
    if (expandedBox === box) {
      setExpandedBox(null); // Contract if clicked again
    } else {
      setExpandedBox(box); // Expand the selected box
    }
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 gap-x-60">
        {/* Stats Block */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            expandedBox === 'stats'
              ? 'col-span-2' // Takes the full width when expanded
              : 'col-span-1' // Default size
          } ${expandedBox === 'stats' ? 'h-96' : 'h-40'}`}
        >
          {/* Button to expand/collapse */}
          <button
            onClick={() => handleExpand('stats')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {expandedBox === 'stats' ? 'Contract' : 'Expand Stats'}
          </button>

          {/* Your Stats Content Goes Here */}
          {expandedBox === 'stats' ? (
            <div className="p-4 bg-gray-100 rounded-lg">Full Stats Content</div>
          ) : (
            <div className="p-2 bg-gray-300 rounded-lg">Abbreviated Stats</div>
          )}
        </div>

        {/* Project Statistics Block */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            expandedBox === 'project'
              ? 'col-span-2' // Takes the full width when expanded
              : 'col-span-1' // Default size
          } ${expandedBox === 'project' ? 'h-96' : 'h-40'}`}
        >
          <button
            onClick={() => handleExpand('project')}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            {expandedBox === 'project' ? 'Contract' : 'Expand Project Stats'}
          </button>

          {/* Conditional rendering based on expansion */}
          {expandedBox === 'project' ? (
            <ProjectStatistics />
          ) : (
            <div className="p-2 bg-green-300 rounded-lg">
              Abbreviated Project Statistics
            </div>
          )}
        </div>

        {/* Platforms Block */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            expandedBox === 'platforms'
              ? 'col-span-2' // Takes the full width when expanded
              : 'col-span-1' // Default size
          } ${expandedBox === 'platforms' ? 'h-96' : 'h-40'}`}
        >
          <button
            onClick={() => handleExpand('platforms')}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg"
          >
            {expandedBox === 'platforms' ? 'Contract' : 'Expand Platforms'}
          </button>

          {expandedBox === 'platforms' ? (
            <Platforms />
          ) : (
            <div className="p-2 bg-purple-300 rounded-lg">
              Abbreviated Platforms Content
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
