// This component generates a graph to display time series data from an ABS API endpoint. It accepts props that are used to generate the endpoint and passes that endpoint to the API fetch function. The response data is formatted into a graph.

// must work on client side for useEffect to work.
"use client";

import { AreaChart, Card } from "@tremor/react";
import React, { useEffect, useState } from "react";
import fetchABSDataAPI from "@/app/services/fetchABSDataAPI";
import { valueFormatter } from "../../utils/valueFormatter";
import { dataTransforms } from "../../utils/dataTransforms";
import { findLargestY } from "../../utils/findLargestY";

// define types for the endpoint data.
interface DataPlotProps {
  dataflowIdentifier: string;
  dataKey: string;
  startPeriod: string;
  endPeriod: string | null;
  detail: string | null;
  dimensionAtObservation: string | null;
}

// define type for the chart data.
type DataPointTypes = {
  [key: string]: string | number;
};

// function to request data from the API by building up the endpoint and sending it to the fetchABSDataAPI function.
const requestData = async ({
  startPeriod,
  endPeriod,
  detail,
  dimensionAtObservation,
  dataflowIdentifier,
  dataKey,
}: DataPlotProps) => {
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
  const data = await fetchABSDataAPI(endpoint);
  return data;
};

// This component uses the requestData function above to:
// - make an api call,
// - transform to useful data, and
// - present the data graphically.
const DataPlot = ({
  startPeriod,
  endPeriod,
  detail,
  dimensionAtObservation,
  dataflowIdentifier,
  dataKey,
}: DataPlotProps) => {
  // define states for the data
  const [datainfo, setDatainfo] = useState<string[]>([]);
  let [xLabel, setXLabel] = useState("xLabel"); // Initialize to default or fetch from settings
  let [yLabel, setYLabel] = useState("yLabel"); // Initialize to default or fetch from settings
  const [chartdata, setChartData] = useState<DataPointTypes[]>([]);
  const [yAxisWidth, setYAxisWidth] = useState<number>();
  const [transformedData, setTransformedData] = useState<{
    [year: string]: number;
  }>({});

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

      // if data was returned from this endpoint, then extract and transform to useful plot data
      if (data) {
        const dataset = data.data.dataSets[0].series["0:0:0:0:0"].observations;
        const datainfo = [
          data.data.structure.name, // chart title
          data.data.structure.description, // chart description
          data.data.structure.dimensions.series[4].values[0].id, // polling frequency
          data.data.structure.dimensions.observation[0].name, // xLabel
          ,
        ];

        // set chart labels, handle errors related to API Beta
        xLabel = datainfo[3];
        let yLabel;
        try {
          // Attempt to access the primary path
          yLabel = data.data.structure.attributes.dataSet[0].values[0].name;
        } catch (error) {
          // If an error occurs, use the alternate path
          yLabel = data.data.structure.attributes.series[0].values[0].name;
        }

        // transform data into chartdata (x,y)
        const frequency = datainfo[2];
        const chartdata = dataTransforms({
          frequency,
          dataset,
          startPeriod,
          xLabel,
          yLabel,
        });

        // set width of y-axis
        const yAxisWidth =
          findLargestY(chartdata, yLabel).toString().replace("-", "").length *
          10;

        // set states for render
        setDatainfo(datainfo);
        setTransformedData(transformedData);
        setXLabel(xLabel);
        setYLabel(yLabel);
        setYAxisWidth(yAxisWidth);
        setChartData(
          dataTransforms({
            frequency: datainfo[2],
            dataset,
            startPeriod,
            xLabel,
            yLabel,
          })
        );
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
      <Card className="rounded-lg w-full min-h-96">
        <h2 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {datainfo[0]}
        </h2>
        <AreaChart
          className="mt-4 h-56"
          data={chartdata}
          index={xLabel}
          categories={[yLabel]}
          colors={["blue"]}
          yAxisWidth={yAxisWidth}
          valueFormatter={valueFormatter}
        />
        <p className="pt-5 text-xs font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {datainfo[1]}
        </p>
      </Card>
    </>
  );
};

export default DataPlot;
