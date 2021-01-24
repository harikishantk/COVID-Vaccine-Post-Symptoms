import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  } from 'recharts';

 // Dummy Data
  const data = [
    {
      name: 'Age 0-10', Pfizer: 4000, Moderna: 2400,
    },
    {
      name: 'Age 10-20', Pfizer: 3000, Moderna: 1398,
    },
    {
      name: 'Age 30-40', Pfizer: 2000, Moderna: 9800,
    },
    {
      name: 'Age 50-60', Pfizer: 2780, Moderna: 3908,
    },
    {
      name: 'Age 70-80', Pfizer: 1890, Moderna: 4800,
    },
    {
      name: 'Age 90-100', Pfizer: 2390, Moderna: 3800,
    },
    {
      name: 'Age 100+', Pfizer: 3490, Moderna: 4300
    },
  ];

const BarChartHome = () => {
    return (
        <BarChart
        width={400}
        height={300}
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'pv of page', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Pfizer" fill="#8884d8" />
        <Bar dataKey="Moderna" fill="#82ca9d" />
      </BarChart>
    )
}

export default BarChartHome
