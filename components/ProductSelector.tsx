"use client";

import React from "react";
import { Dropdown } from "flowbite-react";
import { PART_MODELS } from "@/utils/constants";

const ProductSelector: React.FC = () => {
  return (
    <div>
      <Dropdown label={PART_MODELS[0].name} dismissOnClick={false}>
        <Dropdown.Header>
          <span className="block text-sm font-bold">Select a product from the list</span>
        </Dropdown.Header>
        {PART_MODELS.map(model => (<Dropdown.Item key={model.name}>{model.name}</Dropdown.Item>))}
      </Dropdown>
    </div>
  );
};

export default ProductSelector;
