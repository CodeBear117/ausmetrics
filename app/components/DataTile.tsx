// This component renders a tile that contains a single statistic. Its data is populated from the ServerTileData component that performs the backend functionality and returns the title and value that is then used by this component.

// use client to ensure tile is interactive
"use client";

import { Card } from "@tremor/react";
import { BsInfoCircle } from "react-icons/bs";

interface DataCheckDisplayProps {
  headlineTitle: string;
  formattedHeadlineValue: string;
}

const DataTile: React.FC<DataCheckDisplayProps> = ({
  headlineTitle,
  formattedHeadlineValue,
}) => {
  return (
    <Card
      className="p-3 min-w-24 max-w-full min-h-32 sm:min-h-36 overflow-x-scroll"
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
        <BsInfoCircle className="min-w-[30px] hover:cursor-pointer text-tremor-content dark:text-dark-tremor-content" />
      </div>
      <p className="text-xl sm:text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {formattedHeadlineValue}
      </p>
    </Card>
  );
};

export default DataTile;
