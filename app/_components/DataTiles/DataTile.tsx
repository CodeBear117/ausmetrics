// This component generates a tile to display a headline indicator from an ABS API endpoint. It accepts props that are used to generate the endpoint and passes that endpoint to the API fetch function. The response data is formatted into a tile.

import { Card, Metric, Text } from "@tremor/react";
import React from "react";
import fetchABSIndicatorAPI from "@/app/services/fetchABSIndicatorAPI";
import { formatData } from "@/app/utils/formatData";

// // define types for the endpoint data.
interface DataTileProps {
  dataflowIdentifier: string; // headline dataflow
  version: string;
  format: string;
  measure: number; // metric within dataflow array
  observation: number; // observation type within metric
  symbol: string; // value format of metric
}

// define types of props for the tile data.
interface DataPointTypes {
  observations: {
    [key: string]: number[];
  };
  label: string;
  index: number;
}

// This component:
// - makes an api call,
// - transforms to useful data, and
// - presents the data in a tile.
const DataTile: React.FC<DataTileProps> = async ({
  version,
  dataflowIdentifier,
  format,
  measure,
  observation,
  symbol,
}) => {
  // build the endpoint
  let endpoint = `${version}/data/${dataflowIdentifier}/${format}`;

  // fetch data from endpoint
  const data = await fetchABSIndicatorAPI(endpoint);

  // extract useful data
  const dataset = [data.dataSets[0].series];
  const datainfo = [
    data.structure.name, // title of API response
    data.structure.dimensions.series[0].values, // headline data labels array
  ];
  const valuesArray: DataPointTypes[] = Object.values(dataset[0]);
  const observationsArray = valuesArray.map((item) => item.observations);

  // transform to useful  data
  const datalabels = datainfo[1].map((item: { name: string }) => item.name); // labels
  const datapoints = observationsArray.map((observations) => observations); // observations

  // combined dataLabels with corrosponding datapoints
  const labelledData = datalabels.map((label: string, index: number) => ({
    [label]: datapoints[index],
  }));

  // selected data for display
  const selectedData = labelledData[measure];

  // extract a certain key value
  const headlineTitle = Object.keys(selectedData)[0];
  const headlineValue = selectedData[headlineTitle][`${observation}`][0];

  // format value
  const formattedHeadlineValue = formatData(headlineValue, symbol);

  // render a tile using Tremor/React Library components
  return (
    <Card
      className="p-3 min-w-24 max-w-full min-h-60 sm:min-h-36"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {headlineTitle}
      </p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {formattedHeadlineValue}
      </p>
    </Card>
  );
};
export default DataTile;
