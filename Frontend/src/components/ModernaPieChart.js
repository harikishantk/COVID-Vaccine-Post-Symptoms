import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  labelTop: {
    transform: 'translateY(-10px)'
  }
})

const data = [
  { name: "Side Effects Reported", value: 123700 },
  { name: "Vaccine Administered", value: 356700 },
];

const COLORS = ["#C04018", "#3C7103"];

const ModernaPieChart = () => {
  const classes = useStyles()

  return (
    <PieChart width={200} height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value="Moderna"
          position="centerTop"
          fill="#C5DFF8"
          style={{
            fontSize: "12pt",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        />
                <Label
          value={`${20}%`}
          position="centerBottom"
          fill="#C5DFF8"
          style={{
            fontSize: "16pt",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
          className={classes.labelTop}
        />
      </Pie>
      <Legend/>
    </PieChart>
  );
};

export default ModernaPieChart;
