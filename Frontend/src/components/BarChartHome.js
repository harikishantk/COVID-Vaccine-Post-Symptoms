import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

// Dummy Data
const data = [
  {
    name: "Anaphylaxis",
    Pfizer: 40,
    Moderna: 24,
  },
  {
    name: "Fatigue",
    Pfizer: 30,
    Moderna: 13,
  },
  {
    name: "Muscle pain",
    Pfizer: 20,
    Moderna: 98,
  },
  {
    name: "Fever",
    Pfizer: 27,
    Moderna: 39,
  },
  {
    name: "Pain",
    Pfizer: 18,
    Moderna: 48,
  },
];



const BarChartHome = () => {
  return (
    <BarChart width={500} height={300} data={data} stackOffset="expand">
      <XAxis dataKey="name" />
      <YAxis
        tickFormatter={tick => `${tick}%` }
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="Pfizer" fill="#8884d8" />
      <Bar dataKey="Moderna" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartHome;
