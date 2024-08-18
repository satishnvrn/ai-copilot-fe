"use client";

import React from "react";
import { Table } from "flowbite-react";

interface DataGridWidgetProps {
  data: any[];
  headers: string[];
}

const DataGridWidget: React.FC<DataGridWidgetProps> = ({ data, headers }) => {
  return (
    <div className="overflow-x-auto w-full h-full">
      <Table className="min-h-[300px]">
        <Table.Head>
          {headers.map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((row, rowIndex) => (
            <Table.Row
              key={rowIndex}
              className="bg-white"
            >
              {headers.map((header, cellIndex) => (
                <Table.Cell key={cellIndex}>{row[header]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default DataGridWidget;
