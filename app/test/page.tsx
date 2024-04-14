// This route provides the developer with a way to view raw API data

import DataPlot from "../_components/DataPlots/DataPlot";
import PlotDataCheck from "../_components/DataPlots/PlotDataCheck";
import TileDataCheck from "../_components/DataTiles/TileDataCheck";

import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    Running: 167,
  },
  {
    date: "Feb 23",
    Running: 125,
  },
  {
    date: "Mar 23",
    Running: 156,
  },
  {
    date: "Apr 23",
    Running: 165,
  },
  {
    date: "May 23",
    Running: 153,
  },
  {
    date: "Jun 23",
    Running: 124,
  },
];

export default function About() {
  return (
    <main className="text-white">
      <p>Test</p>

      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Average BPM
      </h3>
      {/* <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={["Running"]}
        colors={["blue"]}
        yAxisWidth={30}
      /> */}
      <DataPlot
        dataflowIdentifier="ABS,CPI,1.1.0"
        dataKey="1.10001.10.50.Q"
        startPeriod="1996-Q1"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      />

      <PlotDataCheck
        dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
        dataKey="0.TT.16.2.A"
        startPeriod="2016"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      />
      {/* <TileDataCheck
        dataflowIdentifier="BOP_H"
        version="v1"
        format="json"
        observation={0}
        measure={0}
      />
      <TileDataCheck
        dataflowIdentifier="RT_H"
        version="v1"
        format="json"
        observation={0}
        measure={0}
      /> */}

      {/* <PlotDataCheck // this component can be used to view the raw data
        dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
        dataKey="0.TT.16.2.A"
        startPeriod="2016"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      /> */}
    </main>
  );
}

// A list of all available dataflows and their identifiers can be returned using:
//https://indicator.api.abs.gov.au/v1/dataflows/json
