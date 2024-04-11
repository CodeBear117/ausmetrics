// This route provides the developer with a way to view raw API data

import DataCheck from "../_components/DataCheck";
import DataPlot from "../_components/DataPlot";

export default function About() {
  return (
    <main className="text-white">
      <p>Test</p>

      <DataPlot
        dataflowIdentifier="ABS,CPI,1.1.0"
        dataKey="1.10001.10.50.Q"
        startPeriod="1996-Q1"
        endPeriod={null}
        detail={null}
        dimensionAtObservation={null}
      />

      <DataCheck // this component can be used to view the raw data
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
      />

      <DataCheck // this component can be used to view the raw data
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
