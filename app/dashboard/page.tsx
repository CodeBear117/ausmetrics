// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile components

import DataTile from "../_components/DataTile";

// Fetch data from an external API
async function getData() {
  // define headers required by ABS as defined in their documentation
  const headers = {
    "x-api-key": `${process.env.ABS_API_DATA_KEY}`,
    accept: "application/vnd.sdmx.data+json",
  };

  // define the API endpoint to fetch from
  const res = await fetch(
    `${process.env.ABS_BASE_URL}/data/ABS,ABS_PERSONS_PROJ,1.0.0/0.TT.16.1.A?startPeriod=2016`,
    { headers }
  ); // hard coded endpoint

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const data = await getData(); // all raw data from call
  const meta = data.meta;
  const dataset = data.data.dataSets[0].series["0:0:0:0:0"].observations;
  const datainfo = [data.data.structure.name, data.data.structure.description];

  return (
    <main>
      <h1>Dashboard</h1>
      <h2>Actual Data:</h2>
      <p>{JSON.stringify(dataset)}</p>
      <h2>Data Info:</h2>
      <p>{JSON.stringify(datainfo)}</p>
      <DataTile />
    </main>
  );
}
