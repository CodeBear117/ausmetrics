// This component generates a graph to display time series data from an ABS API endpoint. It accepts props that are used to generate the endpoint and passes that endpoint to the API fetch function. The response data is formatted into a graph.

// The endpoint used is data/ABS,ABS_PERSONS_PROJ,1.0.0/0.TT.16.2.A/?startPeriod=2016

// must work on client side for useEffect to work.
"use client";

import { AreaChart, Card } from "@tremor/react";
import React, { useEffect, useState } from "react";
import fetchFromAPI from "@/fetchFromAPI";
import { ApiResponse } from "../types/ApiResponse";
import { valueFormatter } from "../utils/valueFormatter";
import { dataTransforms } from "../utils/dataTransforms";

// define types for the endpoint data.
interface EndpointProps {
  dataflowIdentifier: string;
  dataKey: string;
  startPeriod: string;
  endPeriod: string | null;
  detail: string | null;
  dimensionAtObservation: string | null;
}

// define props for the chart data.
interface ChartDataPoint {
  x: string;
  y: number;
}

// function to request data from the API by building up the endpoint and sending it to the fetchFromAPI function.
const requestData = async ({
  startPeriod,
  endPeriod,
  detail,
  dimensionAtObservation,
  dataflowIdentifier,
  dataKey,
}: EndpointProps) => {
  let queryParams = [
    startPeriod ? `startPeriod=${startPeriod}` : "",
    endPeriod ? `endPeriod=${endPeriod}` : "",
    detail ? `detail=${detail}` : "",
    dimensionAtObservation
      ? `dimensionAtObservation=${dimensionAtObservation}`
      : "",
  ]
    .filter(Boolean)
    .join("&");
  let endpoint = `data/${dataflowIdentifier}/${dataKey}/${
    queryParams ? `?${queryParams}` : ""
  }`;

  const data = await fetchFromAPI(endpoint); // endpoint: data/ABS,ABS_PERSONS_PROJ,1.0.0/0.TT.16.2.A/?startPeriod=2016
  return data;
};

// This component uses the requestData function above to:
// - make an api call,
// - transform the useful data, and
// - present the data graphically.
const DataPlot_PopnAus2016 = ({
  startPeriod,
  endPeriod,
  detail,
  dimensionAtObservation,
  dataflowIdentifier,
  dataKey,
}: EndpointProps) => {
  // define states for the data
  const [rawdata, setRawData] = useState<ApiResponse | null>(null);
  const [dataset, setDataset] = useState({});
  const [datainfo, setDatainfo] = useState<string[]>([]);
  const [transformedData, setTransformedData] = useState<{
    [year: string]: number;
  }>({});
  const [chartdata, setChartdata] = useState<ChartDataPoint[]>([]);

  // On rerender, we want to request data from the correct endpoint and set the states based on the new data
  useEffect(() => {
    // this function will execute on re-render
    const fetchData = async () => {
      const data = await requestData({
        startPeriod,
        endPeriod,
        detail,
        dimensionAtObservation,
        dataflowIdentifier,
        dataKey,
      });
      setRawData(data);

      // if data was returned from this endpoint, then extract and transform useful data
      if (data) {
        const dataset = data.data.dataSets[0].series["0:0:0:0:0"].observations;
        const datainfo = [
          data.data.structure.name, // chart title
          data.data.structure.description, // chart description
          data.data.structure.dimensions.series[4].values[0].id, // polling frequency
          //data.data.structure.dimensions.observation[0].name, // xLabel
          //data.data.structure.attributes.dataSet[0].values[0].name, // yLabel
        ];
        const frequency = datainfo[2];
        console.log(frequency);
        const chartdata = dataTransforms({ frequency, dataset, startPeriod });

        // set states
        setDataset(dataset);
        setDatainfo(datainfo);
        setTransformedData(transformedData);
        setChartdata(chartdata);
      }
    };

    // execute the function on first render, re-render depends on changes to the endpoint parameters
    fetchData();
  }, [
    startPeriod,
    endPeriod,
    detail,
    dimensionAtObservation,
    dataflowIdentifier,
    dataKey,
  ]);

  // render a chart using Tremor/React Library components
  return (
    <>
      <Card className="rounded-lg max-w-xl mx-auto w-full">
        <h2 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {datainfo[0]}
        </h2>
        <AreaChart
          className="mt-4 h-56"
          data={chartdata}
          index={"x"}
          categories={["y"]}
          colors={["blue"]}
          yAxisWidth={85}
          valueFormatter={valueFormatter}
        />
        <p className="pt-5 text-xs font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {datainfo[1]}
        </p>
      </Card>
    </>
  );
};

export default DataPlot_PopnAus2016;
