// this route presents the main UI of the app. It contains ABS data from the API which is presented through DataTile components

import DataTile from "../_components/DataTile";

export default function Dashboard() {
  return (
    <main>
      <p>Dashboard</p>
      <DataTile />
    </main>
  );
}
