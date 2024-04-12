import { Card, Metric, Text } from "@tremor/react";
import React from "react";
import fetchABSIndicatorAPI from "@/app/services/fetchABSIndicatorAPI";

interface DataTileProps {
  dataflowIdentifier: string;
  version: string;
  format: string;
}

interface DataPointTypes {
  observations: {
    [key: string]: number[]; // This assumes keys will always be strings and values will be arrays of numbers
  };
  label: string;
  index: number;
}

const DataTile: React.FC<DataTileProps> = async ({
  version,
  dataflowIdentifier,
  format,
}) => {
  // // build the endpoint
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
    label: datapoints[index],
  }));

  // selected data for display
  const selectedData = labelledData[0]; // adjust based on metric reqd for display

  // extract a certain key value
  const headlineTitle = Object.keys(selectedData)[0];
  const headlineValue = selectedData[headlineTitle]["0"][0]; // adjust depending on value type reqd

  return (
    <Card
      className="mx-auto w-full flex flex-grow"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {headlineTitle}
      </p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {headlineValue}
      </p>
    </Card>
  );
};
export default DataTile;
