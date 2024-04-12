// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile and DataPlot_i components
import DataCheck from "../_components/DataPlots/PlotDataCheck";
import DataPlot from "../_components/DataPlots/DataPlot";
import DataPlot_CPIAus1996 from "../_components/DataPlots/DataPlot_CPIAus1996";
import DataPlot_PopnAus2016 from "../_components/DataPlots/DataPlot_PopnAus2016";
import DataTile from "../_components/DataTiles/DataTile";

export default async function Dashboard() {
  return (
    <main className="text-white mx-5">
      <h1>Dashboard</h1>
      <div className="flex flex-wrap align-center justify-center gap-3 py-4">
        <div>
          <DataTile version="v1" dataflowIdentifier="LF_H" format="json" />
        </div>
        <div>
          <DataTile version="v1" dataflowIdentifier="LF_H" format="json" />
        </div>
        <div>
          <DataTile version="v1" dataflowIdentifier="LF_H" format="json" />
        </div>
        <div>
          <DataTile version="v1" dataflowIdentifier="LF_H" format="json" />
        </div>
      </div>

      <div className="flex flex-wrap align-center justify-center gap-3 py-4">
        <div>
          <DataPlot_PopnAus2016
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
          <DataPlot_CPIAus1996
            dataflowIdentifier="ABS,CPI,1.1.0"
            dataKey="1.10001.10.50.Q"
            startPeriod="1996-Q1"
            endPeriod={null}
            detail={null}
            dimensionAtObservation={null}
          />
        </div>
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
      </div>
    </main>
  );
}
