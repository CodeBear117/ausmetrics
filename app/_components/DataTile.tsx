import { Card, Metric, Text } from "@tremor/react";

export default function DataTile({}) {
  return (
    <Card
      className="mx-auto w-full flex flex-grow"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Unemployment Rate
      </p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        4.5%
      </p>
    </Card>
  );
}
