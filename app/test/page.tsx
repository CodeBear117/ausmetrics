// This route provides the developer with a way to view raw API data

import DataPlot from "../_components/DataPlots/DataPlot";
import PlotDataCheck from "../_components/DataPlots/PlotDataCheck";
import TileDataCheck from "../_components/DataTiles/TileDataCheck";

export default function About() {
  return (
    <main className="text-white">
      <p>Test</p>

      {/* <DataPlot
        dataflowIdentifier="ABS,CPI,1.1.0"
        dataKey="1.10001.10.50.Q"
        startPeriod="1996-Q1"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      />

      <DataPlot
        dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
        dataKey="0.TT.16.2.A"
        startPeriod="2016"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      /> */}
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

      <PlotDataCheck // this component can be used to view the raw data
        dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
        dataKey="0.TT.16.2.A"
        startPeriod="2016"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      />
    </main>
  );
}

// A list of all available dataflows and their identifiers can be returned using:
//https://indicator.api.abs.gov.au/v1/dataflows/json
