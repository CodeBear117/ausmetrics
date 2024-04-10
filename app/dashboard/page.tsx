// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile components
import { Card } from "@tremor/react";
import DataCheck from "../_components/DataCheck";
import DataPlot from "../_components/DataPlot";

export default async function Dashboard() {
  return (
    <main className="text-white">
      <h1>Dashboard</h1>
      <DataPlot
        dataflowIdentifier="ABS,ABS_PERSONS_PROJ,1.0.0"
        dataKey="0.TT.16.2.A"
        startPeriod="2016"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      />
      <DataCheck
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
