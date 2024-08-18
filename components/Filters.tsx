"use client";

import { PART_MODELS } from "@/constants";
import { Tabs, RangeSlider, Dropdown, Label } from "flowbite-react";

export default function Filters() {
  return (
    <div className="flex flex-row border-gray-400 border-t pt-5 items-center px-5">
      <p className="mr-5 self-center text-sm">Filter By</p>

      <Tabs aria-label="Default tabs" variant="default" className="mr-5">
        <Tabs.Item active title="3 Months" />
        <Tabs.Item title="6 Months" />
        <Tabs.Item title="1 Year" />
      </Tabs>

      <div className="max-h-10 self-center mr-5">
        <Dropdown label="All types of defects" dismissOnClick={false}>
          <Dropdown.Header>
            <span className="block text-sm font-bold">
              Select type of defect
            </span>
          </Dropdown.Header>
          {PART_MODELS.map((model) => (
            <Dropdown.Item key={model.name}>{model.name}</Dropdown.Item>
          ))}
        </Dropdown>
      </div>

      <div>
        <div className="mb-1 block">
          <Label htmlFor="quality-filter" value="Quality" />
        </div>
        <RangeSlider id="quality-filter" sizing="sm" />
      </div>
    </div>
  );
}
