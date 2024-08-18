"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface BarChartWidgetProps {
  data: any[];
  width: number;
  height: number;
  xKey: string;
  yKeys: { name: string; color?: string }[];
}

const BarChartWidget: React.FC<BarChartWidgetProps> = ({
  data,
  width,
  height,
  xKey,
  yKeys,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
          <Bar key={key.name} dataKey={key.name} fill={key.color || "#8884d8"} />
        ))}
        {/* <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        /> */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWidget;
