// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile components
import DataCheck from "../_components/DataCheck";
import DataPlot from "../_components/DataPlot";
import DataTile from "../_components/DataTile";

export default async function Dashboard() {
  return (
    <main className="text-white mx-5">
      <h1>Dashboard</h1>
      <div className="flex flex-wrap flex-grow align-center justify-center gap-3 py-4">
        <div>
          <DataTile />
        </div>
        <div>
          <DataTile />
        </div>
        <div>
          <DataTile />
        </div>
        <div>
          <DataTile />
        </div>
      </div>

      <div className="flex flex-wrap align-center justify-center gap-3 py-4">
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
      </div>
      {/* <DataCheck
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
