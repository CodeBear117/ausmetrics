// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile and DataPlot_i components

import DataPlot from "../_components/DataPlots/DataPlot";
import DataPlot_CPIAus1996 from "../_components/DataPlots/DataPlot_CPIAus1996";
import DataPlot_PopnAus2016 from "../_components/DataPlots/DataPlot_PopnAus2016";
import DataTile from "../_components/DataTiles/DataTile";

export default async function Dashboard() {
  return (
    <main className="text-white p-4">
      <h2 className="text-inter font-bold text-xl mt-4 mb-4">Headline Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="AWE_H"
            format="json"
            measure={4}
            observation={0}
          />
        </div>
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="LF_H"
            format="json"
            measure={2}
            observation={1}
          />
        </div>
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="CPI_H"
            format="json"
            measure={1}
            observation={0}
          />
        </div>
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="GDPE_H"
            format="json"
            measure={1}
            observation={0}
          />
        </div>
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="BOP_H"
            format="json"
            measure={3}
            observation={0}
          />
        </div>
        <div>
          <DataTile
            version="v1"
            dataflowIdentifier="RT_H"
            format="json"
            measure={2}
            observation={2}
          />
        </div>
      </div>
      <h2 className="text-inter font-bold text-xl mt-8 mb-4">
        Featured Charts
      </h2>
      <div className="grid grid-cols-1 min-[767px]:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <DataPlot
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
            dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
            dataKey="0.TT.16.2.A"
            startPeriod="2016"
            endPeriod={null}
            detail={null}
            dimensionAtObservation={null}
          />
        </div>
        <div>
          <DataPlot
            dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
            dataKey="0.TT.16.2.A"
            startPeriod="2016"
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
      </div>
    </main>
  );
}
