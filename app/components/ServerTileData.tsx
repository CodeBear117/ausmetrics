// This component generates a tile to display a headline indicator from an ABS API endpoint. It accepts props that are used to generate the endpoint and passes that endpoint to the API fetch function. The formatted response info is passed to the client component for rendering.

import React from "react";
import fetchABSIndicatorAPI from "@/app/services/fetchABSIndicatorAPI";
import { formatData } from "@/app/utils/formatData";
import DataTile from "./DataTile";

// // define types for the endpoint data.
interface DataTileProps {
  dataflowIdentifier: string; // headline dataflow
  version: string;
  format: string;
  measure: number; // metric within dataflow array
  observation: number; // observation type within metric
  symbol: string; // value format of metric
  customTitle: string | null;
}

// define types of props for the tile data.
interface DataPointTypes {
  observations: {
    [key: string]: number[];
  };
}

// This component:
// - makes an api call,
// - transforms to useful data, and
// - presents the data in a tile.
const ServerTileData: React.FC<DataTileProps> = async ({
  version,
  dataflowIdentifier,
  format,
  measure,
  observation,
  symbol,
  customTitle,
}) => {
  // build the endpoint
  const endpoint = `${version}/data/${dataflowIdentifier}/${format}`;

  // fetch data from endpoint
  const response = await fetchABSIndicatorAPI(endpoint);

  // extract useful data
  const dataset = [response.dataSets[0].series];
  const datainfo = [
    response.structure.name, // title of API response
    response.structure.dimensions.series[0].values, // headline data labels array
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
  let headlineTitle = Object.keys(selectedData)[0];
  const headlineValue = selectedData[headlineTitle][`${observation}`];

  if (customTitle) {
    headlineTitle = customTitle;
  }

  // format value
  const formattedHeadlineValue = formatData(headlineValue, symbol);

  // return the useful info (to be used client side)
  return (
    <DataTile
      headlineTitle={headlineTitle}
      formattedHeadlineValue={formattedHeadlineValue}
    />
  );
};

export default ServerTileData;
