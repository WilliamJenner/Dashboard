import * as React from "react";
import { PieChart as MinimalPieChart } from "react-minimal-pie-chart";
import { Data } from "react-minimal-pie-chart/types/commonTypes";

const PieChart: React.FC = () => {
  const data: Data = [
    { title: "Test", value: 10, color: "green" },
    { title: "second", value: 20, color: "blue" },
    { title: "third", value: 30, color: "red" },
  ];

  return <MinimalPieChart data={data}></MinimalPieChart>;
};

export default PieChart;
