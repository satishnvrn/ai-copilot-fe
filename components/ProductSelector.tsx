"use client";

import React from "react";
import { Dropdown } from "flowbite-react";

const ProductSelector: React.FC = () => {
  return (
    <div>
      <Dropdown label="Select a product" dismissOnClick={false}>
        <Dropdown.Header>
          <span className="block text-sm">Select a product from the list</span>
        </Dropdown.Header>
        <Dropdown.Item>First Product</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default ProductSelector;
