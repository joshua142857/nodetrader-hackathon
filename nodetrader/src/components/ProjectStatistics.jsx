import React, { useState } from 'react';
import Chart from 'react-apexcharts'; // Use react-apexcharts

const ProjectStatistics = () => {
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
        name: 'New users',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB',
      },
    ],
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
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
      name: 'New users',
      data: [6500, 6418, 6456, 6526, 6356, 6456],
    },
  ]);

  return (
    <div className="relative z-10">
      <div className="max-w-sm w-full bg-white rounded-xl p-4 md:p-6 relative z-20">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-500 dark:text-black pb-2">32.4k</h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
          </div>
          <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
            12%
            <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
            </svg>
          </div>
        </div>
       
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height="150" 
          width="100%" 
        />
      </div>
    </div>
  );
};

export default ProjectStatistics;
