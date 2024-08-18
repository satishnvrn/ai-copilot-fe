"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LineChartWidgetProps {
  data: any;
  width: number;
  height: number;
  xKey: string;
  yKeys: { name: string; color?: string }[];
}

const LineChartWidget: React.FC<LineChartWidgetProps> = ({
  data,
  width,
  height,
  xKey,
  yKeys,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {yKeys.map((key) => (
          <Line
            key={key.name}
            type="monotone"
            dataKey={key.name}
            stroke={key.color || "#8884d8"}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartWidget;
