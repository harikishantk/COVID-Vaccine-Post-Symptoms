import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { name: "Vaccine Administered", value: 123700 },
  { name: "Vaccine Left", value: 356700 },
];

const COLORS = ["#FFBB28", "#C04018"];

const ModernaPieChart = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value="Moderna"
          position="center"
          fill="#C5DFF8"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        />
      </Pie>
    </PieChart>
  );
};

export default ModernaPieChart;
