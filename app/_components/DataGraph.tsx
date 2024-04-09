// This component generates a graph to display time series data from an ABS API endpoint. It accepts props that are used to generate the endpoint and passes that endpoint to the API fetch function. The response data is formatted into a graph.

import React from "react";
import fetchFromAPI from "@/fetchFromAPI";

// assign types for path params based on template URL provided by ABS Docs
interface EndpointProps {
  dataflowIdentifier: string;
  dataKey: string;
  startPeriod: string;
  endPeriod: string | null;
  detail: string | null;
  dimensionAtObservation: string | null;
}

const DataGraph: React.FC<EndpointProps> = async ({
  dataflowIdentifier,
  dataKey,
  startPeriod,
  endPeriod,
  detail,
  dimensionAtObservation,
}) => {
  // build the endpoint
  let endpoint = `data/${dataflowIdentifier}/${dataKey}/`;

  // account for cases where data might not be provided
  if (startPeriod) {
    endpoint += `?startPeriod=${startPeriod}`;
  }

  if (endPeriod) {
    endpoint += `&endPeriod=${endPeriod}`;
  }

  if (detail) {
    endpoint += `&detail=${detail}`;
  }

  if (dimensionAtObservation) {
    endpoint += `&dimensionAtObservation=${dimensionAtObservation}`;
  }

  // fetch data from endpoint
  const data = await fetchFromAPI(endpoint); // all raw data from call

  // extract dataset from raw response
  const dataset = data.data.dataSets[0].series["0:0:0:0:0"].observations;

  // extract dataset info from raw response
  const datainfo = [data.data.structure.name, data.data.structure.description];

  // apply transformations to clean up the raw data
  const transformedData: { [year: string]: number } = {};

  Object.keys(dataset).forEach((key) => {
    const year = parseInt(startPeriod) + parseInt(key, 10);
    transformedData[year.toString()] = dataset[key][0]; // Extract the single number from the array
  });

  const x: string[] = Object.keys(transformedData);
  const y: number[] = Object.values(transformedData);

  return (
    <>
      <h2>Actual Data:</h2>
      <p>{JSON.stringify(dataset)}</p>
      <h2>Data Info:</h2>
      <p>{JSON.stringify(datainfo)}</p>
      <h2>Transformed Data:</h2>
      <p>{JSON.stringify(transformedData)}</p>
      <h2>X Data:</h2>
      <p>{JSON.stringify(x)}</p>
      <h2>Y Data:</h2>
      <p>{JSON.stringify(y)}</p>
    </>
  );
};

export default DataGraph;
