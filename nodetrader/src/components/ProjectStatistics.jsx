import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ProjectStatistics = ({ expanded }) => {
  const [chartOptions] = useState({
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      responsive: true,
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
    },
    series: [
      {
        name: 'Dollars',
        data: [6500, 7130, 6427, 6839, 6356, 7280],
        color: '#1A56DB',
      },
    ],
    xaxis: {
      categories: ['14 October', '15 October', '16 October', '17 October', '18 October', '19 October', '20 October'],
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  });

  const [chartSeries] = useState([
    {
      name: 'Dollars',
      data: [6500, 7130, 6427, 6839, 6356, 7280],
    },
  ]);

  return (
    <div className="relative z-10">
      <div className="w-full bg-white rounded-xl p-4 md:p-6 relative z-20">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-500 dark:text-black pb-2">32.4k</h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Profit and Loss</p>
          </div>
          <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
            12%
            <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
            </svg>
          </div>
        </div>
       
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={expanded ? "300" : "150"} 
          width="100%" 
        />
      </div>
    </div>
  );
};

export default ProjectStatistics;
