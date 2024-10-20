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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-700">Market Interests</h1>

      {/* Volume Data Section */}
      <div className="p-2">
        <h2 className="text-xl font-bold text-gray-600">Volume Data</h2>
        <div className="grid grid-cols-2 gap-8 mt-4">
          {volumeData.map((market, index) => (
            <div key={index} className="space-y-1 text-black-500">
              <p className="text-xl flex items-center space-x-2">
              <span>{market[0]}</span>
              </p>
              <p className="font-bold">{(market[1]).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Liquidity Data Section */}
      <div className="p-2 mt-8">
        <h2 className="text-xl font-bold text-gray-600">Liquidity Data</h2>
        <div className="grid grid-cols-2 gap-8 mt-4">
          {liquidityData.map((market, index) => (
            <div key={index} className="space-y-1 text-black-500">
              <p className="text-xl flex items-center space-x-2">
              <span>{market[0]}</span>
              </p>
              <p className="font-bold">{(market[1]).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;
