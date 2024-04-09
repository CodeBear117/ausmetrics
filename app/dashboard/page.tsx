// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile components

import DataTile from "../_components/DataTile";
import DataGraph from "../_components/DataGraph";

export default async function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <DataTile />
      <DataGraph
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
