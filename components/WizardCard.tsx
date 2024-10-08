"use client";

import React from 'react';
import { Card } from "flowbite-react";

interface WizardCardProps {
  children: React.ReactNode;
  title: string;
}

const WizardCard: React.FC<WizardCardProps> = ({ title, children }) => {
  return (
    <Card className="max-w-screen-lg min-w-[500] relative min-h-[350px]">
      <h1 className='text-xl font-bold tracking-tight text-gray-900'>{title}</h1>
      <div className='relative'>
        {children}
      </div>
    </Card>
  )
}

export default WizardCard
