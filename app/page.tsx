// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile and DataPlot_i components

import DataPlot from "./components/DataPlot";
import DataPlot_M13 from "./components/DataPlot_M13";
import DataTile from "./components/ServerTileData";
import SummaryTile from "./components/SummaryTile";
import { TileDataProvider } from "./context/TileDataContext"; // Import the provider

const Dashboard = () => {
  return (
    <TileDataProvider>
      <main className="text-tremor-content-strong dark:text-dark-tremor-content-strong p-4">
        <h2 className="font-bold text-xl mt-4 mb-4">Summary</h2>
        <div className="mb-4 lg:mr-60">
          <SummaryTile />
        </div>
        <h2 className="font-bold text-xl mt-8 mb-4">Headline Stats</h2>
        <div className="grid grid-cols-1 min-[280px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          <div>
            <DataTile
              version="v1"
              dataflowIdentifier="AWE_H"
              format="json"
              measure={4}
              observation={0}
              symbol="$"
              customTitle={null}
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
              customTitle={null}
            />
          </div>
          <div>
            <DataTile
              version="v1"
              dataflowIdentifier="CPI_H"
              format="json"
              measure={1}
              observation={0}
              symbol="%"
              customTitle="Inflation Rate"
            />
          </div>
          <div>
            <DataTile
              version="v1"
              dataflowIdentifier="GDPE_H"
              format="json"
              measure={1}
              observation={0}
              symbol="%"
              customTitle="GDP Growth Rate"
            />
          </div>
          <div>
            <DataTile
              version="v1"
              dataflowIdentifier="BOP_H"
              format="json"
              measure={1}
              observation={1}
              symbol="$"
              customTitle="Balance of Payments (Current Prices)"
            />
          </div>
          <div>
            <DataTile
              version="v1"
              dataflowIdentifier="RT_H"
              format="json"
              measure={2}
              observation={0}
              symbol="%"
              customTitle="Current Retail Trade Growth rate (Consumer Confidence)"
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
              dataKey="1.10001.10.50.Q"
              startPeriod="1996-Q1"
              endPeriod={null}
              detail={null}
              dimensionAtObservation={null}
              customTitle="Quarterly CPI (Consumer Price Index)"
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
              customTitle="Percentage Quarterly Change in Inflation"
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
              customTitle="Unemployment Rate as a Percentage of Labour Force"
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
              customTitle="Projection of Australian Population"
            />
          </div>
        </div>
      </main>
    </TileDataProvider>
  );
};

export default Dashboard;
