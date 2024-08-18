"use client";

import React from 'react';
import { Card } from "flowbite-react";

interface WizardCardProps {
  children: React.ReactNode
  [key: string]: any
}

const WizardCard: React.FC<WizardCardProps> = ({ title, children, ...props }) => {
  return (
    <Card className='max-w-screen-lg'>
      <h1 className='text-xl font-bold tracking-tight text-gray-900'>{title}</h1>
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child, props) : child
      )}
    </Card>
  )
}

export default WizardCard
