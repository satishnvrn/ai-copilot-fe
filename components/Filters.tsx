"use client";

import React from "react";
import { DEFECTS } from "@/utils/constants";
import { FiltersType } from "@/utils/types/filterTypes";
import { Tabs, RangeSlider, Dropdown, Label } from "flowbite-react";

interface FiltersProps {
  filtersState: FiltersType;
  loading: boolean;
}

export default function Filters({ filtersState }: FiltersProps) {
  return (
    <div className="flex flex-row border-gray-400 border-t pt-5 items-center px-5 mb-5 relative">
      <p className="mr-5 self-center text-sm">Filter By</p>

      <Tabs aria-label="Default tabs" variant="default" className="mr-5">
        <Tabs.Item
          active={filtersState.periodFilter === "1d"}
          onClick={() => filtersState.setPeriodFilter("1d")}
          title="1 Day"
        />
        <Tabs.Item
          active={filtersState.periodFilter === "1w"}
          onClick={() => filtersState.setPeriodFilter("1w")}
          title="1 Week"
        />
        <Tabs.Item
          active={filtersState.periodFilter === "1m"}
          onClick={() => filtersState.setPeriodFilter("1m")}
          title="1 Month"
        />
      </Tabs>

      <div className="max-h-10 self-center mr-5">
        <Dropdown
          label={filtersState.defectFilter || "All types of defects"}
          dismissOnClick={false}
        >
          <Dropdown.Header>
            <span className="block text-sm font-bold">
              Select type of defect
            </span>
          </Dropdown.Header>
          {DEFECTS.map((defect) => (
            <Dropdown.Item
              onClick={() => filtersState.setDefectFilter(defect)}
              key={defect}
            >
              {defect.toLocaleUpperCase()}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>

      <div>
        <div className="mb-1 block -mt-1">
          <Label
            htmlFor="quality-filter"
            value={`Quality: ${filtersState.minQualityFilter}`}
          />
        </div>
        <RangeSlider
          id="quality-filter"
          className="-mt-2"
          sizing="sm"
          value={filtersState.minQualityFilter}
          onChange={(e) =>
            filtersState.setMinQualityFilter(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
}
