// Fetch data from the ABS Data API
export default async function fetchABSDataAPI(endpoint: string) {

    // define request headers
    const headers = {
      // header required by ABS
      "x-api-key": `${process.env.ABS_API_DATA_KEY}`,
      // request data response in JSON format
      accept: "application/vnd.sdmx.data+json",
    };

    // define the API endpoint to fetch from
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ABS_DATA_BASE_URL}/${endpoint}`,
      { headers }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    // convert response to json and return
    return res.json();
  }