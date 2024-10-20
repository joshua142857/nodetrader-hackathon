import React, { useState, useEffect } from 'react';

const Platforms = () => {
  const [volumeData, setVolumeData] = useState([]);
  const [liquidityData, setLiquidityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('http://localhost:8000/market-stats');
        const data = await response.json();

        // Assuming the API returns two arrays: volumeData and liquidityData
        setVolumeData(data[0]);  // First array is volumeData
        setLiquidityData(data[1]);  // Second array is liquidityData
        setLoading(false);
      } catch (error) {
        console.error('Error fetching market data:', error);
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className ="p-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-700">Market Interests </h1>
      <div className="p-2 grid grid-cols-2 gap-8">
          <div className ="space-y-2 text-gray-500">
            <p className="text-2xl font-bold">58</p>
            <p className="flex items-center space-x-2">
                <span>website</span>
            </p>
          </div>
          <div>
          <p className="text-2xl font-bold">87</p>
          <p className="flex items-center space-x-2">
              <span>IOS</span>
            </p>
          </div>
      </div>

    </div>
  )
}

export default Platforms