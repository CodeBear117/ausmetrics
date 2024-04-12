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
      <TileDataCheck dataflowIdentifier="AWE_H" version="v1" format="json" />
      <TileDataCheck
        dataflowIdentifier="BA_GCCSA_H"
        version="v1"
        format="json"
      />
      <TileDataCheck dataflowIdentifier="BOP_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="CAPEX_H" version="v1" format="json" />
      <TileDataCheck
        dataflowIdentifier="CAPEX_EST_H"
        version="v1"
        format="json"
      />
      <TileDataCheck dataflowIdentifier="CPI_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="CPI_M_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="CWD_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="GDPE_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="HSI_M_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="ITGS_H" version="v1" format="json" />
      <TileDataCheck
        dataflowIdentifier="ITPI_EXP_H"
        version="v1"
        format="json"
      />
      <TileDataCheck
        dataflowIdentifier="ITPI_IMP_H"
        version="v1"
        format="json"
      />
      <TileDataCheck dataflowIdentifier="JV_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="LEND_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="LF_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="MBTI_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="PPI_FD_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="QBIS_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="RT_H" version="v1" format="json" />
      <TileDataCheck dataflowIdentifier="WPI_H" version="v1" format="json" />
      <TileDataCheck
        dataflowIdentifier="BUILDING_ACTIVITY_H"
        version="v1"
        format="json"
      />

      {/*
      <PlotDataCheck // this component can be used to view the raw data
        dataflowIdentifier="dataflows"
        dataKey=""
        startPeriod=""
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      /> */}
    </main>
  );
}

// A list of all available dataflows and their identifiers can be returned using:
//https://indicator.api.abs.gov.au/v1/dataflows/json
