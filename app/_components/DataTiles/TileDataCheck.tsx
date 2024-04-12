// This component provides the code to check the data for an API to a certain endpoint

// This component is used in development only

import React from "react";
import fetchABSIndicatorAPI from "@/app/services/fetchABSIndicatorAPI";

// assign types for path params based on template URL provided by ABS Docs
interface DataTileProps {
  dataflowIdentifier: string;
  version: string;
  format: string;
}

interface DataPointTypes {
  observations: {
    [key: string]: number[]; // This assumes keys will always be strings and values will be arrays of numbers
  };
}

const TileDataCheck: React.FC<DataTileProps> = async ({
  version,
  dataflowIdentifier,
  format,
}) => {
  // // build the endpoint
  let endpoint = `${version}/data/${dataflowIdentifier}/${format}`;

  // fetch data from endpoint
  const data = await fetchABSIndicatorAPI(endpoint); // all raw data from call

  // extract useful data
  const dataset = [data.dataSets[0].series];
  const datainfo = [
    data.structure.name, // title of API response
    data.structure.dimensions.series[0].values, // headline data labels array
  ];

  // transform useful data

  // labels
  const dataLabels = datainfo[1].map((item: { name: string }) => item.name);

  // values
  const valuesArray: DataPointTypes[] = Object.values(dataset[0]);
  const observationsArray = valuesArray.map((item) => item.observations);
  let datapoints = observationsArray.map((observations) => observations);

  // combined labels and values
  const labelledData = dataLabels.map((label: string, index: number) => ({
    [label]: datapoints[index],
  }));

  // selected data for display
  const selectedData = labelledData[0]; // adjustment required based on metric

  // extract a certain key value
  const headlineTitle = Object.keys(selectedData)[0];
  const headlineValue = selectedData[headlineTitle]["0"][0]; // adjustment required based on metric

  return (
    <>
      <h2>API Respone Title:</h2>
      <p>{JSON.stringify(datainfo[0])}</p>
      <br />

      {/* <h2>All Headline Data Labels:</h2>
      <p>{JSON.stringify(dataLabels)}</p>
      <br /> */}

      {/* <h2>All Headline Data Values:</h2>
      <p>{JSON.stringify(datapoints)}</p>
      <br /> */}

      <h2>Labelled Headline Data Values:</h2>
      <p>{JSON.stringify(labelledData)}</p>
      <br />

      <h2>Sample Card:</h2>
      <p>{JSON.stringify(headlineTitle)}</p>
      <p>{JSON.stringify(headlineValue)}</p>
      <br />

      {/* <h2>All Raw Data:</h2>
      <p>{JSON.stringify(data)}</p>
      <br /> */}
    </>
  );
};

export default TileDataCheck;

// all dataflows

// {
//     "Dataflows": [
//       { "id": "AWE_H", "name": "Average Weekly Earnings Headline" },
//       { "id": "BA_GCCSA_H", "name": "Building Approvals by Greater Capital Cities Statistical Area (GCCSA) and above Headline" },
//       { "id": "BOP_H", "name": "Balance of Payments Headline" },
//       { "id": "BUILDING_ACTIVITY_H", "name": "Building Activity Headline" },
//       { "id": "CAPEX_H", "name": "Private New Capital Expenditure and Expected Expenditure Headline" },
//       { "id": "CAPEX_EST_H", "name": "Private New Capital Expenditure and Expected Expenditure, Financial Year Estimates Headline" },
//       { "id": "CPI_H", "name": "Consumer Price Index Headline" },
//       { "id": "CPI_M_H", "name": "Monthly Consumer Price Index (CPI) indicator - Headline" },
//       { "id": "CWD_H", "name": "Construction Work Done, Preliminary Headline" },
//       { "id": "GDPE_H", "name": "Expenditure on GDP Headline" },
//       { "id": "HSI_M_H", "name": "Monthly Household Spending Indicator - Headline" },
//       { "id": "ITGS_H", "name": "International Trade in Goods and Services Headline" },
//       { "id": "ITPI_EXP_H", "name": "Export Price Index Headline" },
//       { "id": "ITPI_IMP_H", "name": "Import Price Index Headline" },
//       { "id": "JV_H", "name": "Job Vacancies Headline" },
//       { "id": "LEND_H", "name": "Lending Indicators Headline" },
//       { "id": "LF_H", "name": "Labour Force Headline" },
//       { "id": "MBTI_H", "name": "Monthly Business Turnover Indicator - Headline" },
//       { "id": "PPI_FD_H", "name": "Producer Price Indexes, Final Demand Headline" },
//       { "id": "QBIS_H", "name": "Business Indicators Headline" },
//       { "id": "RT_H", "name": "Retail Trade Headline" },
//       { "id": "WPI_H", "name": "Wage Price Index Headline" }
//     ]
//   }
