// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile and DataPlot_i components

//"use client";

// import React from "react";
import DataPlot from "./_components/DataPlots/DataPlot";
import DataPlot_M13 from "./_components/DataPlots/DataPlot_M13_197802";
import DataPlot_POPN_2016 from "./_components/DataPlots/DataPlot_POPN_2016";
import DataPlot_deltaCPI_1996Q1 from "./_components/DataPlots/DataPlot_deltaCPI_1996Q1";
import DataTile from "./_components/DataTiles/DataTile";
import DataTile_currentBOP from "./_components/DataTiles/DataTile_currentBOP";
import DataTile_currentCPI from "./_components/DataTiles/DataTile_currentCPI";
import DataTile_currentGDP from "./_components/DataTiles/DataTile_currentGDP";
import DataTile_currentRT from "./_components/DataTiles/DataTile_currentRT";

const Dashboard = () => {
  return (
    <main className="text-tremor-content-strong dark:text-dark-tremor-content-strong p-4">
      <h2 className="font-bold text-xl mt-4 mb-4">Headline Stats</h2>
      <div className="grid grid-cols-1 min-[280px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="AWE_H"
            format="json"
            measure={4}
            observation={0}
            symbol="$"
          />
        </div>
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="LF_H"
            format="json"
            measure={2}
            observation={1}
            symbol="%"
          />
        </div>
        <div>
          <DataTile_currentCPI
            version="v1"
            dataflowIdentifier="CPI_H"
            format="json"
            measure={1}
            observation={0}
            symbol="%"
          />
        </div>
        <div>
          <DataTile_currentGDP
            version="v1"
            dataflowIdentifier="GDPE_H"
            format="json"
            measure={1}
            observation={0}
            symbol="%"
          />
        </div>
        <div>
          <DataTile_currentBOP
            version="v1"
            dataflowIdentifier="BOP_H"
            format="json"
            measure={1}
            observation={1}
            symbol="$"
          />
        </div>
        <div>
          <DataTile_currentRT
            version="v1"
            dataflowIdentifier="RT_H"
            format="json"
            measure={2}
            observation={2}
            symbol="%"
          />
        </div>
      </div>
      <h2 className="text-inter font-bold text-xl mt-8 mb-4">
        Featured Charts
      </h2>
      <div className="grid grid-cols-1 min-[767px]:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <DataPlot_deltaCPI_1996Q1
            dataflowIdentifier="ABS,CPI,1.1.0"
            dataKey="3.10001.10.50.Q"
            startPeriod="1996-Q1"
            endPeriod={null}
            detail={null}
            dimensionAtObservation={null}
          />
        </div>
        <div>
          <DataPlot
            dataflowIdentifier="ABS,CPI,1.1.0"
            dataKey="1.10001.10.50.Q"
            startPeriod="1996-Q1"
            endPeriod={null}
            detail={null}
            dimensionAtObservation={null}
          />
        </div>
        <div>
          <DataPlot_M13
            dataflowIdentifier="ABS,LF,1.0.0"
            dataKey="M13.3.1599.20.AUS.M"
            startPeriod="1978-02"
            endPeriod={null}
            detail={null}
            dimensionAtObservation={null}
          />
        </div>
        <div>
          <DataPlot_POPN_2016
            dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
            dataKey="0.TT.16.2.A"
            startPeriod="2016"
            endPeriod={null}
            detail={null}
            dimensionAtObservation={null}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
