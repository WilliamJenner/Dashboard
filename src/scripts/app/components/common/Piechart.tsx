import * as React from "react";
import { PieChart as MinimalPieChart } from "react-minimal-pie-chart";
import { Data } from "react-minimal-pie-chart/types/commonTypes";

interface IPiechartProps {
  data: Data;
}

const PieChart: React.FC<IPiechartProps> = (props) => {
  return (
    <MinimalPieChart
      segmentsStyle={{
        border: "10px solid black",
      }}
      data={props.data}
      label={(labelProps) => {
        return (
          <svg>
            <text
              dominant-baseline="central"
              x={labelProps.x}
              y={labelProps.y}
              dx={labelProps.dx}
              dy={labelProps.dy}
              text-anchor="middle"
              fill={"white"}
              stroke={"black"}
              strokeWidth={"0.3px"}
              fontSize={"14px"}
              fontWeight={500}
            >
              {labelProps.dataEntry.title}
            </text>
          </svg>
        );
      }}
      labelStyle={{
        fontSize: "10px",
        fill: "white",
        textShadow: "#000 0px 0px 5px",
      }}
    ></MinimalPieChart>
  );
};

export default PieChart;
