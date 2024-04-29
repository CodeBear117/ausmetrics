"use client";

import { Card } from "@tremor/react";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";

interface DataCheckDisplayProps {
  headlineTitle: string;
  formattedHeadlineValue: string;
}

const handleClick = () => {
  console.log("clicked!");
};

const DataTile: React.FC<DataCheckDisplayProps> = ({
  headlineTitle,
  formattedHeadlineValue,
}) => {
  return (
    <Card
      onClick={handleClick}
      className="p-3 min-w-24 max-w-full min-h-32 sm:min-h-36 overflow-x-scroll hover:cursor-pointer"
      decoration="top"
      decorationColor="indigo"
    >
      <div className="flex justify-between gap-2">
        <p
          className="h-20 text-tremor-default text-tremor-content dark:text-dark-tremor-content line-clamp"
          style={{ "--webkit-line-clamp": 4 } as React.CSSProperties}
        >
          {headlineTitle}
        </p>
        <BsInfoCircle className="min-w-[30px] hover:bg-green-500 text-tremor-content dark:text-dark-tremor-content" />
      </div>
      <p className="text-xl sm:text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {formattedHeadlineValue}
      </p>
    </Card>
  );
};

export default DataTile;
